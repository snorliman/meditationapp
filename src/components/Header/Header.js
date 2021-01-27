import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import logo from "../../assets/logos/color_logo.svg";

export default function Header ({user}) {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-container">
              <Navbar user={user}/>  
            </div>
            
        </header>
    )
}