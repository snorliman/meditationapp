import React, { useState } from 'react';
import VerifyPopup from "../components/Register/VerifyPopup";
import "./Register.scss";
import { addUserToStore } from "../utils/addUserToStore";
import firebase, {  usersCollection } from "../utils/firebase";

export default function Register({name, setName, setEmail, setPassword, 
    password, email, confirmPassword, setConfirmPassword, setRegister, register}) {

    const [passwordError, setPasswordError] = useState(false);

    

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
            .then(user => {
                addUserToStore(user);
                user.user.sendEmailVerification().then(()=> {
                    console.log('mail sent')
                })
            })
            .catch(e => {
                console.log(e)
            });
        
        }
    }


    return (
        <section className="register">
            {register && <VerifyPopup/>}
           <form onSubmit={(e) => registerHandler(e)} className="register-form">
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