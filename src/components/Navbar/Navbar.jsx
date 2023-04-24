import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav id="navbar">
      <a href="#home" class="nav-items" id="nav-home">Home</a>
      <a href="#about" class="nav-items">About</a>
      <a href="#menu" class="nav-items">Menu</a>
      <a href="#bookings" class="nav-items">Bookings</a>
      <a href="#blog" class="nav-items">Blog</a>
      <a href="#faq" class="nav-items">FAQ</a>
      <a href="#contact" class="nav-items">Contact</a>
  </nav>
);

export default Navbar;
