import React from "react";
import "./Timer.scss";
import { useState} from "react";
import AppSetupForm from "./AppSetupForm";
import TimerApp from "./TimerApp";

export default function Timer () {

    const [planedSessoin, setPlanedSession] = useState(false);
    const [musicOn, setMusicOn] = useState(false);
    const [finishSetup, setFinishSetup] = useState(false);
  

    return (
        <>
        {finishSetup  
        ? <TimerApp planedSessoin={planedSessoin} musicOn={musicOn}/>
        : <AppSetupForm 
        setPlanedSession= {setPlanedSession} 
        setMusicOn={setMusicOn} 
        setFinishSetup={setFinishSetup}/>}
        </>   
    )
}


