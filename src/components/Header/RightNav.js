import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
    display: flex;
   justify-content: space-around; 
   height: 100%;
   widht:100%;
   
   align-items: center;
   flex-flow: row nowrap;
   text-align: center;
   list-style: none;
   
   li{
       padding: 10px 10px;
       font-weight: 600;
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

const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <li>DLACZEGO MEDYTOWAĆ</li>
            <li>JAK ZACZĄĆ PRAKTYKĘ</li>
            <li>JAK UŻYWAĆ APLIKACJI</li>
            <li>KONTAKT</li>
            <li>ZAREJESTRUJ SIĘ</li>
            <li>ZALOGUJ SIĘ</li>
        </Ul>
    )
}
export default RightNav;