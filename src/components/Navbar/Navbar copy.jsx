import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

// Import react bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <div className="navbar-wrapper">
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-items"><Link to="/" className="nav-items" id="nav-home">Home</Link></li>
        <li className="navbar-items"><a href="#about" className="nav-items">About</a></li>
        <li className="navbar-items"><a href="#menu" className="nav-items">Menu</a></li>
        <li className="navbar-items">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="bookings-dropdown">
              Bookings
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Reservation</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Queuing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="navbar-items"><a href="#blog" className="nav-items">Blog</a></li>
        <li className="navbar-items"><a href="#faq" className="nav-items">FAQ</a></li>
        <li className="navbar-items"><Link to="/contact" className="nav-items">Contact</Link></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;

