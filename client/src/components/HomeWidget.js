// import Container from '@material-ui/core/Container';
import React from "react";
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import GoalChart from './Widgets/GoalPieChart';
import WorkoutChart from './Widgets/WorkoutGraph';
import ToDoList from './Widgets/ToDo/Todo';
import Timer from './Widgets/Timer/Timer';
import WaterIntake from './Widgets/Water/WaterIntake';
import { UserContext } from "../utils/UserContext";
const { useContext, useState, useEffect } = React;


function HomeWidget() {
    const [user, dispatch] = useContext(UserContext)
    console.log(user, 'should be user from log in')
    const Clock = user.Clock;
    const ToDos = user.ToDos;
    const Fitness = user.Fitness;
    const Goals = user.Goals;
    const Water = user.Water;

    return (
        <Box className='widget_box'>
            <Grid container justify="center" style={{ marginTop: "10px" }} spacing={10}>


                {ToDos ? (
                    <GridList item style={{
                        height: 250,
                        width: 230,
                        padding: "10px",
                        overflow: "hidden",
                        // backgroundColor: "darkSeaGreen",
                        marginBottom: "10px",
                        marginTop: "40px",
                        boxShadow: "0 15px 20px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)",
                    }} >

                        <ToDoList />
                    </GridList>
                ) : (null)}

                <Grid item>
                    {Goals ? <div><GoalChart /> Goal Progress</div> : (null)}
                </Grid>
                <Grid item>
                    {Clock ? (<Timer />) : (null)}
                </Grid>
                {/* this is supposed to be the goals section but i will remove until we figure out what to do with it */}
                {/* <Grid item>
                    <Paper style={{ height: 200, width: 200 , backgroundColor: "#d5d5da"}} /> 
                 </Grid> */}

            </Grid>
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    {Water ? <div><WaterIntake style={{ backgroundColor: "#d5d5da" }} /></div> : (null)}
                </Grid>
                <Grid item>

                    {Fitness ? <div><WorkoutChart  style= {{backgroundColor: "#d5d5da"}}/></div> : (null)}


                </Grid>
            </Grid>
        </Box>

    )

}

export default HomeWidget;