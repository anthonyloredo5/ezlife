import React, { useState } from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './styles.js';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { UserContext } from "../../utils/UserContext";
const { useContext } = React;

function UserWidgetSelect() {
    const classes = useStyles();
    

    const [user, dispatch] = useContext(UserContext)
	console.log(user, 'should be user from log in')
    const Clock = user.Clock;
    const ToDos = user.ToDos;
    const Fitness = user.Fitness;
    const Goals = user.Goals;
    const Water = user.Water;

    const [ifError, setIfError] = useState(false);

    const [state, setState] = React.useState({
        //list of selecteable widgets
        ToDos: ToDos,
        Clock: Clock,
        Fitness: Fitness,
        Goals: Goals,
        Water: Water
    });

    const handleClick = (e) => {
        e.preventDefault();

        const updateUser = {
            username: user.username,
            ToDos: state.ToDos,
            Clock: state.Clock,
            Fitness: state.Fitness,
            Goals: state.Goals,
            Water: state.Water
        }

        fetch('api/users/update', {
            method: 'POST',
            body: JSON.stringify(updateUser),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          })
            .then((response) => {
              if (response.status === 200) {
                console.log('Succesfully updated user!', response);
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
                        console.log('Error fetching authorized user.');
                    });
              }
            }).catch(err => console.log(err));
    }

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
    };

    
    const error = [ToDos, Clock, Fitness, Goals].filter((v) => v.length !== 2);

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={state.ToDos} onChange={handleChange} name="ToDos" />}
                        label="ToDos"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.Clock} onChange={handleChange} name="Clock" />}
                        label="Clock"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.Fitness} onChange={handleChange} name="Fitness" />}
                        label="Fitness"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.Goals} onChange={handleChange} name="Goals" />}
                        label="Goals"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.Water} onChange={handleChange} name="Water" />}
                        label="Water"
                    />
                </FormGroup>
                <Button onClick={handleClick}>Submit</Button>
                <FormHelperText>{ifError ? "You need to select at least two" : ""}</FormHelperText>
            </FormControl>
        </div>
    );
}


export default UserWidgetSelect;