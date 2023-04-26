import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav id="navbar">
      <ul>
        <li><Link to="/" class="nav-items" id="nav-home">Home</Link></li>
        <li><a href="#about" class="nav-items">About</a></li>
        <li><a href="#menu" class="nav-items">Menu</a></li>
        <li><a href="#bookings" class="nav-items">Bookings</a></li>
        <li><a href="#blog" class="nav-items">Blog</a></li>
        <li><a href="#faq" class="nav-items">FAQ</a></li>
        <li><Link to="/contact" class="nav-items">Contact</Link></li>
      </ul>
  </nav>
);

export default Navbar;
