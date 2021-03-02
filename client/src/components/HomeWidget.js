import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'; 

function HomeWidget(){
    return(
        <Grid container justify ="center"spacing = {3}>
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/>
            </Grid>
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/>
            </Grid> 
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/>
            </Grid>
            <Grid item>
                <Paper style = {{height: 200, width: 200 }}/>
            </Grid>
        </Grid>
    )
} 

export default HomeWidget;