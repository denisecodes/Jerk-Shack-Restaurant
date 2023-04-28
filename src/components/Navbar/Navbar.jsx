import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
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
        <button className="dropbtn" onClick={handleDropdownToggle}>
          Bookings <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
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

