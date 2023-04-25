import React from 'react';
import Button from './Button';

import './Header.css';

const Header = () => (
  <section class="header">
    <h1>Caribbean Food Delights<br />
    Delivered Striaght to You</h1>
    <div class="button-container">
    <Button message="10% off First Visit" />
    </div>
  </section>
);

export default Header;
