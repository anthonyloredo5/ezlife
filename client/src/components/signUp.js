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
        console.log(e.target.fullName.value);

        setItems({
            ...items,
            fullName: e.target.value,
            userName: e.target.value,
            email: e.target.value,
            password: e.target.value
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

        console.log(registeredUser);

        axios.post('http://localhost:5000/api/signup', registeredUser)
            .then((response) => { console.log(response.data) })
            .catch((err) => err.message);
    }

    //button to generate popUp
    //<Button 
    //    varaint = "outlined"
    //    onClick={() => setOpenPopup(true)}
    //</Button>
    return (
        <>
            <Card>
                <Grid container direction="column"
                    justify="center"
                    alignItems="center" spacing={2}>
                    <Grid item xs={6} >
                        <TextField id="fullName" name="fullName" label="Full Name" variant="filled" onChange={handleState} />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField id="userName" name="userName" label="Username" variant="filled" onChange={handleState} />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField id="email" name="email" label="email" variant="filled" onChange={handleState} />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField id="password" name="password" label="password" variant="filled" onChange={handleState} />
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