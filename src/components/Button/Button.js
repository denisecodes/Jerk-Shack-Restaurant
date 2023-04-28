import React from "react";

function Button(props) {
  return (
    <button id={props.id} type="button">{props.message}</button>
  )
};

export default Button;