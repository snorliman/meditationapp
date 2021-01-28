import React, { useEffect, useState } from "react";
import { convertDate } from "../../../utils/convertDate";
import firebase, { sessionsCollection } from "../../../utils/firebase";
import DatePicker from "react-datepicker";

import "./Sheldue.scss";
import { useParams } from "react-router-dom";

const Sheldue = ({setChoosenSession, choosenSession, updatePlanedSession}) => {
    const user =firebase.auth().currentUser;
    const [selectableSessions, setSelectableSessions] = useState([]);
    
   

useEffect(() => {
    showPlanedsession();
},[])

const showPlanedsession = async () => {

    await sessionsCollection
  .where("uid", "==", `${user.uid}`)
  .where("status", "==", "planed")
  .get()
  .then(snapshot => {
    const selected = [];
      snapshot.docs.forEach(doc => { 
      selected.push({...doc.data()});
      console.log("selected", selected)
      setSelectableSessions([...selected]) 
      });
    }).catch(e => console.log(e));
}
const chooseSessionHandler = async (sessionId) => {
await sessionsCollection.doc(`${sessionId}`)
.get()
.then(snapshot => {
    const pickedSession = snapshot.docs.forEach(doc => {doc.data()})
    setChoosenSession(pickedSession)
})
}
console.log("selectableSessions " ,selectableSessions)

    return (
        <div className="sheldue">
            <div className="session-planed">
                <h3>WYBIERZ SESJĘ Z LISTY ZAPLANOWANYCH</h3> 
                {selectableSessions.lenght > 0 && selectableSessions.map(item => <p>{item.uid}</p>)}
            </div>
                <h2>WYBRANA SESJA: {choosenSession.lenght > 0 && convertDate(choosenSession.date.toDate())}</h2>
        </div>
    )
}

export default Sheldue;