import Container from "react-bootstrap/Container";
import Project from "../components/Project.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "../components/Navigation/Navigation.jsx";

const Portfolio = () => {
  const projectList = [
    {
      title: "www.mcr24hourrun.co.uk",
      subtitle: "Charity event I co-founded",
      link: "https://www.mcr24hourrun.co.uk",
      description:
        "This is the website for the charity event I co-founded whilst at university. This project was completed in colloboration with another developer.",
      imageFile: "/24hourrun.png",
      technologyLogos: [
        "fa-brands fa-react",
        "fa-brands fa-square-js",
        "fa-brands fa-sass",
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fi fi-brands-typescript",
        "fi fi-brands-bootstrap",
      ],
      technical: [
        "React SPA built using typescript",
        "Stylesheets compiled using SASS",
        "Bootstrap used for layout and some UI components",
        "Integration with Just Giving API",
      ],
    },
    {
      title: "bannisterwebservices.co.uk",
      subtitle: "This website!",
      link: "/",
      git: "https://github.com/jban28/BannisterWebServices",
      description:
        "A website showcasing my own programming and web development projects and to advertise my services as a developer.",
      technical: [
        "Client-rendered SPA built using React JS",
        "Backend API written in Flask for handling contact form submissions",
        "Bootstrap framework used throughout for styling and layout",
      ],
      imageFile: "/bws.png",
      technologyLogos: [
        "fa-brands fa-react",
        "fa-brands fa-square-js",
        "fa-brands fa-python",
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fi fi-brands-bootstrap",
        "fa-brands fa-wordpress",
      ],
    },
    {
      title: "mattpagett.co.uk",
      subtitle: "Art portfolio website",
      link: "http://www.mattpagett.co.uk",
      git: "https://github.com/jban28/MattPagettVue",
      description:
        " A website displaying artwork by Matthew Pagett. Includes a system for Matt to add new images and update existing ones.",
      technical: [
        "Client-rendered SPA built using Vue JS",
        "Custom element created to allow users to zoom and pan images, supporting all common gestures on desktop and mobile devices",
        "Integrates with my 'Artists API' to manage content",
      ],
      imageFile: "/matt-pagett.png",
      technologyLogos: [
        "fa-brands fa-vuejs",
        "fa-brands fa-square-js",
        "fa-brands fa-python",
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
      ],
    },
    {
      title: "Artist-API",
      subtitle: "Content Management System",
      description:
        "The Artist API functions as the content management system for mattpagett.co.uk. It is designed to be easily extended for additional artists to manage a portfolio website",
      git: "https://github.com/jban28/ArtistAPI_v2",
      technical: [
        "API built in Python hosted with AWS API Gateway and AWS Lambda",
        "Communicates with a Mongo Database and AWS S3 bucket to deliver content to users",
        "Uses JSON web tokens to authenticate users and authorise access to services",
      ],
      imageFile: "/artist-api.png",
      technologyLogos: ["fa-brands fa-python", "fa-brands fa-aws"],
    },
    {
      title: "Master's Degree Project",
      subtitle: "Medical Applications of AI",
      git: "https://github.com/jban28/MPhys-Radiotherapy-49/tree/main",
      description:
        "My master's degree project involved creating a Convolutional Neural Network that could predict recurrence of Head and Neck cancer after radiotherapy based on CT scans of the tumour site.",
      technical: ["CNN programmed in Python using the Pytorch library"],
      imageFile: "/mphys.png",
      technologyLogos: ["fa-brands fa-python"],
    },
    {
      title: "C++ Degree Module",
      subtitle: "Object Oriented Programming in the C++ Language",
      git: "https://github.com/jban28/oop-in-c-plus-plus",
      description:
        "I completed an optional degree module on Object Oriented Programming using the C++ programming language ",
      technical: [
        "Assessment composed of 6 short assesments and a larger project",
        "Learnt the fundamental concepts of OOP and features of the C++ leanguage",
      ],
      imageFile: "/oop.png",
    },
  ];

  return (
    <>
      <Navigation transition="fade-in" />
      <Container fluid="lg" className="pb-1">
        <Row xs={1} md={2} lg={3} className="g-4">
          {projectList.map((project, index) => (
            <Col
              key={index}
              className="fade-in"
              style={{ animationDelay: 0.3 * index + "s" }}
            >
              <Project data={project}></Project>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
