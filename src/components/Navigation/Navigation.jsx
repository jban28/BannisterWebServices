import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const routerLocation = useLocation();
  const [bgOpacity, setBgOpacity] = useState(1);
  const navbarRef = useRef();

  const handleScroll = () => {
    const yView = navbarRef.current.getBoundingClientRect().y;
    const yScroll = window.scrollY;
    const newBgOpacity = yScroll / (yView + yScroll);
    setBgOpacity(newBgOpacity);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);

  return (
    <Navbar
      id="navbar"
      sticky="top"
      className={"justify-content-center " + props.transition}
      ref={navbarRef}
      style={{ backgroundColor: `rgba(255, 42, 0, ${bgOpacity})` }}
    >
      <Nav justify variant="underline">
        <Nav.Item>
          <Nav.Link active={routerLocation.pathname === "/"} href="/#navbar">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={routerLocation.pathname === "/portfolio"}
            href="/portfolio"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://blog.bannisterwebservices.co.uk">
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
