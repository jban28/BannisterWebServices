import Button from "../../components/Button/Button.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
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
} from "@fortawesome/free-brands-svg-icons";

const arrBrands = [
  { id: "html5", label: "HTML 5", icon: faHtml5 },
  { id: "css3-alt", label: "CSS 3", icon: faCss3Alt },
  { id: "square-js", label: "JavaScript", icon: faSquareJs },
  { id: "vuejs", label: "Vue JS", icon: faVuejs },
  { id: "react", label: "React JS", icon: faReact },
  { id: "python", label: "Python", icon: faPython },
  { id: "php", label: "PHP", icon: faPhp },
  { id: "bootstrap", label: "Bootstrap", icon: faBootstrap },
  { id: "sass", label: "SASS", icon: faSass },
  { id: "github", label: "GitHub", icon: faGithub },
];

const Home = () => {
  return (
    <>
      <div className={`${styles.container} ${styles.containerWhite}`}>
        <p className={`${styles.intro} ${styles.pageWidth}`}>
          I am James Bannister, an aspiring developer. I established Bannister
          Web Services as a way for me to develop my programming skills and
          showcase my work. I provide free web and software development services
          on a casual basis and will consider taking on any project that I think
          I am capable of completing.
        </p>
        <Button as={Link} to="/portfolio">
          View my portfolio
        </Button>
      </div>

      <div className={`${styles.container} ${styles.containerTheme}`}>
        <div className={styles.brandBar}>
          {arrBrands.map(({ id, label, icon }) => (
            <span key={id} style={{ position: "relative" }}>
              <FontAwesomeIcon className={styles.brandIcon} icon={icon} />
              <span className={styles.brandIconTooltip}>{label}</span>
            </span>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <ContactForm className={styles.pageWidth} />
      </div>
    </>
  );
};

export default Home;
