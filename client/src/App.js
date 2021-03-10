import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";
import Drawer from "./components/Drawer"; 
import Landing from './Pages/Landing';
import Dash from "./Pages/Dash";

import ThemeContext from './Context.js'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Timer from "./Pages/Timer"; 
import Todo from "./Pages/Todo";
import Fitness from "./Pages/Fitness"; 
import Goals from "./Pages/Goals"; 
import Screentime from "./Pages/Screentime"; 
import Budget from "./Pages/Budget"; 
import UserWidgetSelect from "./components/UserWidgetSelect/UserWidgetSelect";

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
          <Route path="/todo" component={Todo} />
          <Route path="/fitness" component={Fitness}  />
          <Route path="/goals" component={Goals}  />
          <Route path="/screentime" component={Screentime}  />
          <Route path="/budget" component={Budget}  />
          <Route path="/UserWidgetSelect" component={UserWidgetSelect} />

        </Wrapper>
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;

