import React from "react";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { Link, useHistory } from 'react-router-dom'; 
import firebase from "../../utils/firebase";

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
        top: 130px;
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



const RightNav = ({open, onclick, login, setLogin }) => {

    const history = useHistory();

    const logoutHandler = () => {
        onclick(false);
        firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("user log out")
            setLogin(false)
            history.push("/")
        }).catch(e => console.log(e))
    }
    return (
        <Ul open={open}  onclick={onclick}>
            <HashLink onClick={() => onclick(false)} style={linkstyle} id="nav-item"  to="/#why-meditation"><li>DLACZEGO MEDYTOWAĆ</li></HashLink>
            <HashLink onClick={() => onclick(false)} style={linkstyle} id="nav-item" to="/#how-to-start"><li>JAK ZACZĄĆ PRAKTYKĘ</li></HashLink>
            <HashLink onClick={() => onclick(false)} style={linkstyle} id="nav-item"to="/#how-to-use-app"> <li>JAK UŻYWAĆ APLIKACJI</li></HashLink>
            <HashLink onClick={() => onclick(false)} style={linkstyle} id="nav-item"to="/#contact"><li>KONTAKT</li></HashLink>
            <Link onClick={() => onclick(false)} style={linkstyle} id="nav-item" to="/rejestracja"> <li>ZAREJESTRUJ SIĘ</li></Link>
            {login
            ? <Link onClick={() => logoutHandler()} to="/" style={linkstyle} id="nav-item" ><li>WYLOGUJ SIĘ</li></Link> 
            : <Link onClick={() => onclick(false)} style={linkstyle} id="nav-item" to="/zaloguj"><li>ZALOGUJ SIĘ</li></Link> } 
        </Ul>
    )
}
export default RightNav;

