import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";



import Homepage from './Pages/Homepage';

import Home from "./Pages/Home";
import signUp from './components/signUp';





function App() {
  return (
    <Router>
      <div>
        <Wrapper>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={signUp} />

        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

