import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Wrapper from "./components/Wrapper";
import Homepage from './Pages/Homepage';
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Home} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

