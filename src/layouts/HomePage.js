import React from 'react';
import Header from "../components/Header/Header";
import WhyMeditaition from "../components/HomePage/WhyMeditation";
import HowToStart from "../components/HomePage/HowToStart";
import HowToUseApp from "../components/HomePage/HowToUseApp";
import Carousel from "../components/HomePage/Carousel";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
    return (
        <>
            <Header/>
            <WhyMeditaition/>
            <HowToStart/>
            <HowToUseApp/>
            <Carousel/>
            <Footer/>
        </>
    )
}