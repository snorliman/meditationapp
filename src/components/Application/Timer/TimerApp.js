import React from "react";
import "./TimerApp.scss";
import Sheldue from "./Sheldue";
import Library from "./Library";
import Stoper from "./Stoper";

const TimerApp = ({planedSessoin, musicOn }) => {
    return (
        <section className="timer-container">
        {planedSessoin && <Sheldue/>}
        <Stoper/>
        {musicOn && <Library/>}
        </section>
    )
}
export default TimerApp;