import React from "react";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    display: flex;
   justify-content: space-around; 
   height: 100%;
   widht:100%;
   
   align-items: center;
   flex-flow: row nowrap;
   text-align: center;
   list-style: none;

   #nav-item {
       &:hover {
           cursor: poiner;
           color: black;
       }
   }
   
   li {
        padding: 10px 10px;
        font-weight: 600;
        color: white;
        &:hover{
            color: black;
        }
    
    } 
   }
    @media(max-width: 768px){
    
        flex-flow: column nowrap;
        background-color: #F9710D;
        position: fixed;
        align-items: center;
        top: 100px;
        right: 0;
        height: 80vh;
        width: 200px;
        transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
        transition: all 0.5s ease-out;
    }`


const linkstyle = {
    textDecoration: "inherit",
    color: "inherit"
}



const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <HashLink style={linkstyle} id="nav-item"  to="/#why-meditation"><li>DLACZEGO MEDYTOWAĆ</li></HashLink>
            <HashLink style={linkstyle} id="nav-item" to="/#how-to-start"><li>JAK ZACZĄĆ PRAKTYKĘ</li></HashLink>
            <HashLink style={linkstyle} id="nav-item"to="/#how-to-use-app"> <li>JAK UŻYWAĆ APLIKACJI</li></HashLink>
            <HashLink style={linkstyle} id="nav-item"to="/#contact"><li>KONTAKT</li></HashLink>
            <Link style={linkstyle} id="nav-item" to="/rejestracja"> <li>ZAREJESTRUJ SIĘ</li></Link>
            <Link style={linkstyle} id="nav-item" to="zaloguj"><li>ZALOGUJ SIĘ</li></Link>
        </Ul>
    )
}
export default RightNav;

