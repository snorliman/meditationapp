import React from "react";
import "./Timer.scss";
import {useState} from "react";
import { Redirect } from "react-router-dom"

export default function Timer () {


    const [planedSessoin, setPlanedSession] = useState(false);
    const [musicOn, setMusicOn] = useState(false);

    const setupTimerHandler = (e) => {
        e.preventDefault();

        function chooseTimer (planedSessoin, musicOn) {
            if (planedSessoin ==="planed" && musicOn === "silent") {
                return <Redirect to={``}/>;
            } if (planedSessoin === "planed" && musicOn === "music") {
                return <Redirect to={``}/>
            } if (planedSessoin ==="spontan" && musicOn === "silent") {
                return <Redirect to/>
            } if (planedSessoin === "spontan" && musicOn === "music") {
                return <Redirect to />
            }
        };
        chooseTimer(planedSessoin, musicOn)

    }




    return (
        <form onSubmit ={setupTimerHandler} className="timer-container">
            <h2 className="timer-setup-header">Czy to zaplanowana wcześniej sesja, czy spontaniczna?</h2>
            <div className="radio-container">
                <label> Zaplanowana sesja
                    <input type="radio" onClick={setPlanedSession("planed")} name="planed-session" value="planed"/>
                </label>
                <label> Sponaniczna sesja
                    <input type="radio"  onClick={setPlanedSession("spontan")} name="planed-session" value="spontan"/>
                </label>
            
            </div>
            
            <h2 className="timer-setup-header">Czy chcesz skorzystać z medytacji w ciszy czy wybrać muzykę?</h2>
            <div className="radio-container">
                <label> Cicha medytacja
                    <input type="radio" onClick={setMusicOn("silent")} name="music" value="silent"/>
                </label>
                <label> Medytacja z muzyką
                    <input type="radio" onClick={setMusicOn("music")} name="music" value="music"/>
                </label>
            </div>
            <input className="submit-timer" type="submit">START</input>
            

        </form>
    )
}