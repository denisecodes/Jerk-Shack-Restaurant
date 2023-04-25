import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav id="navbar">
      <Link to="/" class="nav-items" id="nav-home">Home</Link>
      <a href="#about" class="nav-items">About</a>
      <a href="#menu" class="nav-items">Menu</a>
      <a href="#bookings" class="nav-items">Bookings</a>
      <a href="#blog" class="nav-items">Blog</a>
      <a href="#faq" class="nav-items">FAQ</a>
      <Link to="/contact" class="nav-items">Contact</Link>
  </nav>
);

export default Navbar;
