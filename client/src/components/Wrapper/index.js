import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main style ={{backgroundColor:"#ffd740"}} className="wrapper">{props.children}</main>;
}

export default Wrapper;
