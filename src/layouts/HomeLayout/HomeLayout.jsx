import { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import WelcomeBox from "../../components/WelcomeBox/WelcomeBox.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
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
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <WelcomeBox />
      <Navigation ref={navbarRef} opacity={navbarOpacity} />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
