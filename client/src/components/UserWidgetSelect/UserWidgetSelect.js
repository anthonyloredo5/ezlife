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
import ThemeContext from '../../Context';

function UserWidgetSelect() {
    const classes = useStyles();
    const { createContext, useContext, useState } = React;

    const [ifError, setIfError] = useState(false);

    const stateFromApp = useContext(ThemeContext)
    console.log('THIS SHOUDL B STATE FROM APP in the home widget', stateFromApp)
    console.log('email', stateFromApp.userState.result.email)

    const [state, setState] = React.useState({
        //list of selecteable widgets
        ToDos: stateFromApp.userState.result.ToDos,
        Clock: stateFromApp.userState.result.Clock,
        Fitness: stateFromApp.userState.result.Fitness,
        Goals: stateFromApp.userState.result.Goals
    });

    const handleClick = (e) => {
        e.preventDefault();

        const updateUser = {
            email: stateFromApp.userState.result.email,
            ToDos: state.ToDos,
            Clock: state.Clock,
            Fitness: state.Fitness,
            Goals: state.Goals
        }

        axios.post('http://localhost:5000/api/update', updateUser)
            .then((response) => {
                console.log(response.data);
                stateFromApp.updateUser(response.data)
            })
            .catch((err) => err.message);
    }

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { ToDos, Clock, Fitness, Goals } = state;
    const error = [ToDos, Clock, Fitness, Goals].filter((v) => v.length !== 2);

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={ToDos} onChange={handleChange} name="ToDos" />}
                        label="ToDos"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Clock} onChange={handleChange} name="Clock" />}
                        label="Clock"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Fitness} onChange={handleChange} name="Fitness" />}
                        label="Fitness"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Goals} onChange={handleChange} name="Goals" />}
                        label="Goals"
                    />
                </FormGroup>
                <Button onClick={handleClick}>Submit</Button>
                <FormHelperText>{ifError ? "You need to select at least two" : ""}</FormHelperText>
            </FormControl>
        </div>
    );
}


export default UserWidgetSelect;