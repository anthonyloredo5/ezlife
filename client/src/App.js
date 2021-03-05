import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";
import Landing from './Pages/Landing';
import Dash from "./Pages/Dash";

import ThemeContext from './Context.js'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Timer from "./Pages/Timer"; 


const { createContext, useContext, useState } = React;

function App() {

  const [userState, setUserState ] = useState({
    id: '',
    todos: false,
    goals: false
  })

  const updateUser = (userLoggedIn) => {
    console.log('About to update user!!')
    setUserState(userLoggedIn)
    
  }

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


        </Wrapper>
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;

