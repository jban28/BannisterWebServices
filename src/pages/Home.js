
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Processing ...")
    fetch("https://enquiries.bannisterwebservices.co.uk/contact-form", {
      method: "POST",
      body: new FormData(e.target)
    })
    .then(response => {
      if (response.ok === true){setSubmitted(true)}
      else {throw new Error("Service not available")}
    })
    .catch(error => {
      console.log(error)
      setMessage("Submission failed, click to try again.")
    })
  }

  return (
    <>
      
      <div className="fill-height-with-nav-square">
        <div className="welcome-box vertical-center">
          <h1>
            <span className="welcome-line slide-in-from-left">Welcome to </span><br/>
            <span className="welcome-line-logo slide-in-from-right">Bannister </span><br/>
            <span className="welcome-line-logo slide-in-from-left">Web </span><br/>
            <span className="welcome-line-logo slide-in-from-right">Services</span><br/>
            <span className="welcome-line slide-in-from-left">.co.uk</span>
          </h1>
        </div>
      </div>

      <Navigation />

      <div className="bg-white">
        <div className="fix-width welcome-body">
          <p className="">I am James Bannister, an aspiring developer. I established Bannister Web Services as a way for me to develop my programming skills and showcase my work. I provide free web and software development services on a casual basis and will consider taking on any project that I think I am capable of completing.</p>
          <Button href="/portfolio">View my portfolio</Button>
        </div>
      </div>

      {!submitted &&
        <Form onSubmit={handleSubmit} acceptCharset="utf-8">
          <h1>Contact me</h1>
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
          <Button type="submit">{message}</Button>
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
};

export default Home;