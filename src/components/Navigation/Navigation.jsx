import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, Link } from "react-router-dom";
import { forwardRef } from "react";
import "./Navigation.css";

const Navigation = forwardRef(function ({ opacity = 1 }, ref) {
  const routerLocation = useLocation();

  return (
    <Navbar
      id="navbar"
      sticky="top"
      className="justify-content-center navigation"
      style={{ backgroundColor: `rgba(255, 42, 0, ${opacity})` }}
      ref={ref}
    >
      <Nav justify variant="underline">
        <Nav.Item>
          <Nav.Link as={Link} active={routerLocation.pathname === "/"} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            active={routerLocation.pathname === "/portfolio"}
            to="/portfolio"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/blog"
            active={routerLocation.pathname === "/blog"}
          >
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
});

export default Navigation;
