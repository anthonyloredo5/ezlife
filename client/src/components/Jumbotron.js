import React from "react";

import background from "../images/jumbo.png"
import Quote from "./Quote"; 

function Jumbotron() {
    return (
    <div className="jumbotron jumbotron-fluid container justify ='center' "  style={{
    width: "1000px",
    paddingTop: "0px",
    paddingBottom: "0px",
    marginBottom: "20px",
    height: "190px",
    overflow: "auto",
    backgroundImage: `url(${background})`,
      }} >
         
     
    <div>
            <br></br>
            <br></br>
            <Quote />
            </div>
    </div>
    )
}


export default Jumbotron; 