import React, { useEffect, useState } from "react";
import { convertDate } from "../../../utils/convertDate";
import { FaTrashAlt } from 'react-icons/fa';
import firebase, { sessionsCollection } from "../../../utils/firebase";
import "./Sheldue.scss";

const Sheldue = ({setChoosenSession, choosenSession, updatePlanedSession}) => {
    const user =firebase.auth().currentUser;
    const [selectableSessions, setSelectableSessions] = useState([]);

useEffect(() => {
    showPlanedsession();
    showChoosenSession();
    
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
      console.log("selectableSessions", selectableSessions) 
      });
    }).catch(e => console.log(e));
}
    const chooseSessionHandler = async (sessionId) => {
        if(choosenSession.lenght < 2)
    await sessionsCollection.doc(`${sessionId}`)
    .update({
        "status": "active"
    })
    .then(() => {
        showPlanedsession()
        showChoosenSession()
    }).catch((e) => console.log(e))
}
    const showChoosenSession = async () => {
        await sessionsCollection
    .where("uid", "==", `${user.uid}`)
    .where("status", "==", "active")
    .get()
    .then(snapshot => { 
        const choosen = [];
        snapshot.docs.forEach(doc => { 
        choosen.push({...doc.data()});
        
        setChoosenSession([...choosen]) 
            })  
        }).catch(e => console.log(e))
    }
    const deleteChoosenSession = async (id) => {
        console.log("odpaliła się funkcja")
        await sessionsCollection.doc(`${id}`)
        .update({
            "status": "planed"
        }).then(() => {
            console.log("zmieniono na planed")
            showPlanedsession()
            showChoosenSession()
        }).catch((e) => console.log(e))
        
    }
  
    return (
        <>
        <div className="sheldue">
            <div className="session-planed">
                <h3>WYBIERZ SESJĘ Z LISTY ZAPLANOWANYCH</h3> 
                <ul className="list-of-session">
                {selectableSessions  && selectableSessions.map(item => <p 
                className="list-item" 
                onClick={() => chooseSessionHandler(item.sessionId)}
                key={item.sessionId}>
                    <span>Data Sesji: </span> {` ${convertDate(item.date.toDate())} `}
                    <span> Czas sesji: </span> {`${item.details.planedtime}`} </p>)}
                    </ul>
            </div>
        </div>
            <div className="choosen-session">
                <h2>WYBRANA SESJA:</h2> 
                <ul className="list-of-session">
                    {choosenSession && choosenSession.map(item => <li 
                    key={item.sessionId}
                    className="list-item"> {convertDate(item.date.toDate())}
                    <FaTrashAlt onClick={()=> deleteChoosenSession(item.sessionId)}/>
                    </li>)}
                </ul>
            </div>
        </>
        
    )
}
export default Sheldue;