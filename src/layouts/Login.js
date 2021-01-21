import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Login.scss";
import firebase from "../utils/firebase";

export default function Login({password, register, setLogin, email}) {
    const [tipedPassword,setTipedPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmialError] = useState(false);
    const [tipedEmial, setTipedEmail] = useState('');
    const loginHandler = (e) => {
        e.preventDefault;
        if(password !== tipedPassword) {
            return setPasswordError(true);
        }
        if(email !== tipedEmial) {
             return setEmialError(true);
        }

        if(password === tipedPassword && email === tipedEmial ) {
            setLogin(true);
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
            return <Redirect to={"/aplikacja"}/>
        }
    }
    

    return (
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
            

             <button className="btn submit-btn" type="submit">ZALOGUJ SIĘ</button>
         </div>
     </form> 
     </section>
    )
}