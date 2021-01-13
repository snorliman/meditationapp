import React from 'react';
import "./Register.scss"

export default function Register() {
    return (
        <section className="register">
           <form className="register-form">
            <div className="register-container">
                <label className="register-label">Podaj swoję imię
                    <input type="name"></input>
                </label >
                <label className="register-label" >Podal adres email
                    <input className="register-input" type="email"></input>
                </label>
                <label className="register-label">Wpisz swoje hasło
                    <input className="register-input"type="password"></input>
                </label>
                <label className="register-label">Powtórz swoje hasło
                    <input className="register-input" type="password"></input>
                </label>

                <button className="btn" type="submit">Swtórz konto</button>
            </div>
        </form> 
        </section>
        
    )
}