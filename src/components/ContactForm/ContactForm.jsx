import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactForm.css";

const ContactForm = ({ className = "", style = {} }) => {
  const [status, setStatus] = useState("idle");

  let buttonHTML;
  switch (status) {
    case "idle": {
      buttonHTML = "Submit";
      break;
    }
    case "failed": {
      buttonHTML = "Try again";
      break;
    }
    case "sending": {
      buttonHTML = "Please wait";
      break;
    }
    default: {
      break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var form = new FormData(e.target);
    var request = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };
    console.log(request);
    fetch(
      "example", //"https://xixnmy7aq2.execute-api.eu-west-2.amazonaws.com/master/contact-form",
      {
        method: "POST",
        body: JSON.stringify(request),
      },
    )
      .then((response) => {
        if (response.ok === true) {
          setStatus("sent");
        } else {
          throw new Error("Service not available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (status === "sent") {
    return (
      <p className={`${className} contact-form__confirmation-text`}>
        Thank you for contacting Bannister Web Services. You should now recieve
        an Email confirmation of your message. If this does not arrive please
        check your spam and junk folders. I will respond to your message as soon
        as possible.
      </p>
    );
  }

  return (
    <Form
      style={{ ...style }}
      className={`${className} contact-form`}
      onSubmit={handleSubmit}
      acceptCharset="utf-8"
    >
      <h1>Contact me</h1>
      <fieldset disabled={status === "sending"}>
        <Form.Group className="contact-form__form-group">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />
        </Form.Group>
        <Form.Group className="contact-form__form-group">
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            required
          />
        </Form.Group>
        <Form.Group className="contact-form__form-group">
          <Form.Label htmlFor="subject">Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            required
          />
        </Form.Group>
        <Form.Group className="contact-form__form-group">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter message"
            name="message"
            id="subject"
            required
          />
        </Form.Group>
        {status === "failed" && (
          <div className="contact-form__fail-message">
            Form submission failed
          </div>
        )}
        <Button type="submit">
          {status === "sending" && <div class="contact-form__spinner" />}
          {buttonHTML}
        </Button>
      </fieldset>
    </Form>
  );
};

export default ContactForm;
