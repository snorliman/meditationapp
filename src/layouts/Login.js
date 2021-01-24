import React, { useState } from "react";
import "./Login.scss";
import firebase from "../utils/firebase";
import Button from "../components/Button";
import {FaGoogle} from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { addUserToStore } from "../utils/addUserToStore";

export default function Login({password, register, setLogin, email, login}) {
    const [tipedPassword,setTipedPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmialError] = useState(false);
    const [tipedEmial, setTipedEmail] = useState('');

    const valitation = () => {
        if(password !== tipedPassword) {
            setPasswordError(true);
       } 
       if(email !== tipedEmial) {
            setEmialError(true);
       } if(password === tipedPassword && email === tipedEmial ) {
           setLogin(true);
           firebase
           .auth()
           .signInWithEmailAndPassword(email, password)
           .then(response => {
               console.log(response)
           })
           .catch(e => {
               console.log(e)
           });
        }
    }
        
    const loginHandler = (e) => {
        // e.preventDefault;
        // valitation();
        
    }
    const googleAuthHandler = () => {
        const provaider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provaider)
        .then((result) => {
            setLogin(true);
            addUserToStore(result)
            console.log(result)
        })
        .catch((e) => {
            console.log(e)
        })
    }
    

    return (
        <>
        {login && <Redirect to="aplikacja"/>}
        <section className="login">
        <form onSubmit={(e) => loginHandler(e)} className="login-form">
            <h2 className="login-header">Zaloguj się do aplikacji</h2>
         <div className="login-container">
             
             <label className="login-label" >PODAJ SWÓJ ADRES EMAIL 
                 <input onChange={(e) => setTipedEmail(e.target.value)} className="register-input" type="email"></input>
                 {emailError && <span style={{color: "red",fontSize: "8px", display: "block" }}>ZŁY EMAIL</span>}
             </label>
             <label className="login-label">WPISZ SWOJE HASŁO
                 <input onChange={(e) => setTipedPassword(e.target.value)} className="register-input"type="password"></input>
                 {passwordError && <span style={{color: "red", fontSize: "8px", display: "block"}}>ZŁE HASŁO</span>}
             </label>
             <label className="login-label" >ZALOGUJ SIĘ PRZEZ KONTO GOOGLE 
                 <Button onClick={() => googleAuthHandler()}  type="email"><FaGoogle/>GOOGLE</Button>
             </label>
            

             <button className="btn submit-btn" type="submit">ZALOGUJ SIĘ</button>
         </div>
     </form> 
     </section>
     </>
    )
}