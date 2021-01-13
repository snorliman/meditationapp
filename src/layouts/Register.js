import React from 'react';
import "./Register.scss"

export default function Register() {
    return (
        <section className="register">
           <form className="register-form">
           <h2 className="register-header">Zarejestruj sie żeby korzystać z naszej aplikacji</h2>
            <div className="register-container">
                <label className="register-label">PODAJ SWOJE IMIĘ
                    <input className="register-input" type="name"></input>
                </label >
                <label className="register-label" >PODAJ SWÓJ ADRES EMAIL 
                    <input className="register-input" type="email"></input>
                </label>
                <label className="register-label">WPISZ SWOJE HASŁO
                    <input className="register-input"type="password"></input>
                </label>
                <label className="register-label">POWTÓRZ SWOJE HASŁO
                    <input className="register-input" type="password"></input>
                </label>

                <button className="btn submit-btn" type="submit">STWÓRZ KONTO</button>
            </div>
        </form> 
        </section>
        
    )
}