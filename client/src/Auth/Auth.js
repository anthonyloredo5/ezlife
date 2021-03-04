import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';

import Icon from './icon';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

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

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false)
  };

  const googleSuccess = async (res) => {
    console.log(res);
  }

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                    <Input name="fullName" label="Full Name" handleChange={handleChange} />
                    <Input name="userName" label="Username" handleChange={handleChange} type="username" />
                  
                </>

              )
            }
            <Input name="email" label="Email" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
            <Button type="submit" fullWidth variant="contained" color="primary" > 
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin 
            clientId="159311272164-001m14bpa0un3clpoc60e26r838d9up6.apps.googleusercontent.com"
            render = {(renderProps) => (
              <Button color="primary" fullWidth onClick={renderProps.onClick} startIcon={<Icon />} variant="contained">
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