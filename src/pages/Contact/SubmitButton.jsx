import React from "react";
import Button from "../../components/Button/Button";
import './SubmitButton.css';

function SubmitButton(props) {
  return (
    <Button clasName={props.className} id={props.id} type={props.type} message={props.message} />
  )
};

export default SubmitButton;