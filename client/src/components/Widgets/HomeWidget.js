import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import GoalChart from './GoalPieChart';
import WaterBottle from './WaterIntake/WaterBottleGraph';
import WorkoutChart from './WorkoutGraph';
import Todo from './Todo.js';


function HomeWidget() {
    return (
    <Box className = 'widget_box'>
        <Grid container justify ="center"spacing = {3}>
            <Grid item> 
                <Paper style = {{height: 200, width: 200 }}/> Workout of the Day
            </Grid>
            <Grid item>
                <Todo/>
            </Grid> 
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/> Timer
            </Grid>
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/> Goals
            </Grid>
        </Grid>
        <Grid container justify ="center"spacing = {3}>
            <Grid item> 
                    <WaterBottle/> Water Intake
                </Grid>
                <Grid item>
                    <GoalChart/> Goal Progress
                </Grid> 
                <Grid item>
                    <WorkoutChart/>
                </Grid>
            </Grid>
    </Box>

    )

} 

export default HomeWidget;