import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Contact.css'

// import Bootstrap
import { Button, Form } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  return (
    <MainLayout>
      <div>
        <section id="contact">
        <h2 id="contact-us-text">Contact Us</h2>
        <p id="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tortor proin suscipit tempor, 
          orci at nam sed nibh egestas conubia eros praesent risus tellus vel, 
          ut primis fermentum metus est vitae aenean parturient magnis aptent. 
          Dignissim cum non euismod ultrices faucibus dis mi luctus ultricies, 
          nec platea condimentum torquent sollicitudin iaculis quis eu, 
          interdum mauris cras ligula blandit neque varius montes.
        </p>
        <Form className="contact-form">
          {/* First Name */}
          <Form.Group className="contact-items" controlId="formFirstName">
            <Form.Control type="text" placeholder="First Name" required />
          </Form.Group>

          {/* First Name */}
          <Form.Group className="contact-items" controlId="formLastName">
            <Form.Control type="text" placeholder="Last Name" required />
          </Form.Group>

          {/* Phone */}
          <Form.Group className="contact-items" controlId="formPhone">
            <Form.Control type="tel" placeholder="Phone No" required />
          </Form.Group>

          {/* Email */}
          <Form.Group className="contact-items" controlId="formEmail">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          {/* Message */}
          <Form.Group className="contact-items" controlId="formMessage">
            <Form.Control as="textarea" rows={5} placeholder="Write your message here..." required />
          </Form.Group>

          <Button className="contact-items" id="submit-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </section>
      </div>
    </MainLayout>
  )
};

export default Contact