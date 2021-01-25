import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../utils/ContextAuth";

export default function PrivetRoute ({component:Component, ...rest}) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
               return currentUser ?  <Component {...props}/> : <Redirect to="/"/>
            }}
            >
        </Route>
    )
}