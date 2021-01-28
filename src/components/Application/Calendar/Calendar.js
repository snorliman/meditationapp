import React, { useState, useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";
import firebase, {  sessionsCollection } from "../../../utils/firebase";
import { convertDate } from "../../../utils/convertDate.js";
import uuid from 'react-uuid';
import { isAfter } from "date-fns"



export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [timeOfSession, setTimeOfsession] = useState(5);
  const [addedSession, setAddedSession] = useState([])
 const [loading, setLoading] = useState(false)
 

 const user =firebase.auth().currentUser;
 
  const fetchData = async () => {
  
  await sessionsCollection
  .where("uid", "==", `${user.uid}`)
  .where("status", "==", "planed")
  .get()
  .then( (snapshot) => {
    const session = [];
      snapshot.docs.forEach(doc => { 
      session.push({...doc.data()});
      console.log("session", session)
      setAddedSession([...session]) 
      
    })
  }).catch(e => console.log(e));
  console.log("addedSession", addedSession)
}
 useEffect( () => {
   if (user) { 
    fetchData()
} else console.log("nie ma usera")
}, [])

  const newSessionHandler = async (user) => {
  setLoading(true)
    if(user) {
      const id = uuid();
    await sessionsCollection.doc(id).set({
      uid: user.uid,
      sessionId: id,
      status: "planed",
      date: new Date(startDate),
      details: {
        planedtime: timeOfSession,
        activetime: 0,
      }
    
    }).then(() => {
      console.log("startDate", startDate)
      console.log("dodano sesje")
    fetchData();
    setLoading(false)
    })
    .catch(e => console.log(e))
  } else setLoading(false)
}
  
  const deleteAddedSession = async (sessionId) => {
    
    await sessionsCollection.doc(`${sessionId}`)
    .delete()
    .then(() => {
    // const filteredSession = [...addedSession].filter(item => sessionId !== item.sessionId )
    // setAddedSession([...filteredSession]);
    fetchData();
    console.log("usunięto sesje")})
    .catch(e => console.log(e))
    
  }
 
 return (
   <section className="calendar-container">

   <h2 className="calendar-header">Wybierz datę sesji klikając na kalenadrz i wybierz czas sesji </h2>
   
   <div className="datepicker-container">
     <h3 className="datepicker-header">KALENDARZ</h3>
      <DatePicker
      showTimeSelect
      dateFormat=" d, MM, yyyy H:mm"
      selected={startDate}
      // minDate={new Date()}
      selectsStart
      startDate={startDate}
      onChange={date => setStartDate(date)}
      />
   </div>
    
    <label className="sessiontime-label">Zaplanuj czas sesji
      <select className="select-css calendar-select-time" onChange={(e) => setTimeOfsession(e.target.value)} type="select">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
        <option value="60">60</option>
      </select>
    </label>
    <button disabled={loading} className="calendar-btn" onClick={() => newSessionHandler(user)}>DODAJ SESJE DO LISTY</button>

      <div className="session-list">
        <h3 className="calendar-list-header">LISTA TWOICH ZAPLANOWANYCH SESJI</h3>
 {addedSession && addedSession.map(item => <p className="list-item" key={item.sessionId}>
   <span>Data Sesji: </span> {` ${convertDate(item.date.toDate())}  }`}
   <span> Czas sesji: </span> {`${item.details.planedtime   }`}
   <FaTrashAlt onClick={()=> deleteAddedSession(item.sessionId)}/></p>)}
      </div>
</section>
 );
}