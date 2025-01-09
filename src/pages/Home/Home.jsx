import Button from "../../components/Button/Button.jsx";
import BrandIcon from "../../components/BrandIcon/BrandIcon.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import styles from "./Home.module.css";
import arrBrands from "../../config/brands.json";
import { Link } from "react-router-dom";

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
          {arrBrands.map(({ id, label }) => (
            <BrandIcon key={id} id={id} label={label} />
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
