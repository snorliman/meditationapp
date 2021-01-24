import React, { useState} from "react";
import "./TimerApp.scss";
import Sheldue from "./Sheldue";
import Library from "./Library";
import Stoper from "./Stoper";

const TimerApp = ({planedSessoin, musicOn }) => {

    const [isRunning, setIsRunning] = useState(false);
    return (
        <section className="timer-container">
        {planedSessoin && <Sheldue/>}
        <Stoper setIsRunning={setIsRunning}/>
        {musicOn && <Library isRunning={isRunning}/>}
        </section>
    )
}
export default TimerApp;