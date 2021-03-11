import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

//import './App.css';
import Wrapper from "./components/Wrapper";
import Drawer from "./components/Drawer"; 
import Landing from './Pages/Landing';
import Dash from "./Pages/Dash";
import axios from 'axios';

import ThemeContext from './Context.js'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import TimerPage from "./Pages/Timer"; 
import Todos from "./Pages/Todo"; 
import Fitness from "./Pages/Fitness"; 
import Goals from "./Pages/Goals"; 
import Screentime from "./Pages/Screentime"; 
import Budget from "./Pages/Budget"; 
import UserWidgetSelect from "./components/UserWidgetSelect/UserWidgetSelect";
import { UserProvider } from "./utils/UserContext";

const { createContext, useContext, useState, } = React;

function App() {

  const history = useHistory();

  const [userState, setUserState] = useState({
    id: '',
    todos: false,
    goals: false
  })

  const updateUser = (userLoggedIn) => {
    console.log('About to update user IN THE APP FILE!!!', userLoggedIn.result.email)
    setUserState(userLoggedIn)
    console.log('IN APP FILE ABOUT OT CHANE ROUTE!!!!')
    history.push("/dash");
    // localStorage.setItem("email", userLoggedIn.result.email);
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

  // useEffect(() => {
  //   updateUserOnRefresh();
  // }, []);

  return (

    <ThemeContext.Provider
    value={{ userState, updateUser }}
  >
    <UserProvider>
    <Router>
      <div>
        <Wrapper>
        

          <Route exact path="/" component={Landing} />
          
          <Route exact path="/dash" component={Dash} />

          <Route exact path="/signUp" render={ () => <CreateAccount updateUser = {updateUser} />} />
          <Route exact path="/Login" component={Login} />
          <Route path="/timer" component={TimerPage} />
          <Route path="/todo" component={Todos} />
          <Route path="/fitness" component={Fitness}  />
          <Route path="/goals" component={Goals}  />
          <Route path="/screentime" component={Screentime}  />
          <Route path="/budget" component={Budget}  />
          <Route path="/UserWidgetSelect" component={UserWidgetSelect} />

        </Wrapper>
      </div>
    </Router>
    </UserProvider>
    </ThemeContext.Provider>
  );
}

export default App;

