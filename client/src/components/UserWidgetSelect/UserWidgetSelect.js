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

function UserWidgetSelect() {
    const classes = useStyles();
    const [ifError, setIfError] = useState(false);

    const [state, setState] = React.useState({
        //list of selecteable widgets
        ToDos: false,
        Clock: false,
        Fitness: false,
        Goals: false
    });
    
    const handleClick = () => {
        const updateUser = {
            email:'log@log.com',
            ToDos: true,
            Clock: true,
            Fitness: true,
            Goals: true
        }

        axios.post('http://localhost:5000/api/update', updateUser)
        .then((response) => { 
          console.log(response.data); 

        //   stateFromApp.updateUser(response.data)
        //   history.push("/dash");
        })
        .catch((err) => err.message);
    }

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { ToDos, Clock, Fitness, Goals } = state;
    const error = [ ToDos, Clock, Fitness, Goals ].filter((v) => v.length !== 2);

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