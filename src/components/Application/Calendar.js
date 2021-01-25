import React, { useState, useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";
import firebase, { usersCollection } from "../../utils/firebase";
import { useAuth } from "../../utils/ContextAuth";
import uuid from 'react-uuid';
import { convertDate } from "../../utils/convertDate.js"



export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [timeOfSession, setTimeOfsession] = useState(5);
 const [addedSession, setAddedSession] = useState([]);

 const { currentUser } = useAuth();

 useEffect((currentUser, id) => {

    usersCollection.doc(currentUser..uid).get()
    .then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc)
    });
    // setAddedSession(doc.planedsession);
    })
    .catch(e => console.log(e));

    newSessionHandler(currentUser);
    deleteAddedSession(currentUser);

 }, [addedSession])

  const newSessionHandler = (data) => {

    usersCollection.doc(data.user.uid).update({
      ...data.user.data(),
      planedsession: firebase.firestore.FieldValue.arrayUnion({
        id: uuid(),
        date: startDate,
        duration: timeOfSession
      })
    })

  }
  const deleteAddedSession = (data, id) => {
    // const filteredSession = [...addedSession].filter(item => item.id !== id)
    // return setAddedSession([...filteredSession]);

    usersCollection.doc(data.user.uid).update({
      ...data.user.data(),
      planedsession: firebase.firestore.FieldValue.arrayRemove({
        id: id
      })
    })
    
  }

 return (
   <section className="calendar-container">

   <h2 className="calendar-header">Wybierz datę sesji klikając na kalenadrz i wybierz czas sesji </h2>
   
   <div className="datepicker-container">
     <h3 className="datepicker-header">KALENDARZ</h3>
      <DatePicker
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mmaa"
      selected={startDate}
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
    <button className="calendar-btn" onClick={() => newSessionHandler()}>DODAJ SESJE DO LISTY</button>

      <div className="session-list">
        <h3 className="calendar-list-header">LISTA TWOICH ZAPLANOWANYCH SESJI</h3>
 {addedSession && addedSession.map(item => <p className="list-item" key={item.id}>
   <span>Data Sesji: </span> {`  ${convertDate(item.date)  }`}<span> Czas sesji: </span> {`${item.duration   }`}<FaTrashAlt onClick={()=> deleteAddedSession(item.id)}/></p>)}
      </div>
</section>
 );
}