import React from "react";
import "./Timer.scss";
import { useState} from "react";
import AppSetupForm from "./AppSetupForm";
import TimerApp from "./TimerApp";

export default function Timer ({updatePlanedSession, addedSession}) {

    const [planedSessoin, setPlanedSession] = useState(false);
    const [musicOn, setMusicOn] = useState(false);
    const [finishSetup, setFinishSetup] = useState(false);
  

    return (
        <>
        {finishSetup  
        ? <TimerApp 
        updatePlanedSession={updatePlanedSession} 
        planedSessoin={planedSessoin} 
        musicOn={musicOn}
        addedSession={addedSession}/>
        : <AppSetupForm 
        setPlanedSession= {setPlanedSession} 
        setMusicOn={setMusicOn} 
        setFinishSetup={setFinishSetup}/>}
        </>   
    )
}


