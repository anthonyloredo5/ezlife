import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import Drawer from '../components/Drawer';
import Timer from "../components/Widgets/Timer/Timer";
import { useHistory } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';

function TimerPage() {
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

    return (
        <>
            <Drawer getStarted={getStarted} />
            <Grid container justify="center" style={{ marginTop: "10px" }} spacing={10}>
                <Grid item>
                <Timer />
                <h3 text align = "center">Screentime</h3>
                </Grid>
                
                <Grid item>
                <Timer />
                <h3 text align = "center">Break</h3>
                </Grid> 

                <Grid item>
                <Timer />
                <h3 text align = "center">Work</h3>
                </Grid>
    
            </Grid>
        </>
    )
}

export default TimerPage;