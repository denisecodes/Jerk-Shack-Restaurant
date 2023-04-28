import React, { useState } from "react";
import './LuckyDrawButton.css'

// Try and implement a prompt when discount button is pressed! 

// Discount options 
const discounts = ["10% off First Visit", "1 Free Belizean Fudge", "Buy 1 Get 1 Jerk Chicken"];

const LuckyDrawButton = (props) => {
  const [discount, setWord] = useState(0); // set initial state to 0

  // when user clicks discount button, discount array increases by 1 and returns the remainder divided by the array length
  // hence when it reaches the end of the array, the remainder becomes 0 
  function handleClick() {
    setWord((discount + 1) % discounts.length);
  }

  return (
    <button onClick={handleClick} id={props.id} type={props.type}>{discounts[discount]}</button>
  );
};

export default LuckyDrawButton;