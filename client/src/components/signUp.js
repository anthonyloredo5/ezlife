import { TextField, Grid, Card, Button } from '@material-ui/core'
import { useState } from 'react';
import axios from 'axios';

function signUp() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: ''
    });

    const handleState = (e) => {

        setItems({
            ...items,
            fullName: e.target.value.fullName,
            userName: e.target.value.userName,
            email: e.target.value.email,
            password: e.target.value.password
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const registeredUser = {
            fullName: items.fullName,
            userName: items.userName,
            email: items.email,
            password: items.password,
        }

        axios.post('http://localhost:5000/api/signup', registeredUser)
            .then((response) => { console.log(response.data) })
            .catch((err) => err.message);
    }


    return (
        <>
            <Card>
                <Grid container direction="column"
                    justify="center"
                    alignItems="center" spacing={2}>
                    <Grid item xs={6} >
                        <TextField name="fullName" label="Full Name" variant="filled" onChange={handleState} />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField name="userName" label="Username" variant="filled" onChange={handleState} />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField name="email" label="email" variant="filled" onChange={handleState} />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField name="password" label="password" variant="filled" onChange={handleState} />
                    </Grid>

                </Grid>
                <Button item xs={6} variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Card>
        </>
    );
}

export default signUp;