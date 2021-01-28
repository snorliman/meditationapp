import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "../Button/Button";
import firebase,{ sessionsCollection } from "../../utils/firebase";
import { isAfter } from "date-fns";

export default function Panel () {

    const user = firebase.auth().currentUser;
    const [allPlanedSession, setAllPlanedSession] = useState([]);
    const [actualDate] = useState(new Date())

    useEffect(() => {
        if(user) {
        const getAllPlanedSessions = async () => {
            await sessionsCollection
            .where("uid", "==", `${user.uid}`)
            .where("status", "==", "planed")
            .get()
            .then((snapshot) => {
                const all = snapshot.docs.forEach(doc => {doc.data()})
                setAllPlanedSession(all)
                console.log("pobrano zaplanowane sesje")
            }).catch(e => console.log(e))
        }
        getAllPlanedSessions();
        updatePlanedSession();
    } else {
        console.log("nie ma usera")
    }
    }, [allPlanedSession])

    const updatePlanedSession = () => {
    
        if(allPlanedSession) {
            allPlanedSession.map(item => {
            if (isAfter((new Date(item.date.seconds * 1000 + item.date.nanoseconds/1000000), actualDate))) {
               try {
                  sessionsCollection.doc(`${item.sessonId}`).update({
                   "status": "failed",
                   "details.activetime": 0
                })
                .then(() => console.log("uaktualniono listę sesji"))
                .catch(e => console.log(e)) 
               } catch {
                   console.log("nie udało się uakualnić listy zaplanowanych")
               }
            } else {
                console.log("planowana data nie mineła jeszcze")
            }
        })
    } else {
        console.log("nie ma allPlanedSession")
    }
}


    const {url} = useRouteMatch();
    return (
        <nav className="panel">
            <Link to={`${url}/timer`}>
                <Button onClick={() => updatePlanedSession()}>TIMER</Button>
            </Link>
            <Link to={`${url}/kalendarz`}>
                <Button onClick={() => updatePlanedSession()}>KALENDARZ</Button>
            </Link>
            <Link to={`${url}/historia`}>
                <Button onClick={() => updatePlanedSession()}>HISTORIA</Button>
            </Link>   
        </nav>
    )
}