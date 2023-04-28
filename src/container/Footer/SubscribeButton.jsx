import React from 'react';
import Button from "../../components/Button/Button";
import './SubscribeButton.css'

function SubscribeButton(props) {
    return (
      <Button className={props.className} id={props.id} type={props.type} message={props.message} />
    )
  };
  
  export default SubscribeButton;