import "./Stoper.scss";
import React, { useState, useEffect } from "react";
import firebase, { sessionsCollection } from "../../../utils/firebase";
import { FaPlay,  FaPause, FaStopCircle, FaAngleDoubleUp, FaAngleDoubleDown} from 'react-icons/fa';
import uuid from 'react-uuid';

const Stoper = ({setIsRunning, isRunning, choosenSession}) => {
    const [sessionTime, setSessionTime] = useState(30);
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);
    const [ endSession ,setEndSession] = useState(false);
    const user =firebase.auth().currentUser;

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
          if(counter === (sessionTime * 60)) {
            clearInterval(intervalId)
            setIsRunning(false);
            setEndSession(true);
            successSession();
            
          }
        }, 1000)
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning, counter])
    
    const successSession = async() => {
      if(choosenSession) {
      await sessionsCollection.doc(`${choosenSession.sessionId}`)
            .update({
              "status": "success",
              "detail.activetime": parseInt(sessionTime)
            }).then(() => {
              console.log("sesja skończona sukcesem")
            }).catch(e => console.log(e))
          } else {
            const id = uuid();
            await sessionsCollection.doc(id).set({
              uid: user.uid,
              sessionId: id,
              status: "extra",
              date: new Date(),
              details: {
                planedtime: sessionTime,
                activetime: sessionTime
              }
            }).then(() => console.log("uało się dodać extra sesję"))
            .catch((e) => console.log(e) )
          }
    }
    const partlyDoneSession = async() => {
      if (choosenSession) {
      await sessionsCollection.doc(`${choosenSession.sessionId}`)
            .update({
              "status": "partlydone",
              "detail.activetime": parseInt(Math.floor(counter / 60))
            }).then(() => {
              console.log("sesja skończona częściowo")
            }).catch(e => console.log(e))
          } else {
            const id = uuid();
            await sessionsCollection.doc(id).set({
              uid: user.uid,
              sessionId: id,
              status: "extra",
              date: new Date(),
              details: {
                planedtime: sessionTime,
                activetime: parseInt(Math.floor(counter / 60))
              }
            }).then(() => console.log("uało się dodać extra sesję"))
            .catch((e) => console.log(e) )
          }
    }

    const finishSession = () => {
      setIsRunning(false);
      setEndSession(true);
      partlyDoneSession();
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
      <input onChange={(e) => setTimeSesionHandler(e.target.value)} id="sessionInput" type="number" value={choosenSession ? choosenSession.details.planedtime: sessionTime} max="60" min="5"/>
      <FaAngleDoubleDown onClick={() => setSessionTime(sessionTime -1)} id="decrSession" className="FaAngleDoubleDown"></FaAngleDoubleDown>
    </div>
  </div>
</div>
    </section>
    )
}
export default Stoper;