import { React, useState, useEffect, useRef } from 'react'
import MainLayout from '../../layout/MainLayout'
import './Queuing.css'

// import Bootstrap
import { Button, Form } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'

const Queuing = () => {

    // Make useState into a function to do the following:
    // Step 1: currentTicket number is retrieved from localStorage and stored into savedTicket
    // Step 2: check if there is a value in savedTicket
    // Step 3: If true, savedTicket number is converted into integer 
    // Step 3: Else if false, 1 is assigned to currentTicket
    const [currentTicket, setCurrentTicket] = useState(() => {
      const savedTicket = localStorage.getItem('currentTicket');
      return savedTicket ? parseInt(savedTicket, 10) : 1;
    }); // set initial Ticket Number as 1
  
    // Increase the ticket number by 1
    function increaseTicket() {
      setCurrentTicket(currentTicket + 1);
    }
  
    // Store the currentTicket value in localStorage
    useEffect(() => {
      localStorage.setItem('currentTicket', currentTicket.toString());
    }, [currentTicket]);

    // Create a reference object in the form, initially set to null
    const formRef = useRef(null);
  
    // getTicket as the parameter, representing the event object being passed through the function
    function handleSubmit(getTicket) {
      // Prevents page being reloaded if user clicks getTicket button
      getTicket.preventDefault();
      // Checks if queuing form is valid, if it is, then current ticket number increase by 1
      if (formRef.current.checkValidity()) {
        increaseTicket();
      }
    }
  
    return (
      <MainLayout>
          <section className="queuing">
            {/* <h2 id="queuing-heading">Queuing</h2> */}
            <h2 id="current-ticket">Current Ticket No: {currentTicket}</h2>
            <p id="queuing-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor proin suscipit tempor, 
              orci at nam sed nibh egestas conubia eros praesent risus tellus vel, 
              ut primis fermentum metus est vitae aenean parturient magnis aptent. 
              Dignissim cum non euismod ultrices faucibus dis mi luctus ultricies, 
              nec platea condimentum torquent sollicitudin iaculis quis eu, 
              interdum mauris cras ligula blandit neque varius montes.
            </p>
            <h2 id="next-ticket">Next Ticket No: {currentTicket+1}</h2>
            <Form className="queuing-form" onSubmit={handleSubmit} ref={formRef}>
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
