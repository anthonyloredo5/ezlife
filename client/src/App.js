import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";
import Landing from './Pages/Landing';
import Dash from "./Pages/Dash";
import axios from 'axios';

import ThemeContext from './Context.js'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Timer from "./Pages/Timer";
import UserWidgetSelect from "./components/UserWidgetSelect/UserWidgetSelect";

const { createContext, useContext, useState, } = React;

function App() {

  const [userState, setUserState] = useState({
    id: '',
    todos: false,
    goals: false
  })

  const updateUser = (userLoggedIn) => {
    console.log('About to update user!!', userLoggedIn.result.email)
    setUserState(userLoggedIn)
    localStorage.setItem("email", userLoggedIn.result.email);
  }

  const updateUserOnRefresh = () => {
    const user = localStorage.getItem("email");
    const userEmail = {
      email: user
    }
    console.log("setting email from app on load", userEmail);
    axios.post('http://localhost:5000/api/get', userEmail)
      .then((response) => {
        console.log(response.data, "onload useeffect that should be working");
        setUserState(response.data);
      })
      .catch((err) => err.message);
  }

  useEffect(() => {
    updateUserOnRefresh();
  }, []);

  return (

    <ThemeContext.Provider
      value={{ userState, updateUser }}
    >
      <Router>
        <div>
          <Wrapper>

            <Route exact path="/" component={Landing} />
            <Route exact path="/dash" component={Dash} />


            <Route exact path="/signUp" component={CreateAccount} />
            <Route exact path="/Login" component={Login} />
            <Route path="/timer" component={Timer} />
            <Route path="/UserWidgetSelect" component={UserWidgetSelect} />


          </Wrapper>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;

