import React from 'react';
import "./Contact.scss";
import ornament from "../../assets/ornament/floral-design-with-curled-edges.svg";

export default function HowToUseApp() {
    return (
        <section id="contact">
            <div className="section-container" data-aos="fade-up">
                <h2>Skontaktuj się z nami!</h2>

                <form>
                    <div className="input-container">
                       <label htmlFor="name">Imię</label>
                        <input name="name"type="text"></input> 
                    </div>
                    <div className="input-container"> 
                        <label htmlFor="email">adres email</label>
                        <input name="email" type="email"></input>

                    </div>
                    <div className="textarea-container">
                        <label htmlFor="message">Zostaw nam wiadomość!</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                </form>
                <img src={ornament} alt="ornament"/>
            </div>
    
    </section>
    )
}