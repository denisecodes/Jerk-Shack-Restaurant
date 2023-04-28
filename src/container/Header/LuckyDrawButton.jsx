import React from "react";
import Button from "../../components/Button/Button";
import './LuckyDrawButton.css'

function LuckyDrawButton(props) {
  return (
    <Button id={props.id} message={props.message} />
  )
};

export default LuckyDrawButton;