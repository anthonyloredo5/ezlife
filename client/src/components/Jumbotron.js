import React from "react";

import background from "../images/jumbo.png"
import Quote from "./Quote"; 

function Jumbotron() {
    return (
    <div className="jumbotron jumbotron-fluid container justify ='center' "  style={{
    width: "1700px",
    paddingTop: "0px",
    paddingBottom: "0px",
    marginBottom: "20px",
    height: "190px",
    overflow: "auto",
    backgroundImage: `url(${background})`,
    boxShadow: "0 15px 20px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)",
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