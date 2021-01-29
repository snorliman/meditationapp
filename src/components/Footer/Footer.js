import React from 'react';
import './Footer.scss';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from "../../assets/logos/color_logo.svg";

export default function Footer() {
    return (
        <div className="footer-container">
          <footer  className="footer">
            <img className="footer-logo" src={logo} alt="logo"></img>
            <small>&copy; Copyright Łukasz Osiński</small>
            <div  className="social-container">
                <a className="social-link" href="https://www.facebook.com/profile.php?id=100000095938105">< FaFacebook className="social-icon" /></a>
                <a className="social-link" href="https://github.com/snorliman"><FaGithub className="social-icon" /></a>
                <a className="social-link" href="https://www.linkedin.com/in/snorliman-654b281a0/"><FaLinkedin className="social-icon" /></a>
            </div>
          </footer>  
        </div>
        
    )
}
