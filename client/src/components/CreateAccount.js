import { TextField, Grid, Button, Typography, Link, Container, CssBaseline, Avatar, FormControlLabel, Box, Checkbox } from '@material-ui/core'
import { useState } from 'react';
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from './Copyright';


function CreateAccount() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: ''
    });

    const handleState = (e) => {
        const { name, value } = e.target;

        setItems({
            ...items,
            [name]: value,
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


    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div >
                    <Avatar >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
        </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            autoComplete="fullName"
                            autoFocus
                            onChange={handleState}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Username"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                            onChange={handleState}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleState}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleState}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}

                        >
                            Sign Up
          </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}

export default CreateAccount;