import React from 'react';
import teamPhoto from '../../assets/team.jpg';
import './AboutUs.css';


const AboutUs = () => (
  <div id='about-us'>
    <section className="about-us">
      <h3 id="about-us-heading">About Us</h3>
        <div className="photo-description">
        <img id="about-us-photo" src={teamPhoto} alt="our-team" />
        <p id="about-us-description">
        Our menu is a carefully curated selection of Caribbean-inspired dishes, 
        with subtle nods to many of the islands. We continually review and develop 
        our dishes and we use our most important critics to do this – our teams! 
        We hold bi-monthly food development days which can be joined by anyone. 
        New recipe options are presented and we gather the expertise from our team members 
        who have grown up on Caribbean staples to help guide the flavours and ingredients 
        and ensure we continue to honour the heritage of the dishes.
        </p>
        </div>
    </section>
  </div>
);

export default AboutUs;

