import Button from "../Button/Button.jsx";
import { useState } from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faVuejs,
  faReact,
  faPython,
  faPhp,
  faBootstrap,
  faSass,
  faGithub,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faVuejs,
  faReact,
  faPython,
  faPhp,
  faBootstrap,
  faSass,
  faGithub,
  faAws,
);

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
    <article className={styles.card}>
      <img
        src={"/portfolio-images" + props.data.imageFile}
        alt={props.data.title}
        className={styles.cardImg}
      />
      <div className={styles.cardOverlay}>
        {props.data.technologyLogos?.map((logo, index) => (
          <FontAwesomeIcon
            key={index}
            icon={logo}
            className={`${styles.cardIcon}`}
          ></FontAwesomeIcon>
        ))}
      </div>

      <header className={styles.cardHeader}>
        <h1 className={styles.cardTitle}>
          {props.data.link ? (
            <Link to={props.data.link}>{props.data.title}</Link>
          ) : (
            props.data.title
          )}
        </h1>
        <p className={styles.cardSubtitle}>{props.data.subtitle}</p>
      </header>

      <CardNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && (
        <p className={`${styles.cardContent} ${styles.cardText}`}>
          {props.data.description}
        </p>
      )}
      {activeTab === 1 && (
        <div className={styles.cardContent}>
          <ul>
            {props.data.technical.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {"git" in props.data && (
            <Button as={Link} to={props.data.git}>
              <img
                height="26px"
                width="26px"
                className={styles.cardGitIcon}
                src="/github-mark-white.svg"
                alt="git"
              />
              View source on github
            </Button>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
