import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main style ={{backgroundColor:"#eceff1"}} className="wrapper">{props.children}</main>;
}

export default Wrapper;
