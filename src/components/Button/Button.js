import React from "react";

function Button(props) {
  return (
    <button className={props.className} id={props.id} type={props.type}>{props.message}</button>
  )
};

export default Button;