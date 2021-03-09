import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Drawer from '../components/Drawer';
import HomeWidget from '../components/HomeWidget';
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
import ToDoList from '../components/Widgets/Todo';
import Timer from '../components/Widgets/Timer';

function Dash() {
    const { createContext, useContext, useState, useEffect } = React;

    const [modal, setModal] = useState(false);

    const stateFromApp = useContext(ThemeContext);
    const firstTime = stateFromApp.userState.result.firstTime;
    const ToDos = stateFromApp.userState.result.ToDos;
    const Clock = stateFromApp.userState.result.Clock;
    const Fitness = stateFromApp.userState.result.Fitness;
    const Goals = stateFromApp.userState.result.Goals;
    const Timer = stateFromApp.userState.result.Timer;
    console.log('THIS SHOUDL B STATE FROM APP in the home widget', stateFromApp);

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
                {firstTime ? (null) : (<Box className='widget_box'>
                    <Grid container justify="center" spacing={3}>
                        <Grid item>
                            <Paper style={{ height: 200, width: 200 }} /> Workout of the Day
            </Grid>
                        <GridList item style={{
                            height: 250,
                            width: 230,
                            padding: "10px",
                            overflow: "hidden",
                            backgroundColor: "orange",
                            marginBottom: "10px",
                            marginTop: "10px",
                            boxShadow: "0 15px 20px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)",

                        }} >
                            {ToDos ? (<ToDoList />) : (null)}
                        </GridList>
                        <Grid item>
                            {Clock ? (<Timer />) : (null)}
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: 200, width: 200 }} /> Goals
            </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={3}>
                        <Grid item>
                            Water Intake
                </Grid>
                        <Grid item>
                            {Goals ? (<GoalChart />, "Goal Progress") : (null)}
                        </Grid>
                        <Grid item>
                            <WorkoutChart /> Workout Streak
                </Grid>
                    </Grid>
                </Box>)}
            </Container>
        </div>

    );
}

export default Dash;