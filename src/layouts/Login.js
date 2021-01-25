import React, { useState, useRef, useEffect } from "react";
import "./Login.scss";
import firebase from "../utils/firebase";
import Button from "../components/Button/Button";
import {FaGoogle} from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { useAuth } from "../utils/ContextAuth";
import { Link,  useHistory } from "react-router-dom";

export default function Login({password, register, setLogin, email, login}) {
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmialError] = useState(false);
    const [loading, setLoading] = useState(false)

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signUp } = useAuth();
    const history = useHistory();
    let unmouted = false
    useEffect(()=> {
        
        loginUser(unmouted)

        return () => {
            unmouted = true
        }
    }, [])

    function loginUser(unmouted) {
            if(passwordRef)
            firebase
            .auth()
            .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(data => {
                console.log("zalogowano", data.user)
                history.push("/aplikacja");
            })
            .catch(e => {
                console.log(e)
            });
        
        };
        const loginHandler = (e) => {
            e.preventDefault();
            loginUser(unmouted)
        }
    

    const valitation = () => {
    //     if(password !== tipedPassword) {
    //         setPasswordError(true);
    //    } 
    //    if(email !== tipedEmial) {
    //         setEmialError(true);
    //    } if(password === tipedPassword && email === tipedEmial ) {
    //        setLogin(true);
    //        setEmialError(false);
    //        setPasswordError(false);
    //        firebase
    //        .auth()
    //        .signInWithEmailAndPassword(email, password)
    //        .then(response => {
    //            console.log(response)
    //        })
    //        .catch(e => {
    //            console.log(e)
    //        });
    //     }
    }
        
    // async function loginHandler (e){
    //     e.preventDefault();
    //     try {
    //         setPasswordError("");
    //         setLoading(true);
    //     await login(emailRef.current.value, passwordRef.current.value)
    //     history.push("/aplikacja");
    //     } catch {
    //         setPasswordError("Nie udało się zalogować")
    //     }
    //     setLoading(false);

    //     // valitation();
        
    // }
    const googleAuthHandler = () => {
        // const provaider = new firebase.auth.GoogleAuthProvider();
        // firebase
        // .auth()
        // .signInWithPopup(provaider)
        // .then((result) => {
            
        //     addUserToStore(result);
        //     setLogin(true);
        //     console.log(result)
        // })
        // .catch((e) => {
        //     console.log(e)
        // })
    }
    

    return (
        <>
        {login && <Redirect to="aplikacja"/>}
        <section className="login">
        <form onSubmit={(e) => loginHandler(e)} className="login-form">
            <h2 className="login-header">Zaloguj się do aplikacji</h2>
         <div className="login-container">
             
             <label className="login-label" >PODAJ SWÓJ ADRES EMAIL 
                 <input ref={emailRef} required className="register-input" type="email"></input>
                 {emailError && <span style={{color: "red",fontSize: "8px", display: "block" }}>ZŁY EMAIL</span>}
             </label>
             <label className="login-label">WPISZ SWOJE HASŁO
                 <input ref={passwordRef} required className="register-input"type="password"></input>
                 {passwordError && <span style={{color: "red", fontSize: "8px", display: "block"}}>ZŁE HASŁO</span>}
             </label>
             <label className="login-label" >ZALOGUJ SIĘ PRZEZ KONTO GOOGLE 
                 <Button onClick={() => googleAuthHandler()}  type="email"><FaGoogle/>GOOGLE</Button>
             </label>
            

             <button className="btn submit-btn" type="submit">ZALOGUJ SIĘ</button>
             <h2>Nie masz konta?<Link to="/rejestracja">Zarejestruj się</Link></h2>
         </div>
     </form> 
     </section>
     </>
    )
}