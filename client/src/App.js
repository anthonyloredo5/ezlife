import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";
import Landing from './Pages/Landing';
import Dash from "./Pages/Dash";
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Timer from "./Pages/Timer"; 




function App() {
  return (
    <Router>
      <div>
        <Wrapper>

          <Route exact path="/" component={Landing} />
          <Route exact path="/dash" component={Dash} />
          <Route exact path="/signUp" component={CreateAccount} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/timer" component={Timer} />

        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

