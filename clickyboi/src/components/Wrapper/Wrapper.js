import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper flex-container wrap">{props.children}</div>;

export default Wrapper;