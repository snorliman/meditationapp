import React, { useEffect, useState } from 'react';
import "./MeditationApp.scss";
import Panel from "../components/Application/Panel";
import Timer from "../components/Application/Timer/Timer";
import Calendar from "../components/Application/Calendar";
import History from "../components/Application/History";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import firebase,{ sessionsCollection } from "../utils/firebase";
import { isAfter } from "date-fns";

export default function MeditationApp() {
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
            }).catch(e => console.log(e))
        }
        getAllPlanedSessions();
        updatePlanedSession();
    } else {
        console.log("nie ma usera")
    }
    }, [])

    const updatePlanedSession = () => {
        if(allPlanedSession) {
            allPlanedSession.map(item => {
                console.log("item.date",item.date, "actualDate ",actualDate)
            if (isAfter((item.date), actualDate)) {
               try {
                  sessionsCollection.doc(`${item.sessonId}`).update({
                   "status": "failed",
                })
                .then(() => console.log("uaktualniono listę sesji"))
                .catch(e => console.log(e)) 
               } catch {
                   console.log("nie udało się uakualnić listy zaplanowanych")
               }
            }
        })
    }else console.log("nie ma allPlanedSession")
}
    const {path} = useRouteMatch();
    return (
        <div className="app-container">

            <Panel/>
            <Switch>
                <Route exact path={`${path}/timer`}>
                    <Timer updatePlanedSession={updatePlanedSession}/>
                </Route>
                <Route path={`${path}/kalendarz`}>
                    <Calendar updatePlanedSession={updatePlanedSession}/>
                </Route>
                <Route path={`${path}/historia`}>
                    <History updatePlanedSession={updatePlanedSession}/>
                </Route>
            </Switch>
           
            
            
        </div>
    )
}