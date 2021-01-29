import React, { useState, useEffect } from "react";
import firebase, { sessionsCollection } from "../../../utils/firebase";
import "./History.scss";
import DayChart from "./DayChart";
import WeekChart from "./WeekChart";
import MonthChart from "./MonthChart";

export default function History() {
    const [showChart, setShowChart] = useState("day")
    const [ sessionsHistory, setSessionsHistory] = useState([])
    const user =firebase.auth().currentUser;

    useEffect(() => {
        getHistory()
    },[])

    const getHistory = async () => {
        if(user) {
        await sessionsCollection
        .where("uid", "==",`${user.uid}`)
        .where("status", "!=", "planed")
        .get()
        .then(snapshot => {
            const history = [];
            snapshot.docs.forEach(doc => {
                history.push({...doc.data()})
                setSessionsHistory(...[history])
            })

        })
    } else {
        console.log("nie ma usera")
        }
    }

    return (
        <section className="history-container">
            <div className="history-panel">
                <button onClick={() => setShowChart("day")} className="history-btn">Zobacz Ostatnie dni</button>
                <button onClick={() => setShowChart("week")} className="history-btn"> Zobacz Ostatnie tygodnie</button>
                <button onClick={() => setShowChart("month")} className="history-btn">Zobacz Ostatnie Miesiące</button>
            </div>
            {showChart ==="day" && <DayChart sessionsHistory={sessionsHistory}/>}
            {showChart ==="week" && <WeekChart sessionsHistory={sessionsHistory}/>}
            {showChart === "month" && <MonthChart sessionsHistory={sessionsHistory}/>}
            
        </section>
    )
}