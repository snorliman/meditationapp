import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "../Button/Button";

export default function Panel () {

    const {url} = useRouteMatch();
    return (
        <nav className="panel">
            <Link to={`${url}/timer`}>
                <Button>TIMER</Button>
            </Link>
            <Link to={`${url}/kalendarz`}>
                <Button>KALENDARZ</Button>
            </Link>
            <Link to={`${url}/historia`}>
                <Button>HISTORIA</Button>
            </Link>   
        </nav>
    )
}