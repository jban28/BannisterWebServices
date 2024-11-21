import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { forwardRef } from "react";
import "./Navigation.css";

const Navigation = forwardRef(function ({ opacity = 1 }, ref) {
  const routerLocation = useLocation();

  return (
    <Navbar
      id="navbar"
      sticky="top"
      className="justify-content-center"
      style={{ backgroundColor: `rgba(255, 42, 0, ${opacity})` }}
      ref={ref}
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
});

export default Navigation;
