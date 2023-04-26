import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* spreading the props grabs all the other inputs that you get without passing  */}
    </div>
  );
};

export default Input;
