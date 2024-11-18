import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { useState } from "react";

const Project = (props) => {
  const [section, setSection] = useState("description");

  return (
    <>
      <Card>
        <a href={props.data.link}><Card.Img variant="top" src={"/portfolio-images"+props.data.imageFile} alt={props.data.title}></Card.Img>
        <Card.ImgOverlay>
          {props.data.technologyLogos?.map((logo, index) => (<i key={index} className={"portfolio-icon " + logo}></i>))}
        </Card.ImgOverlay>
        <Card.Title>{props.data.title}</Card.Title></a>
        <Card.Subtitle>{props.data.subtitle}</Card.Subtitle>
        <Nav variant="tabs" className="justify-content-center" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link as="div" active={section === "description"} className="bg-theme" onClick={() => setSection("description")}>Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="div" active={section === "technical"} className="bg-theme" onClick={() => setSection("technical")}>Technical Details</Nav.Link>
          </Nav.Item>
        </Nav>
        <Card.Body>
          
            {(section === "description") && <Card.Text>{props.data.description}</Card.Text>}
            {(section === "technical") &&
              <>
                <Card.Text as="ul">
                  {props.data.technical.map((item, index) => <li key={index}>{item}</li>)}
                </Card.Text>
                {("git" in props.data) && <Button href={props.data.git}><img height="26px" width="26px" className="git-icon" src="/github-mark-white.svg" alt="git"/>View source on github</Button>}
                
              </>
            }
        </Card.Body>
      </Card>
    </>
  )
};

export default Project;