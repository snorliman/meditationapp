import React from "react";
import Sheldue from "./Sheldue";
import Library from "./Library";
import Stoper from "./Stoper";

const TimerApp = ({planedSessoin, musicOn }) => {
    return (
        <section className="timer-container">
        {planedSessoin && <Sheldue/>}
        {musicOn && <Library/>}
        <Stoper/>
        </section>
    )
}
export default TimerApp;