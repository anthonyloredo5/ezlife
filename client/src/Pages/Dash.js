import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron"; 
import Drawer from '../components/Drawer';
import HomeWidget from '../components/HomeWidget';
import ThemeContext from '../Context.js'


function Dash() {
    const { createContext, useContext, useState } = React;

    const stateFromApp = useContext(ThemeContext)
    console.log('THIS SHOUDL B STATE FROM APP in the home widget', stateFromApp)
    return (
        <Container>
            <Drawer />
            <Jumbotron />
            <HomeWidget />
        </Container>

    );
}

export default Dash;