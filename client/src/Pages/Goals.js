import React from "react"; 
import Drawer from '../components/Drawer';
import background from '../images/bubble.svg';
import Hero from '../components/Hero';

function Goals () { 
    return ( 
        <>
        <Drawer />
        <Hero backgroundImage= {background}>
            <h1 style={{color: "orange"}}>GOALS</h1>
        <h2 style={{color: "white"}}> This page will allow the user to input and track any otherwise unspecified goals, including longterm visions and accolades.</h2>
        </Hero>

        
        </>
    )
}

export default Goals; 
