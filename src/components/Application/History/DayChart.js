import React, { useState , useEffect } from "react";
import {FaCheckCircle, FaFrown, FaStarHalfAlt } from "react-icons/fa"
import firebase, { sessionsCollection } from "../../../utils/firebase";
import { isAfter, sub} from 'date-fns';

const DayChart = () => {
    const user =firebase.auth().currentUser;
    
    const [ sesionsHistory, setSesionsHistory] = useState([])
    const [ last7days, setLast7days] = useState([])

    useEffect(() => {
        getHistory();
        getLast7days();
    },[])

    const getHistory = async () => {
        if(user) {
        await sessionsCollection
        .where("uid", "==",`${user.uid}`)
        .where("status","!=", "active")
        .where("status", "!=", "planed")
        .get()
        .then(snapshot => {
            const history = [];
            snapshot.docs.forEach(doc => {
                history.push({...doc.data()})
                setSesionsHistory(...[history])
            })

        })
    } else {
        console.log("nie ma usera")
        }
    }

const getLast7days = () => {
    const lastweek = sesionsHistory.filter(item => isAfter(item.date.toDate(), sub(new Date(),{
        days: 7
    } )) )
    return setLast7days(lastweek);
}

    

    return (
        <div>
            <h2>Dnie</h2>
            <div className="chart-container">

                { last7days && last7days.map(item => (
                    <div className="day-container">
                        { item.status === "succes" && ( <div className="day-item">
                        <FaCheckCircle/> <span>Zaliczona!</span></div>)}
                        { item.status === "failed" && ( <div className="day-item">
                        <FaFrown/><span>Nie udało się...</span></div>)}
                        { item.status === "partlydone" && (<div className="day-item">
                        <FaStarHalfAlt/><span>Częściowo zaliczona</span></div>)}    
                    </div>))}
            </div>
        </div>

    )
}
export default DayChart;