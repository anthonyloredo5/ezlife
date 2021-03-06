import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Drawer from '../components/Drawer';
import HomeWidget from '../components/HomeWidget';
import ThemeContext from '../Context.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserWidgetSelect from "../components/UserWidgetSelect/UserWidgetSelect"
import ModalWidget from '../components/ModalWidget';

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
            <Container>
                <ModalWidget modal={modal} />
                <Drawer getStarted={getStarted} />
                <Jumbotron />
                {firstTime ? (null) : (<HomeWidget />)}
            </Container>
        </div>

    );
}

export default Dash;