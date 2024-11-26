import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const [section, setSection] = useState("description");

  return (
    <>
      <Card className="project-card">
        <a href={props.data.link}>
          <Card.Img
            variant="top"
            src={"/portfolio-images" + props.data.imageFile}
            alt={props.data.title}
            className="project-card__img"
          ></Card.Img>
          <Card.ImgOverlay className="project-card__img-overlay">
            {props.data.technologyLogos?.map((logo, index) => (
              <i key={index} className={`project-card__icon ${logo}`}></i>
            ))}
          </Card.ImgOverlay>
          <Card.Title>{props.data.title}</Card.Title>
        </a>
        <Card.Subtitle className="project-card__subtitle">
          {props.data.subtitle}
        </Card.Subtitle>
        <Nav
          variant="tabs"
          className="justify-content-center"
          defaultActiveKey="#first"
        >
          <Nav.Item>
            <Nav.Link
              as="div"
              active={section === "description"}
              className="project-card__nav-link"
              onClick={() => setSection("description")}
            >
              Description
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as="div"
              active={section === "technical"}
              className="project-card__nav-link"
              onClick={() => setSection("technical")}
            >
              Technical Details
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Card.Body>
          {section === "description" && (
            <Card.Text className="project-card__text">
              {props.data.description}
            </Card.Text>
          )}
          {section === "technical" && (
            <>
              <Card.Text as="ul">
                {props.data.technical.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </Card.Text>
              {"git" in props.data && (
                <Button href={props.data.git}>
                  <img
                    height="26px"
                    width="26px"
                    className="project-card__git-button"
                    src="/github-mark-white.svg"
                    alt="git"
                  />
                  View source on github
                </Button>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectCard;
