import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import { useState } from "react";

const Project = (props) => {
  const [section, setSection] = useState("description");

  return (
    <>
      <Card className="content">
        <Card.Img variant="top" src={props.data.imageFile}></Card.Img>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Subtitle>{props.data.subtitle}</Card.Subtitle>
        <Nav variant="tabs" className="justify-content-center" defaultActiveKey="#first">
            <Nav.Item>
              <div className="nav-link selector" onClick={() => setSection("description")}>Description</div>
            </Nav.Item>
            <Nav.Item>
              <div className="nav-link selector" onClick={() => setSection("technical")}>Technical Details</div>
            </Nav.Item>
          </Nav>
          {(section === "description") &&
            <ul>
              {props.data.description.map((item) => <li key={item}>{item}</li>)}
            </ul>
          }
          {(section === "technical") &&
            <ul>
              {props.data.technical.map((item) => <li key={item}>{item}</li>)}
            </ul>
          }
      </Card>
    </>
  )
};

export default Project;