import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
color: white;
font-family: Raleway;
@media(max-width:768px){
    display: flex;
    justify-content: flex-end;
}
`
const Navbar = () => {
    return (
        <Nav>
        <Burger/>
        </Nav>
    )
}



export default Navbar; 