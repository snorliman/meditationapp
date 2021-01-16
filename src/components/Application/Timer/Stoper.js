import React from "react";
import "./Stoper.scss";
import { useState, useEffect } from "react";
import { FaPlay,  FaPause, FaStopCircle, FaAngleDoubleUp, FaAngleDoubleDown} from 'react-icons/fa';

const Stoper = () => {
    const [sessionTime, setSessionTime] = useState(30);
    const [countSessionMinutes, setCountSessionMinutes] = useState(sessionTime);
    const [seconds, setSeconds ] =  useState(0);
    const [isRunning, setIsRunning] = useState(false)
    
    useEffect(()=>{
        if(isRunning) {
        const id = setInterval(() => {
            if(countSessionMinutes === sessionTime) {
                setCountSessionMinutes(countSessionMinutes => countSessionMinutes -1);
            }
        if (seconds > 0) {
            setSeconds(seconds => seconds - 1)
            setCountSessionMinutes(countSessionMinutes => countSessionMinutes -1)
        }
        if (seconds === 0) {
            setCountSessionMinutes(countSessionMinutes => countSessionMinutes - 1);
            (setSeconds(59))};
            if (countSessionMinutes === 0 && seconds === 0) {
                clearInterval(id)
            }
        } 
    , 1000); 
    return () => {clearInterval(id)}   
    } return undefined;
    }, [isRunning, seconds, countSessionMinutes]);

    

    const setTimeSesionHandler = (e) => {
    setSessionTime(e.target.value)
    } 
    return (
<section className="stoper-container">
 <div id="pomodoro">
  <div id="clock">
    <div id="timer">
      <div id="title">{ isRunning ? `Twoja praktyka` : `Gotowy?`}</div>
      <div id="countdown">
        <span id="minutes">{sessionTime}</span>
        <span id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div id="controls" className="reset">
          {isRunning
          ? <div onClick={() => setIsRunning(false)} id="pause"><FaPause className="fa-pause"></FaPause> Paza</div>
          : <div onClick={() => setIsRunning(true)} id="start"><FaPlay className="fa-play"></FaPlay> Start</div>
        }
        <div id="reset"><FaStopCircle className="fa-stop-circle"></FaStopCircle> Koniec Praktyki</div>
      </div>
    </div>
  </div>
  <div id="options">
    <div id="session">
      <FaAngleDoubleUp onClick={() => setSessionTime(sessionTime + 1)} id="incrSession" className="FaAngleDoubleUp"></FaAngleDoubleUp>
      <span className="option-title">Session</span>
      <input onChange={(e) => setTimeSesionHandler(e.target.value)} id="sessionInput" type="number" value={sessionTime} max="60" min="5"/>
      <FaAngleDoubleDown onClick={() => setSessionTime(sessionTime -1)} id="decrSession" className="FaAngleDoubleDown"></FaAngleDoubleDown>
    </div>
  </div>
</div>
<div id="audio-selector">
  <div id="forest" className="theme">Forest</div>
  <div id="ocean" className="theme">Ocean</div>
  <div id="rainy" className="selected theme">Rainy</div>
  <div id="peace" className="theme">Peace</div>
  <div id="cafe" className="theme"></div>
</div>
<audio src="https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/rain.mp3"/>
    </section>
    )
}
export default Stoper;