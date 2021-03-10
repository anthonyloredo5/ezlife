import React from "react";
import "./style.css";
import background from "../../images/background2.png";

function Wrapper(props) {
  return <main style ={{ backgroundImage: `url(${background})`}} className="wrapper">{props.children}</main>;
}

export default Wrapper;
