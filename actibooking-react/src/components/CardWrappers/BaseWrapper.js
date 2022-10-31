import React from "react";
import "./BaseWrapper.css";

const BaseWrapper = props => {
    const classes = "card " + props.className;
    return <div className={classes}> {props.children} </div>;
}
export default BaseWrapper;