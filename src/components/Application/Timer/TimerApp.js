import React, { useState } from "react";
import "./TimerApp.scss";
import Sheldue from "./Sheldue";
import Library from "./Library";
import Stoper from "./Stoper";

const TimerApp = ({planedSessoin, musicOn, updatePlanedSession }) => {
    const [choosenSession, setChoosenSession] = useState([])
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    

    

  

    return (
        <section className="timer-container">
        {planedSessoin && (
        <Sheldue 
        choosenSession={choosenSession}
        updatePlanedSession={updatePlanedSession} 
        setChoosenSession={setChoosenSession}/>)}
        <Stoper choosenSession={choosenSession} setIsRunning={setIsRunning} isRunning={isRunning}/>
        {musicOn && <Library 
        isRunning={isRunning} 
        setLibraryStatus={setLibraryStatus}
        libraryStatus={libraryStatus}/>}
        </section>
    )
}
export default TimerApp;