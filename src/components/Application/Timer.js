import React from "react";
import "./Timer.scss";
import { useState, useEffect} from "react";
import Sheldue from "./Sheldue";
import Library from "./Library";
import Stoper from "./Stoper";

export default function Timer () {

    const [planedSessoin, setPlanedSession] = useState(false);
    const [musicOn, setMusicOn] = useState(false);
    const [finishSetup, setFinishSetup] = useState(false)

    const setupTimerHandler = (e) => {
        e.preventDefault();
        setFinishSetup(true);


    }  

    const AppSetupForm = ({ setupTimerHandler, setPlanedSession, setMusicOn }) => {
        return (
            <form onSubmit ={setupTimerHandler} className="timer-container">
                <h2 className="timer-setup-header">Czy to zaplanowana wcześniej sesja, czy spontaniczna?</h2>
                <div className="radio-container">
                    <label> Zaplanowana sesja
                        <input type="radio" onClick={()=> setPlanedSession(true)} name="planed-session" value="planed"/>
                    </label>
                    <label> Sponaniczna sesja
                        <input type="radio"  onClick={()=>setPlanedSession(false)} name="planed-session" value="spontan"/>
                    </label>
                
                </div>
                
                <h2 className="timer-setup-header">Czy chcesz skorzystać z medytacji w ciszy czy wybrać muzykę?</h2>
                <div className="radio-container">
                    <label> Cicha medytacja
                        <input type="radio" onClick={() => setMusicOn(false)} name="music" value="silent"/>
                    </label>
                    <label> Medytacja z muzyką
                        <input type="radio" onClick={() => setMusicOn(true)} name="music" value="music"/>
                    </label>
                </div>
                <input className="submit-timer" type="submit">START</input>
            </form>
        )
    };

    const TimerApp = ({planedSessoin, musicOn }) => {
        return (
            {planedSessoin && <Sheldue/>}
            {musicOn && <Library/>}
            <Stoper/>
        )
    }

    return (
        {finishSetup ? TimerApp : AppSetupForm}
        
         
        
    )
}


