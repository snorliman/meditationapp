import React from 'react';
import Header from "../components/HomePage/Header";
import WhyMeditaition from "../components/HomePage/WhyMeditation";
import HowToStart from "../components/HomePage/HowToStart";
import HowToUseApp from "../components/HomePage/HowToUseApp";
import Carousel from "../components/HomePage/Carousel";
import Footer from "../components/HomePage/Footer";

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