import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useRef, useState} from "react";
import { useLocation } from "react-router-dom";


const Navigation = (props) => {
  const routerLocation = useLocation()
  const [bgOpacity, setBgOpacity] = useState("00");
  const navbarRef = useRef();

  let handleScroll = () => {
    let navbarMaxTopValue = Math.min(window.innerHeight - navbarRef.current.getBoundingClientRect().height - 24, window.innerWidth);
    let navbarCurrentTopValue = navbarRef.current.getBoundingClientRect().top;
    let bgOpacityDecimal = Math.round(255 * Math.min((1 - (navbarCurrentTopValue / navbarMaxTopValue)), 1))
    if (bgOpacityDecimal < 16) {setBgOpacity("0" + bgOpacityDecimal.toString(16))}
    else {setBgOpacity(bgOpacityDecimal.toString(16))}
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll();
    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navbarRef])

  return(
    <Navbar id="navbar" sticky="top" className={"justify-content-center " + props.transition} ref={navbarRef} style={{backgroundColor: '#ff2a00' + bgOpacity}}>
      <Nav justify variant="underline">
        <Nav.Item>
          <Nav.Link active={routerLocation.pathname === "/"} href="/#navbar">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={routerLocation.pathname === "/portfolio"} href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://blog.bannisterwebservices.co.uk">Blog</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
};

export default Navigation;