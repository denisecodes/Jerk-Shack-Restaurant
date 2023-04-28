import React, { useState } from "react";
import './LuckyDrawButton.css'

// Try and implement a prompt when discount button is pressed! 

// Discount options 
const discounts = ["10% off First Visit", "1 Free Belizean Fudge", "Buy 1 Get 1 Jerk Chicken"];

const LuckyDrawButton = (props) => {
  const [discount, setDiscount] = useState(0); // set discount to 0 by default

  //  Generate a random number between 0-2 to select a lucky discount 
  function getRandomDiscount() {
    setDiscount(Math.floor(Math.random() * 3));
  }  

  // Use getRandomDiscount function, then prompt user for the email address and return the lucky discount chosen
  function luckyDraw() {
    getRandomDiscount();
    prompt(`Your Discount is: ${discounts[discount]}\nEnter your email address: `);
  }

  return (
    <button onClick={luckyDraw} id={props.id} type={props.type}>{props.message}</button>
  );
};

export default LuckyDrawButton;