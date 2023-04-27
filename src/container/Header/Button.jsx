import React from "react";
import './Button.css';

const Button = (props) => {
  return <button type="button" id="lucky-draw">{props.message}</button>;
};

export default Button;