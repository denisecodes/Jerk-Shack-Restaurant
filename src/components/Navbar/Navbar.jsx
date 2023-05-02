import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
// Import HasLink to allow link to the about us section when on homepage
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  // Step 1
  // sets isDropdownOpen to false by default so that the dropdown content is not shown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="my-navbar">
      <Link to="/" id="home">Home</Link>
      {/* Attempting to haslink about us section  */}
      <HashLink smooth to="#about-us">About</HashLink>
      <a href="#menu">Menu</a>
      <div className="my-dropdown">
      {/* Step 2 */}
      {/* when the user clicks on "Bookings", if the isDropdownOpen is not true(false), then it changes isDropdownOpen to true */}
        <button className="my-dropbtn" onClick={handleDropdownToggle}>
          Bookings <i className="fa fa-caret-down"></i>
        </button>
        {/* Step 3 */}
        {/* when isDropdownOpen is true, then show-content adds the dropdown-content class to the div  */}
        <div className={`my-dropdown-content ${isDropdownOpen ? "show-content" : ""}`}> 
          <a href="#reservation">Reservation</a>
          <Link to="/queuing">Queuing</Link>
        </div>
      </div>
      <a href="#blog">Blog</a>
      <a href="#faq">FAQ</a>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;