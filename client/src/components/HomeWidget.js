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


function HomeWidget() {


    return (
        <Box className='widget_box'>
            <Grid container justify="center" style={{marginTop: "10px"}} spacing={10}>
            
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
                <Grid item>
                <GoalChart /> Goal Progress
            </Grid>
                <Grid item>
                    <Timer />
                </Grid>
                {/* this is supposed to be the goals section but i will remove until we figure out what to do with it */}
                {/* <Grid item>
                    <Paper style={{ height: 200, width: 200 , backgroundColor: "#d5d5da"}} /> 
                 </Grid> */}
                 
            </Grid>
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <WaterIntake style={{ backgroundColor: "#d5d5da"}}/>
                </Grid>
                <Grid item>
                    <WorkoutChart  style= {{backgroundColor: "#d5d5da"}}/>

                </Grid>
            </Grid>
        </Box>

    )

}

export default HomeWidget;