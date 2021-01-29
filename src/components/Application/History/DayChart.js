import React, { useState , useEffect } from "react";
import {FaCheckCircle, FaFrown, FaStarHalfAlt } from "react-icons/fa"

import { isAfter, sub} from 'date-fns';

const DayChart = ({sessionsHistory}) => {
    
    const [ last7days, setLast7days] = useState([])

    useEffect(() => {
        getLast7days();
    },[])

    

const getLast7days = () => {
    const lastweek = sessionsHistory.filter(item => isAfter(item.date.toDate(), sub(new Date(),{
        days: 7
    } )) )
    return setLast7days(lastweek);
}

    

    return (
        <section className="last-days-section">
            <h2 className="last-days-header">Dnie</h2>
            <div className="chart-container">

                { last7days && last7days.map(item => (
                    <div className="day-container">
                        { item.status === "succes" && ( <div className="day-item succes">
                        <FaCheckCircle className="succes-icon"/> <span>Zaliczona!</span></div>)}
                        { item.status === "failed" && ( <div className="day-item failed">
                        <FaFrown className="failed-icon"/><span>Nie udało się...</span></div>)}
                        { item.status === "partlydone" && (<div className="day-item partlydone">
                        <FaStarHalfAlt className="partlydone-icon"/><span>Częściowo zaliczona</span></div>)}    
                    </div>))}
            </div>
        </section>

    )
}
export default DayChart;