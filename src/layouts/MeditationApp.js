import React from 'react';
import Timer from "../components/Application/Timer";
import Calendar from "../components/Application/Calendar";
import History from "../components/Application/History";

export default function MeditationApp() {
    return (
        <>
            <Timer/>
            <Calendar/>
            <History/>
        </>
    )
}