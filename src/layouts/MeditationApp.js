import React from 'react';
import "./MeditationApp.scss";
import Panel from "../components/Application/Panel/Panel";
import Timer from "../components/Application/Timer/Timer";
import Calendar from "../components/Application/Calendar/Calendar";
import History from "../components/Application/History/History";
import { Switch, Route, useRouteMatch } from "react-router-dom";


export default function MeditationApp() {
    
    const {path} = useRouteMatch();
    return (
        <div className="app-container">

            <Panel/>
            <Switch>
                <Route exact path={`${path}/timer`}>
                    <Timer />
                </Route>
                <Route path={`${path}/kalendarz`}>
                    <Calendar/>
                </Route>
                <Route path={`${path}/historia`}>
                    <History />
                </Route>
            </Switch>
           
            
            
        </div>
    )
}