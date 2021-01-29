import React, { useState, useRef, useEffect } from "react";
import "./Login.scss";
import firebase from "../utils/firebase";
import Button from "../components/Button/Button";
import {FaGoogle} from "react-icons/fa";
import { Link,  useHistory } from "react-router-dom";

export default function Login({password, register, setLogin, email, login}) {
    const [error, setError] = useState("");
    const [ unmouted, setUnmouted] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    useEffect(()=> {
        
        loginUser(unmouted)

        return () => {
            setUnmouted(true)
        }
    }, [unmouted])

    function loginUser(unmouted) {
         if(!unmouted && passwordRef) {
            setError('');
            firebase
            .auth()
            .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(() => {
                console.log("zalogowano" )
                history.push("/aplikacja");
                setLogin(true)
            })
            .catch(e => {
                console.log(e)
            });
        } else {
            setError("złe hasło lub email")
        }
        };
        const loginHandler = (e) => {
            e.preventDefault();
            loginUser(unmouted)
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
        <section className="login">
        <form onSubmit={(e) => loginHandler(e)} className="login-form">
            <h2 className="login-header">Zaloguj się do aplikacji</h2>
         <div className="login-container">
             
             <label className="login-label" >PODAJ SWÓJ ADRES EMAIL 
                 <input ref={emailRef} required className="register-input" type="email"></input>
                 {error && <span style={{color: "red",fontSize: "8px", display: "block" }}>{error}</span>}
             </label>
             <label className="login-label">WPISZ SWOJE HASŁO
                 <input ref={passwordRef} required className="register-input"type="password"></input>
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