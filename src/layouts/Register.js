import React, { useState, useRef, useEffect } from 'react';
import "./Register.scss";
import firebase, { usersCollection } from "../utils/firebase";
import {  useHistory } from "react-router-dom";

export default function Register({password, confirmPassword}) {

        const emailRef = useRef();
        const passwordRef = useRef();
        const confirmPasswordRef = useRef();
        const nameRef = useRef();
        const history = useHistory();

    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ unmouted, setUnmouted] = useState(false)
    useEffect(()=> {
        
        registerUser(unmouted)

        return () => {
            setUnmouted(true)
        }
    }, [unmouted])

    function registerUser(unmouted) {
        if(password !== confirmPassword) {
            setPasswordError(true)
        }
        else {
            if(!unmouted)
            firebase
            .auth()
            .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(credential => {
                
                return usersCollection.doc(credential.user.uid).set({
                    email: credential.user.email,
                    name: nameRef.current.value,
                });
            }).then(() => {
                console.log("added user to firestore");
                history.push("/zaloguj");
            })
            .catch(e => {
                console.log(e)
            });
            setLoading(false);
        
        };
    }
        
     function registerHandler (e) {
        e.preventDefault();
        registerUser(unmouted)   
    }
       

    return (
        <section className="register">
           <form onSubmit={(e) => registerHandler(e)} className="register-form">
           <h2 className="register-header">Zarejestruj sie żeby korzystać z naszej aplikacji</h2>
            <div className="register-container">
                <label className="register-label">PODAJ SWOJE IMIĘ
                    <input ref={nameRef} required className="register-input" type="name"></input>
                </label >
                <label className="register-label" >PODAJ SWÓJ ADRES EMAIL 
                    <input ref={emailRef} required className="register-input"  type="email"></input>
                </label>
                <label className="register-label">WPISZ SWOJE HASŁO
                    <input ref={passwordRef} required className="register-input" type="password"></input>
                </label>
                <label className="register-label">POWTÓRZ SWOJE HASŁO
                    <input
                    className="register-input"  ref={confirmPasswordRef} required type="password"></input>
                    {passwordError && <span style={{color: "red", fontSize: "8px", display: "block"}}>{passwordError}</span>}
                </label>

                <button disabled={loading} className="btn submit-btn" type="submit">STWÓRZ KONTO</button>
            </div>
        </form> 
        </section>
        
    )
}