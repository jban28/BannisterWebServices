import { useState } from "react";
import Button from "../Button/Button.jsx";
import "./ContactForm.css";
import styles from "./ContactForm.module.css";

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
    setStatus("sending");
    var form = new FormData(e.target);
    var request = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    fetch(
      "https://xixnmy7aq2.execute-api.eu-west-2.amazonaws.com/master/contact-form",
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
        console.error(error);
        setStatus("failed");
      });
  };

  if (status === "sent") {
    return (
      <p className={`${className} ${styles.formConfirmMessage}`}>
        Thank you for contacting Bannister Web Services. You should now recieve
        an Email confirmation of your message. If this does not arrive please
        check your spam and junk folders. I will respond to your message as soon
        as possible.
      </p>
    );
  }

  return (
    <form
      style={{ ...style }}
      className={`${className}`}
      onSubmit={handleSubmit}
      acceptCharset="utf-8"
    >
      <h1>Contact me</h1>
      <fieldset disabled={status === "sending"}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            className={styles.formInput}
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            className={styles.formInput}
            rows={5}
            placeholder="Enter message"
            name="message"
            id="subject"
            required
          />
        </div>
        {status === "failed" && (
          <div className={styles.formFailMessage}>
            Form submission failed, please try again
          </div>
        )}
        <Button type="submit">
          {status === "sending" && <div className={styles.formSubmitSpinner} />}
          {buttonHTML}
        </Button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
