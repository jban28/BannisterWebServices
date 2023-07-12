import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/", {
      method: "POST",
      body: new FormData(e.target)
    }).then().then(setSubmitted(true))
  }

  return (
    <>
      <div className="heading-bar bg-theme"><h1>Contact me</h1></div>
      {!submitted &&
        <Form onSubmit={handleSubmit} acceptCharset="utf-8">
          <Form.Group className="form-group">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="name" id="name" required/>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" id="email" required/>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" name="subject" id="subject" required/>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter message" name="message" id="subject" required/>
          </Form.Group>
          <div id="response"></div>
          <Button type="submit">Submit form</Button>
        </Form>
      }

      {submitted && 
        <Container fluid>
          <Card className="card-cv">
            <Card.Body>
              Thankyou for contacting Bannister Web Services. You will recieve an Email confirmation of your message. I will respond to your message as soon as possible.
            </Card.Body>
          </Card>
        </Container>
      }
      
    </>
  )
}

export default Contact;