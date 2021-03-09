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



function HomeWidget() {


    return (
        <Box className='widget_box'>
            <Grid container justify="center" style={{marginTop: "10px"}} spacing={10}>
            <Grid item>
                <GoalChart /> Goal Progress
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
                    <ToDoList />
                </GridList>
                <Grid item>
                    <Timer />
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
                    <WorkoutChart /> Workout Streak
                </Grid>
            </Grid>
        </Box>

    )

}

export default HomeWidget;