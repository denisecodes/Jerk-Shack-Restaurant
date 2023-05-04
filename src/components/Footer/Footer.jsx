import React from 'react';
import './Footer.css';
import SubscribeButton from './SubscribeButton';

const Footer = () => (
  <section className="footer">
    <article className="footer-top">
    <div className="newsletter">
      <h3 className="newsletter-items footer-headings" id="newsletter-text">Sign Up for All the Latest News & Events</h3>
      <form>
      <input className="newsletter-items" type="email" id="subscribe-email" name="email" placeholder="you@emailaddress.com" required /><br />
      <SubscribeButton className="newsletter-items" type="submit" id="subscribe" message="subscribe" />
      </form>
    </div>
    <div className="contact">
      <h3 className="footer-headings">Contact Us</h3>
      <p><a id="email-us" href="mailto:hello@jerkshack.com"><span className="contact-text">hello@jerkshack.com</span></a><br />
      <span className="contact-text">+44 7706 394 271</span><br />
      <span className="contact-text">222 great london street, london, ec32 7rf</span></p>
    </div>
    </article>
    <article className="footer-bottom">
      <div className="social-media">
        <a href="#fb"><i className="social-icons fa-brands fa-facebook-f"></i></a>
        <a href="#ig"><i className="social-icons fa-brands fa-instagram"></i></a>
        <a href="#tt"><i className="social-icons fa-brands fa-tiktok"></i></a>
      </div>
      <div className="footer-links">
        <p><span className="footer-link-text">Jerk Shack Restaurant © 2023</span></p>
        <p><a href="#privacy-policy"><span className="footer-link-text">Privacy Policy</span></a></p>
        <p><a href="#terms-conditions"><span className="footer-link-text">Terms & Conditions</span></a></p>
      </div>
    </article>
  </section>
);

export default Footer;
