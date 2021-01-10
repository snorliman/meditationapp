import React, { useEffect } from 'react';
import Header from "../components/Header/Header";
import WhyMeditaition from "../components/HomePage/WhyMeditation";
import HowToStart from "../components/HomePage/HowToStart";
import HowToUseApp from "../components/HomePage/HowToUseApp";
import Carousel from "../components/HomePage/Carousel";
import Footer from "../components/Footer/Footer";
import Contact from "../components/HomePage/Contact";
import Aos from "aos";
import "aos/dist/aos.css"

export default function HomePage() {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
    return (
        <>
            <Header/>
            <WhyMeditaition/>
            <HowToStart/>
            <HowToUseApp/>
            <Carousel/>
            <Contact/>
            <Footer/>
        </>
    )
}