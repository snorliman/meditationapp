import React from 'react';
import "./MeditationApp.scss";
import Panel from "../components/Application/Panel";
import Timer from "../components/Application/Timer";
import Calendar from "../components/Application/Calendar";
import History from "../components/Application/History";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function MeditationApp() {
    const {path} = useRouteMatch();
    return (
        <div className="app-container">

            <Panel/>
            <Switch>
                <Route exact path={`${path}/timer`}>
                    <Timer/>
                </Route>
                <Route path={`${path}/kalendarz`}>
                    <Calendar/>
                </Route>
                <Route path={`${path}/historia`}>
                    <History/>
                </Route>
            </Switch>
           
            
            
        </div>
    )
}