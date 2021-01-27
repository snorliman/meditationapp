import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivetRoute ({ user, component:Component, ...rest}) {

    return (
        <Route
            {...rest}
            render={props => {
               return user ?  <Component {...props}/> : <Redirect to="/"/>
            }}
            >
        </Route>
    )
}