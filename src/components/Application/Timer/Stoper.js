import "./Stoper.scss";
import React, { useState, useEffect } from "react";
import { FaPlay,  FaPause, FaStopCircle, FaAngleDoubleUp, FaAngleDoubleDown} from 'react-icons/fa';

const Stoper = ({setIsRunning, isRunning}) => {
    const [sessionTime, setSessionTime] = useState(30);
    const [doneMeditationTime, setDoneMeditationTime] = useState(0);
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);
    const [ endSession ,setEndSession] = useState(false)

    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          const secondCounter = counter % 60;
          const minuteCounter = Math.floor(counter / 60);
  
          const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
          const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
  
          setSecond(computedSecond);
          setMinute(computedMinute);
        
          setCounter(counter => counter + 1);
          console.log("counter", counter, "sessionTime", sessionTime);
          if(counter == (sessionTime * 60)) {
            clearInterval(intervalId)
            setIsRunning(false);
            setDoneMeditationTime(counter);
            setEndSession(true);
          }
        }, 1000)
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning, counter])
    
  
    const finishSession = () => {
      setIsRunning(false);
      setDoneMeditationTime(counter);
      setEndSession(true);
    }
  
    const setTimeSesionHandler = (e) => {
    setSessionTime(e.target.value)
    } 

    return (
<section className="stoper-container">
  {endSession && (
    <div className="ending-session-container">
      <h1 className="ending-message">Dziękujemy Ci z twoją praktykę!</h1> 

    </div>
  )}
 <div id="pomodoro">
  <div id="clock">
    <div id="timer">
      <div id="title">{ isRunning ? `Twoja praktyka` : `Gotowy?`}</div>
      <div id="countdown">
        <span id="minutes">{minute}</span>
        <span id="seconds">{second}</span>
      </div>
      <div id="controls" className="reset">
          {isRunning
          ? <div onClick={() => setIsRunning(false)} id="pause"><FaPause className="fa-pause"></FaPause> Paza</div>
          : <div onClick={() => setIsRunning(true)} id="start"><FaPlay className="fa-play"></FaPlay> Start</div>
        }
        <div onClick={() => finishSession()} id="reset"><FaStopCircle className="fa-stop-circle"></FaStopCircle> Koniec Praktyki</div>
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