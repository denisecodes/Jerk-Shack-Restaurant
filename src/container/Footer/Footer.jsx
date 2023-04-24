import React from 'react';
import './Footer.css';

const Footer = () => (
  <div class="footer-bottom">
    <div class="social-media">
      <a href="#fb"><i class="social-icons fa-brands fa-facebook-f"></i></a>
      <a href="#ig"><i class="social-icons fa-brands fa-instagram"></i></a>
      <a href="#tt"><i class="social-icons fa-brands fa-tiktok"></i></a>
    </div>
    <div class="footer-links">
      <p><span class="footer-link-text">Jerk Shack Restaurant © 2023</span>
      <a href="#privacy-policy"><span class="footer-link-text">Privacy Policy</span></a>
      <a href="#terms-conditions"><span class="footer-link-text">Terms & Conditions</span></a></p>
    </div>
  </div>
);

export default Footer;
