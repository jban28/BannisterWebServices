import { useState } from "react";
import Button from "../Button/Button.jsx";
import styles from "./ContactForm.module.css";

const ContactForm = ({ className = "", style = {} }) => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (formData) => {
    setStatus("sending");

    var request = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    fetch(
      "https://xixnmy7aq2.execute-api.eu-west-2.amazonaws.com/master/contact-form-404",
      {
        method: "POST",
        body: JSON.stringify(request),
      },
    )
      .then((response) => {
        if (response.ok === true) {
          setStatus("sent");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
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
      action={handleSubmit}
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.subject}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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
