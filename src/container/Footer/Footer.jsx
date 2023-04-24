import React from 'react';
import './Footer.css';

const Footer = () => (
  <section class="footer">
    <article class="footer-top">
    <div class="newsletter">
      <h3 class="newsletter-items" id="newsletter-text">Sign Up for All the Latest News & Events</h3>
      <form>
      <input class="newsletter-items" type="email" id="email" name="email" placeholder="you@emailaddress.com" required /><br />
      <button class="newsletter-items" type="submit" id="subscribe">Subscribe</button>
      </form>
    </div>
    <div class="contact">
      <h3 class="contact-text contact-us">Contact Us</h3>
      <p><a href="#email"><span class="contact-text">hello@jerkshack.com</span></a><br />
      <span class="contact-text">+44 7706 394 271</span><br />
      <span class="contact-text">222 great london street, london, ec32 7rf</span></p>
    </div>
    </article>
    <article class="footer-bottom">
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
    </article>
  </section>
);

export default Footer;
