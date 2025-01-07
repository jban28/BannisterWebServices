import Card from "react-bootstrap/Card";
import Button from "../Button/Button.jsx";
import { useState } from "react";
import "./ProjectCard.css";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

const CardNavTab = ({ children, tab, activeTab, setActiveTab }) => {
  const active = tab === activeTab;
  return (
    <button
      className={
        styles.cardNavTab + (active ? ` ${styles.cardNavTabActive}` : "")
      }
      onClick={() => {
        setActiveTab(tab);
      }}
    >
      {children}
    </button>
  );
};

const CardNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={styles.cardNav}>
      <div className={styles.cardNavTabList}>
        <CardNavTab tab={0} activeTab={activeTab} setActiveTab={setActiveTab}>
          Description
        </CardNavTab>
        <CardNavTab tab={1} activeTab={activeTab} setActiveTab={setActiveTab}>
          Technical Details
        </CardNavTab>
      </div>
    </nav>
  );
};

const ProjectCard = (props) => {
  const [activeTab, setActiveTab] = useState(0);

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
        <CardNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <Card.Body>
          {activeTab === 0 && (
            <Card.Text className="project-card__text">
              {props.data.description}
            </Card.Text>
          )}
          {activeTab === 1 && (
            <>
              <Card.Text as="ul">
                {props.data.technical.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </Card.Text>
              {"git" in props.data && (
                <Button as={Link} to={props.data.git}>
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
