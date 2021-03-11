import React from "react"; 
import Drawer from '../components/Drawer';
import background from '../images/bubble.svg';
import Hero from '../components/Hero';
function Budget () { 
    return ( 
        <>
        <Drawer  />
        <Hero backgroundImage= {background}>
            <h1 style={{color: "green"}}>BUDGET</h1>
        <h2 style={{color: "white"}}> This page allows the user to input credits and debits to their finances to see a better idea of their habits.</h2>
        </Hero>
        </>
    )
}

export default Budget; 
