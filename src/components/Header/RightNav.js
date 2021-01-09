import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
    display: flex;
   justify-content: space-around; 
   flex-flow: row nowrap;
   list-style: none;
   
   li{
       padding: 0 15px;
   }
   
    @media(max-width: 768px){
    
        flex-flow: column nowrap;
        background-color: orange;
        position: fixed;
        top: 55px;
        right: 0;
        height: 80vh;
        width: 200px;
        transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.5s ease-and-out;
    }`

const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <li>Dlaczego medytować</li>
            <li>Jak zacząć praktykę</li>
            <li>Jak używać aplikacji</li>
            <li>Kontak</li>
            <li>Zarejestruj się</li>
            <li>Zaloguj się</li>
        </Ul>
    )
}
export default RightNav;