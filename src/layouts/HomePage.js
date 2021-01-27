import React, { useEffect } from 'react';
import WhyMeditaition from "../components/HomePage/WhyMeditation";
import HowToStart from "../components/HomePage/HowToStart";
import HowToUseApp from "../components/HomePage/HowToUseApp";
import Item from "../components/HomePage/Item";
import Carousel from "react-elastic-carousel"
import Contact from "../components/HomePage/Contact";
import Aos from "aos";
import "aos/dist/aos.css"
import pic1 from "../assets/pictures/pic1.jpg";
import pic2 from "../assets/pictures/pic2.jpg";
import pic3 from "../assets/pictures/pic3.jpg";
import pic4 from "../assets/pictures/pic4.jpg";
import pic5 from "../assets/pictures/pic5.jpg";
import pic6 from "../assets/pictures/pic6.jpg";
import pic7 from "../assets/pictures/pic7.jpg";
import pic8 from "../assets/pictures/pic8.jpg";
import pic9 from "../assets/pictures/pic9.jpg";
import pic10 from "../assets/pictures/pic10.jpg";
import pic11 from "../assets/pictures/pic11.jpg";
import pic12 from "../assets/pictures/pic12.jpg";
import pic13 from "../assets/pictures/pic13.jpg";
import pic14 from "../assets/pictures/pic14.jpg";
import pic15 from "../assets/pictures/pic15.jpg";
import pic16 from "../assets/pictures/pic16.jpg";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function HomePage() {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
    console.log("cokolwiek");
    return (
        <>
            <WhyMeditaition/>
            <HowToStart/>
            <HowToUseApp/>
            <Carousel data-aos="fade-up" breakPoints={breakPoints} style={{backgroundColor: "black"}}>
                <Item><img src={pic1} alt="meditation"></img></Item>
                <Item><img src={pic2} alt="meditation"></img></Item>
                <Item><img src={pic3} alt="meditation"></img></Item>
                <Item><img src={pic4} alt="meditation"></img></Item>
                <Item><img src={pic5} alt="meditation"></img></Item>
                <Item><img src={pic6} alt="meditation"></img></Item>
                <Item><img src={pic7} alt="meditation"></img></Item>
                <Item><img src={pic8} alt="meditation"></img></Item>
                <Item><img src={pic9} alt="meditation"></img></Item>
                <Item><img src={pic10} alt="meditation"></img></Item>
                <Item><img src={pic11} alt="meditation"></img></Item>
                <Item><img src={pic12} alt="meditation"></img></Item>
                <Item><img src={pic13} alt="meditation"></img></Item>
                <Item><img src={pic14} alt="meditation"></img></Item>
                <Item><img src={pic16} alt="meditation"></img></Item>
                <Item><img src={pic15} alt="meditation"></img></Item>
            </Carousel>
            <Contact/>
        </>
    )
}