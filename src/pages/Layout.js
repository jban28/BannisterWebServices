import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [page, setPage] = useState(useLocation().pathname);

  return (
    <>
      <div className="bg-theme logo">
        <img src="/logo.png" alt="logo" width="200px"/>
      </div>
      <Navbar className="bg-theme justify-content-center bold" sticky="top">
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link active={page === "/"} href="/" onClick={() => setPage("home")}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={page === "/portfolio"} href="/portfolio" onClick={() => setPage("portfolio")}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={page === "/about"} href="/about" onClick={() => setPage("about")}>About me</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Outlet />
      <div className="bg-theme footer"></div>
    </>
  )
};

export default Layout;