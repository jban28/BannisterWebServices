import Button from "react-bootstrap/Button";
import { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import WelcomeBox from "../../components/WelcomeBox/WelcomeBox.jsx";
import BrandIcon from "../../components/BrandIcon/BrandIcon.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import "./Home.css";
import arrBrands from "../../config/brands.json";

const Home = () => {
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const navbarRef = useRef();

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

      <div className="homepage__container homepage__container--white">
        <p className="homepage__intro homepage--max-width">
          I am James Bannister, an aspiring developer. I established Bannister
          Web Services as a way for me to develop my programming skills and
          showcase my work. I provide free web and software development services
          on a casual basis and will consider taking on any project that I think
          I am capable of completing.
        </p>
        <Button href="/portfolio">View my portfolio</Button>
      </div>

      <div className="homepage__container homepage__container--theme">
        <div className="homepage__brand-bar">
          {arrBrands.map(({ id, label }) => (
            <BrandIcon key={id} id={id} label={label} />
          ))}
        </div>
      </div>
      <div className="homepage__container">
        <ContactForm className="homepage--max-width" />
      </div>

      <Footer />
    </>
  );
};

export default Home;
