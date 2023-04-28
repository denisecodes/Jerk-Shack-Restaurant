import React from 'react';
import LuckyDrawButton from './LuckyDrawButton';
import './Header.css';

const Header = () => (
  <section class="header">
    <h1 id="header-text">Caribbean Food Delights<br />
    Delivered Striaght to You</h1>
    <div class="button-container">
      <LuckyDrawButton id="lucky-draw" type="button" message="Get a Lucky Discount" />
    </div>
  </section>
);

export default Header;
