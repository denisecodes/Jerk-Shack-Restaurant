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
        Lorem ipsum dolor sit amet consectetur adipiscing elit egestas et, 
        platea eget natoque ante aliquet dictumst purus malesuada elementum, 
        habitasse himenaeos gravida habitant neque est cras ad. 
        Neque maecenas platea fermentum sociis nisl lobortis suscipit, 
        tempus sagittis netus fringilla nullam potenti habitasse ligula, 
        vel scelerisque faucibus lacus laoreet vulputate. 
        Mollis porta penatibus eleifend pretium primis conubia suscipit, 
        litora justo eros augue scelerisque proin arcu senectus, 
        netus aliquet auctor ligula dictumst sociis. 
        Justo mattis urna mollis nisi vivamus sodales iaculis pharetra vitae, 
        cras varius eros penatibus tincidunt at natoque. 
        Mi inceptos nec aliquam sociis velit vehicula eu felis massa etiam class, 
        porta facilisi nam id natoque penatibus mus cum conubia tellus nibh, 
        ullamcorper a iaculis congue ultricies molestie duis aenean magna senectus. 
        </p>
        </div>
    </section>
  </div>
);

export default AboutUs;

