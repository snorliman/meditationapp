import React from 'react';
import './Footer.scss';
import styled from "styled-components";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from "../../assets/logos/color_logo.svg";

export default function Footer() {
    return (
        <div className="footer-container">
          <footer  className="footer">
            <img className="footer-logo" src={logo} alt="logo"></img>
            <small>&copy; Copyright Łukasz Osiński</small>
            <div  className="social-container">
                <a href="https://www.facebook.com/profile.php?id=100000095938105"><FBStyle /></a>
                <a href="https://github.com/snorliman"><GITStyle /></a>
                <a href="https://www.linkedin.com/in/snorliman-654b281a0/"><LIStyle /></a>
            </div>
            
          </footer>  
        </div>
        
    )
}

const FBStyle = styled(FaFacebook) `

color:#f9710d;
padding:7px;
&:hover {
    color: white;
}`
const GITStyle = styled(FaGithub) `

color:#f9710d;
padding:7px;
&:hover {
    color: white;
}`
const LIStyle = styled(FaLinkedin) `

color:#f9710d;
padding:7px;
&:hover {
    color: white;
}`
