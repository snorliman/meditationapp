import React, { useState } from 'react';
import styled from "styled-components";
import RightNav from './RightNav';

const StyldedBurger = styled.div`
display: none;


@media(max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    positon: fixed;
    z-index: 10;
    width: 50px;
    height: 40px;

}

div {
    height: 7px;
    width: 40px;
    background-color: ${ ({open}) => open ? "black" : "white"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
        transform: ${({open}) => open ? 'translate(100%)' : 'translate(0)'};
        opacity: ${({open}) => open ? "0" : "1"};

    }
    &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}

`;

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <StyldedBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyldedBurger>
        <RightNav open={open}/>
        </>
    )
}

export default Burger;