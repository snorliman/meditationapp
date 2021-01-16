import React from "react";

const AppSetupForm = ({ setFinishSetup, setPlanedSession, setMusicOn }) => {
    return (
        <form className="timer-container">
            <h2 className="timer-setup-header">Czy to zaplanowana wcześniej sesja, czy spontaniczna?</h2>
            <div className="radio-container">
                <label onClick={()=>setPlanedSession(true)}> Zaplanowana sesja
                    <input type="radio"   name="planed-session" />
                </label>
                <label onClick={()=>setPlanedSession(false)}> Sponaniczna sesja
                    <input type="radio"   name="planed-session" />
                </label>
            
            </div>
            
            <h2 className="timer-setup-header">Czy chcesz skorzystać z medytacji w ciszy czy wybrać muzykę?</h2>
            <div className="radio-container">
                <label onClick={() => setMusicOn(false)}> Cicha medytacja
                    <input type="radio"  name="music" />
                </label>
                <label onClick={() => setMusicOn(true)}> Medytacja z muzyką
                    <input type="radio"  name="music" />
                </label>
            </div>
            <button className="submit-timer" onClick={() => setFinishSetup(true)} type="submit">START</button>
        </form>
    )
};
export default AppSetupForm;