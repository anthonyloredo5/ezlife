import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Hero from "../components/Hero";
import Drawer from '../components/Drawer';
import HomeWidget from '../components/HomeWidget';
import Quote from "../components/Quote";
import gradient from "../images/gradient.jpg"
import ThemeContext from '../Context.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserWidgetSelect from "../components/UserWidgetSelect/UserWidgetSelect"
import ModalWidget from '../components/ModalWidget';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import GoalChart from '../components/Widgets/GoalPieChart';
import WorkoutChart from '../components/Widgets/WorkoutGraph';
import ToDoList from '../components/Widgets/ToDo/Todo';
import Timer from '../components/Widgets/Timer/Timer';
import { UserContext } from "../utils/UserContext";
import { useHistory } from 'react-router-dom';
const { useContext, useState, useEffect } = React;


function Dash() {
    const history = useHistory();
    const [user, dispatch] = useContext(UserContext)
    console.log(user, 'should be user from log in')
    console.log(user.firstTime);
    const firstTime = user.firstTime;


    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch('api/users/user', {
            credentials: 'include'
        })
            .then((res) => {
                console.log(`response to authenticate ${res}`);
                return res.json(res)

            })
            .then(data => {
                console.log(data, 'user DATA');
                dispatch({
                    type: "GET_USER",
                    payload: data
                })

            })
            .catch((err) => {
                alert("Could not detect current user");
                history.push("/")
                console.log('Error fetching authorized user.');
            });
    }, []);

    const getStarted = (e) => {
        e.preventDefault();

        setModal(!modal)
    }

    console.log('modal state in dash baord!!', modal)
    return (
        <div>

            <ModalWidget modal={modal} />
            <Drawer getStarted={getStarted} />
            <Hero backgroundImage={gradient} imageStyle={{ opacity: 0.5 }}>
                <Quote />
            </Hero>
            <Container>
                {firstTime ? (null) : <HomeWidget />}
            </Container>
        </div>

    );
}

export default Dash;