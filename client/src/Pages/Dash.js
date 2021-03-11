import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Hero from "../components/Hero"; 
import Drawer from '../components/Drawer';
import HomeWidget from '../components/HomeWidget';
import ThemeContext from '../Context.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserWidgetSelect from "../components/UserWidgetSelect/UserWidgetSelect"
import ModalWidget from '../components/ModalWidget';
import Quote from "../components/Quote"; 
import gradient from "../images/gradient.jpg"

function Dash() {
    const { createContext, useContext, useState } = React;

    const [modal, setModal] = useState(false);

    const stateFromApp = useContext(ThemeContext)
    const firstTime = stateFromApp.userState.result.firstTime;
    console.log('THIS SHOUDL B STATE FROM APP in the home widget', stateFromApp);
    console.log(firstTime);

    const getStarted = (e) => {
        e.preventDefault();

        setModal(!modal)
    }



    console.log('modal state in dash baord!!', modal)
    return (
        <div>
            
                <ModalWidget modal={modal} />
                <Drawer getStarted={getStarted} />
                <Hero backgroundImage={gradient} imageStyle={{opacity: 0.5}}>
                    <Quote />
                    </Hero> 
                    <Container>
                {firstTime ? (null) : (<HomeWidget />)}
            </Container>
        </div>

    );
}

export default Dash;