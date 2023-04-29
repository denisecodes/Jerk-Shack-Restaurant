import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Queuing.css'

// import Bootstrap
import { Button, Form } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'


const Queuing = () => {
  return (
    <MainLayout>
        <section className="queuing">
          <h2 id="queuing-heading">Queuing</h2>
          <p id="queuing-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor proin suscipit tempor, 
            orci at nam sed nibh egestas conubia eros praesent risus tellus vel, 
            ut primis fermentum metus est vitae aenean parturient magnis aptent. 
            Dignissim cum non euismod ultrices faucibus dis mi luctus ultricies, 
            nec platea condimentum torquent sollicitudin iaculis quis eu, 
            interdum mauris cras ligula blandit neque varius montes.
          </p>
          <Form className="queuing-form">
          {/* Name */}
            <Form.Group className="queuing-form-items" controlId="formName">
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="queuing-form-items" controlId="formPhone">
              <Form.Control type="tel" placeholder="Your phone number" required />
            </Form.Group>

            {/* Email */}
            <Form.Group className="queuing-form-items" controlId="formEmail">
              <Form.Control type="email" placeholder="Your email" required />
            </Form.Group>

            {/* Party size */}
            <Form.Group className="queuing-form-items" controlId="formPartySize">
              <Form.Control type="number" min="1" max="10" placeholder="Your party size" required />
            </Form.Group>

            <Button className="queuing-form-items" id="ticket-btn" variant="primary" type="submit">
              Get Ticket
            </Button>
          </Form>
        </section>
    </MainLayout>
  )
};

export default Queuing;