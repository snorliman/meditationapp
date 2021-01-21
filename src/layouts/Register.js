import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import "./Register.scss";
import firebase from "../utils/firebase";

export default function Register({name, setName, setEmail, setPassword, 
    password, email, confirmPassword, setConfirmPassword, setRegister}) {

    const [passwordError, setPasswordError] = useState(false)

    const registerHandler = (e) => {
        e.preventDefault;

        if(password !== confirmPassword) {
            setPasswordError(true)
        }
        else {
            setRegister(true);
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
            return <Redirect to={"/zaloguj"}
        }
    }


    return (
        <section className="register">
           <form onSubmit={() => registerHandler(e)} className="register-form">
           <h2 className="register-header">Zarejestruj sie żeby korzystać z naszej aplikacji</h2>
            <div className="register-container">
                <label className="register-label">PODAJ SWOJE IMIĘ
                    <input onChange={(e) => setName(e.target.value)} className="register-input" value={name} type="name"></input>
                </label >
                <label className="register-label" >PODAJ SWÓJ ADRES EMAIL 
                    <input onChange={(e) => setEmail(e.target.value)} className="register-input" value={emial} type="email"></input>
                </label>
                <label className="register-label">WPISZ SWOJE HASŁO
                    <input onChange={(e) => setPassword(e.target.value)} className="register-input" value={password} type="password"></input>
                </label>
                <label className="register-label">POWTÓRZ SWOJE HASŁO
                    <input onChange={(e) => setConfirmPassword(e.target.value)} 
                    className="register-input" value={confirmPassword} type="password"></input>
                    {passwordError && <span style={{color: "red", fontSize: "8px", display: "block"}}>HASŁO MUSI BYĆ IDENTYCZNE</span>}
                </label>

                <button className="btn submit-btn" type="submit">STWÓRZ KONTO</button>
            </div>
        </form> 
        </section>
        
    )
}