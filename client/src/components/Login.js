import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from './Copyright';
import axios from 'axios';




export default function Login() {

  const [items, setItems] = useState({
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
      email: items.email,
      password: items.password,
    }

    // axios.get('http://localhost:5000/api/login', registeredUser)
    //   .then((response) => { console.log(response.data) })
    //   .catch((err) => err.message);
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form noValidate>
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}