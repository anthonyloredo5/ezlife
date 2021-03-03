import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron"; 
import Drawer from '../components/Drawer';

import HomeWidget from '../components/HomeWidget';
function Home() {
    return (
        <Container>
            <Drawer />
            <Jumbotron />
            <HomeWidget />
        </Container>

    );
}

export default Home;