import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";

export default function Header () {
    return (
        <header>
            <div className="logo">

            </div>
            <div className="nav-container">
              <Navbar/>  
            </div>
            
        </header>
    )
}