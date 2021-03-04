import React from "react";
import Hero from "../components/Hero";
import background from "../images/jumbo.png"
import Quote from "./Quote"; 

function Jumbotron() {
    return (
    <div class="jumbotron jumbotron-fluid container justify ='center' "  style={{
    width: "1000px",
    paddingTop: "0px",
    paddingBottom: "0px",
    marginBottom: "20px",
    height: "500px",
    opacity: "0.5",
    
      }} >
        <Hero  backgroundImage= {background}  > 
        <div style={{
            
        }}>
            <h1 class="text-center">ezlife</h1>
            <br></br>
            <br></br>
            <Quote />
            </div>
        </Hero>
    
        
    </div >
    )
}


export default Jumbotron; 