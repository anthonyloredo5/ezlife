// import Container from '@material-ui/core/Container';
import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import GoalChart from './Widgets/GoalPieChart';
import WorkoutChart from './Widgets/WorkoutGraph';
import ToDoList from './Widgets/Todo';
import Timer from './Widgets/Timer';



function HomeWidget() {
   

    return (
    <Box className = 'widget_box'>
        <Grid container justify ="center"spacing = {3}>
            <Grid item> 
                <Paper style = {{height: 200, width: 200 }}/> Workout of the Day
            </Grid>
            <Grid item>
                <ToDoList/>
            </Grid>
            <Grid item>
                <Timer/>
            </Grid>
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/> Goals
            </Grid>
        </Grid>
        <Grid container justify ="center"spacing = {3}>
            <Grid item> 
                    Water Intake
                </Grid>
                <Grid item>
                    <GoalChart/> Goal Progress
                </Grid> 
                <Grid item>
                    <WorkoutChart/> Workout Streak
                </Grid>
            </Grid>
    </Box>

    )

} 

export default HomeWidget;