import React from "react";
import "./Login.scss";
export default function Login() {
    return (
        <section className="login">
        <form className="login-form">
            <h2 className="login-header">Zaloguj się do aplikacji</h2>
         <div className="login-container">
             
             <label className="login-label" >PODAJ SWÓJ ADRES EMAIL 
                 <input className="register-input" type="email"></input>
             </label>
             <label className="login-label">WPISZ SWOJE HASŁO
                 <input className="register-input"type="password"></input>
             </label>
            

             <button className="btn submit-btn" type="submit">ZALOGUJ SIĘ</button>
         </div>
     </form> 
     </section>
    )
}