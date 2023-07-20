import Container from "react-bootstrap/Container";
import Project from "../components/Project";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Portfolio = () => {
  const projectList = [
    {
      title: "bannisterwebservices.co.uk",
      subtitle: "This website!",
      link: "/",
      git: "https://github.com/jban28/BannisterWebServices",
      description: "A website showcasing my own programming and web development projects and to advertise my services as a developer.",
      technical: [
        "Client-rendered SPA built using React JS",
        "Bootstrap framework used throughout for styling and layout"
      ],
      imageFile: "/bws.png"
    },
    {
      title: "mattpagett.co.uk",
      subtitle: "Art portfolio website",
      link: "http://www.mattpagett.co.uk",
      git: "https://github.com/jban28/MattPagettVue",
      description: " A website displaying artwork by Matthew Pagett. Includes a system for Matt to add new images and update existing ones.",
      technical: [
        "Client-rendered SPA built using Vue JS",
        "Custom element created to allow users to zoom and pan images, supporting all common gestures on desktop and mobile devices",
        "Integrates with my 'Artists API' to manage content"
      ],
      imageFile: "/matt-pagett.png"
    },
    {
      title: "Artists-API",
      subtitle: "Content Management System",
      description: "The Artist API functions as the content management system for mattpagett.co.uk. It is designed to be easily extended for additional artists to manage a portfolio website",
      git: "https://github.com/jban28/ArtistAPI",
      technical: [
        "API built in Python using the Flask library",
        "Communicates with a Mongo Database and AWS S3 bucket to deliver content to users",
        "Uses JSON web tokens to authenticate users and authorise access to services",
      ],
      imageFile: "/artist-api.png"
    },
    {
      title: "Master's Degree Project",
      subtitle: "Medical Applications of AI",
      git: "https://github.com/jban28/MPhys-Radiotherapy-49/tree/main",
      description: "My master's degree project involved creating a Convolutional Neural Network that could predict recurrence of Head and Neck cancer after radiotherapy based on CT scans of the tumour site.",
      technical: [
        "CNN programmed in Python using the Pytorch library"
      ],
      imageFile: "/mphys.png"
    },
    {
      title: "C++ Degree Module",
      subtitle: "Titled: Object Oriented Programming in the C++ Language",
      git: "https://github.com/jban28/MPhys-Radiotherapy-49/tree/main",
      description: "I completed an optional degree module on Object Oriented Programming using the C++ programming language ",
      technical: [
        "Assessment composed of 6 short assesments and a larger project",
        "Learnt the fundamental concepts of OOP and features of the C++ leanguage"
      ],
      imageFile: "/oop.png"
    }
  ]

  return (
    <>
      <Container fluid="lg">
        <Row xs={1} md={2} lg={3} className="g-4">
          {projectList.map( (project, index) => (
            <Col key={index}>
              <Project data={project}></Project>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
};

export default Portfolio;