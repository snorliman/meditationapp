import React, { useState } from "react";
import "./History.scss";
import DayChart from "./DayChart";
import WeekChart from "./WeekChart";
import MonthChart from "./MonthChart";

export default function History() {
    const [showChart, setShowChart] = useState("day")
    return (
        <section className="history-container">
            <div className="history-panel">
                <button onClick={() => setShowChart("day")} className="history-btn">Zobacz Ostatnie dni</button>
                <button onClick={() => setShowChart("week")} className="history-btn"> Zobacz Ostatnie tygodnie</button>
                <button onClick={() => setShowChart("month")} className="history-btn">Zobacz Ostatnie Miesiące</button>
            </div>
            {showChart ==="day" && <DayChart/>}
            {showChart ==="week" && <WeekChart/>}
            {showChart === "month" && <MonthChart/>}
            
        </section>
    )
}