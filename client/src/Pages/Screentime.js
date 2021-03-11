import React from "react"; 
import Drawer from '../components/Drawer';
import background from '../images/bubble.svg';
import Hero from '../components/Hero';
function Screentime () { 
    return ( 
        <>
        <Drawer />
        <Hero backgroundImage= {background}>
            <h1 style={{color: "purple"}}>SCREENTIME</h1>
        <h2 style={{color: "white"}}> This page will show the amount of time the user has been online, or allow them to set parameters and alerts to keep screentime to the desired amount.</h2>
        </Hero>
        </>

    )
}

export default Screentime; 