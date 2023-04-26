import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav id="navbar">
      <ul>
        <li><Link to="/" className="nav-items" id="nav-home">Home</Link></li>
        <li><a href="#about" className="nav-items">About</a></li>
        <li><a href="#menu" className="nav-items">Menu</a></li>
        <li><a href="#bookings" className="nav-items">Bookings</a></li>
        <li><a href="#blog" className="nav-items">Blog</a></li>
        <li><a href="#faq" className="nav-items">FAQ</a></li>
        <li><Link to="/contact" className="nav-items">Contact</Link></li>
      </ul>
  </nav>
);

export default Navbar;
