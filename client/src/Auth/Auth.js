import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ThemeContext from '../Context.js'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Auth from "../utils/Auth";
import { useLocation } from "react-router";
import { UserContext } from "../utils/UserContext";

import Icon from './icon';
import Input from './Input';
import useStyles from './styles';


const SignUp = (props) => {
  const history = useHistory();
  const classes = useStyles();
  let location = useLocation();
  const { createContext, useContext, useState } = React;


  const [redirectToReferrer, setRedirectToReferrer] = useState(false);


  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


  //this useeffect runs constantly and wont redirect until the state of redirectToReferrer is set to true
  useEffect(() => {

    const { from } = location.state || { from: { pathname: '/dash' } }
    if (redirectToReferrer) {
      history.push(from)
    }

  }, [redirectToReferrer, history, location.state])

  const [items, setItems] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItems({
      ...items,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerNewUser = {
      //fullName: items.fullName,
      username: items.userName,
      //email: items.email,
      password: items.password,
    }

    const registeredUser = {
      username: items.userName,
      password: items.password,
    }



    if (isSignup) {
      
      console.log((registeredUser));
      fetch('api/users/register', {
        method: 'POST',
        body: JSON.stringify(registeredUser),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Succesfully registered user!', response);
            //relocate to the login page
            console.log('Logging in ' + JSON.stringify(registeredUser));
            fetch('api/users/login', {
              method: 'POST',
              body: JSON.stringify(registeredUser),
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json'
              },
            })
              .then((response) => {
                if (response.status === 200) { //All good
                  console.log('response from login', response);
                  Auth.authenticate(() => { //Update the boolean and take off the cuffs
                    setRedirectToReferrer(true)
                    console.log(`Response in login (Authenticate) ${(response)}`, response);
                    // history.push("/protected")
                  });
                }
              })
              .catch((err) => {// No beuno, kick them
                console.log('Error logging in.', err);
              });
          }
        })
        .catch((err) => {
          console.log('Error registering user.', err);
        });
    } else {
      console.log('Logging in ' + JSON.stringify(registeredUser));
      fetch('api/users/login', {
        method: 'POST',
        body: JSON.stringify(registeredUser),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) => {
          if (response.status === 200) { //All good
            Auth.authenticate(() => { //Update the boolean and take off the cuffs
              setRedirectToReferrer(true)
              console.log(`Response in login ${JSON.stringify(response)}`);

            });
          }
        })
        .catch((err) => {// No beuno, kick them
          console.log('Error logging in.', err);
        });
    }
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false)
  };

  const googleSuccess = async (res) => {
    console.log(res);
    // const result = res?.profile.Obj; //?. gives me undefined instead of an error
    // const token = res?.tokenId;

    try {

    } catch (error) {
      console.log(error);
    }

  }

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="fullName" label="Full Name" handleChange={handleChange} />
                  <Input name="email" label="Email" handleChange={handleChange} type="email" />

                </>

              )
            }
            <Input name="userName" label="Username" handleChange={handleChange} type="username" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLogin
              clientId="159311272164-001m14bpa0un3clpoc60e26r838d9up6.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} startIcon={<Icon />} variant="contained">
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </Grid>


          <Grid container justify="flex-end">
            <Grid item >
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;