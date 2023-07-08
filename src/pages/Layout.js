import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"

const Layout = () => {
  return (
    <>
      <div className="content-box text-center primary-bg">
        <img src="/bannister-web-services-logo.png" alt="logo" width="200px" className="logo"/>
      </div>
      <Navbar className="justify-content-center primary-bg bold" sticky="top">
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blogs">About/CV</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Enquire</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;