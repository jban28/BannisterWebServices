import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useRef, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import WelcomeBox from "../components/WelcomeBox/WelcomeBox.jsx";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("Submit");
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const navbarRef = useRef();

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
    setMessage("Processing ...");
    fetch(
      "https://xixnmy7aq2.execute-api.eu-west-2.amazonaws.com/master/contact-form",
      {
        method: "POST",
        body: JSON.stringify(request),
      },
    )
      .then((response) => {
        if (response.ok === true) {
          setSubmitted(true);
        } else {
          throw new Error("Service not available");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("Submission failed, click to try again.");
      });
  };

  const handleScroll = () => {
    const yView = navbarRef.current.getBoundingClientRect().y;
    const yScroll = window.scrollY;
    setNavbarOpacity(yScroll / (yView + yScroll));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);

  return (
    <>
      <WelcomeBox />

      <Navigation ref={navbarRef} opacity={navbarOpacity} />

      <div className="bg-white">
        <div className="fix-width welcome-body">
          <p className="">
            I am James Bannister, an aspiring developer. I established Bannister
            Web Services as a way for me to develop my programming skills and
            showcase my work. I provide free web and software development
            services on a casual basis and will consider taking on any project
            that I think I am capable of completing.
          </p>
          <Button href="/portfolio">View my portfolio</Button>
        </div>
      </div>

      <div className="bg-theme py-3">
        <h1 className="my-0 icon-bar">
          <i className="brand-icon fa-brands fa-html5">
            <span className="brand-icon-tooltip">HTML5</span>
          </i>
          <i className="brand-icon fa-brands fa-css3-alt">
            <span className="brand-icon-tooltip">CSS3</span>
          </i>
          <i className="brand-icon fa-brands fa-square-js">
            <span className="brand-icon-tooltip">JavaScript</span>
          </i>
          <i className="brand-icon fa-brands fa-vuejs">
            <span className="brand-icon-tooltip">VueJS</span>
          </i>
          <i className="brand-icon fa-brands fa-react">
            <span className="brand-icon-tooltip">ReactJS</span>
          </i>
          <i className="brand-icon fa-brands fa-python">
            <span className="brand-icon-tooltip">Python</span>
          </i>
          <i className="brand-icon fa-brands fa-php">
            <span className="brand-icon-tooltip">PHP</span>
          </i>
          <i className="brand-icon fa-brands fa-wordpress">
            <span className="brand-icon-tooltip">Wordpress</span>
          </i>
          <i className="brand-icon fa-brands fa-bootstrap">
            <span className="brand-icon-tooltip">Bootstrap</span>
          </i>
          <i className="brand-icon fa-brands fa-sass">
            <span className="brand-icon-tooltip">SASS</span>
          </i>
          <i className="brand-icon fa-brands fa-github">
            <span className="brand-icon-tooltip">GitHub</span>
          </i>
        </h1>
      </div>

      {!submitted && (
        <Form onSubmit={handleSubmit} acceptCharset="utf-8">
          <h1>Contact me</h1>
          <Form.Group className="form-group">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              id="name"
              required
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              required
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
          </Form.Group>
          <Form.Group className="form-group">
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
          <div id="response"></div>
          <Button type="submit">{message}</Button>
        </Form>
      )}

      {submitted && (
        <div className="fix-width welcome-body">
          Thankyou for contacting Bannister Web Services. You will recieve an
          Email confirmation of your message. I will respond to your message as
          soon as possible.
        </div>
      )}
    </>
  );
};

export default Home;
