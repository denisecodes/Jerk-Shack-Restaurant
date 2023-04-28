import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  // Step 1
  // sets isDropdownOpen to false by default so that the dropdown content is not shown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" id="home">Home</Link>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <div className="dropdown">
      {/* Step 2 */}
      {/* when the user clicks on "Bookings", if the isDropdownOpen is not true(false), then it changes isDropdownOpen to true */}
        <button className="dropbtn" onClick={handleDropdownToggle}>
          Bookings <i className="fa fa-caret-down"></i>
        </button>
        {/* Step 3 */}
        {/* when isDropdownOpen is true, then show-content adds the dropdown-content class to the div  */}
        <div className={`dropdown-content ${isDropdownOpen ? "show-content" : ""}`}> 
          <a href="#reservation">Reservation</a>
          <a href="#queuing">Queuing</a>
        </div>
      </div>
      <a href="#blog">Blog</a>
      <a href="#faq">FAQ</a>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

