import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useRef, useState} from "react";
import { useLocation } from "react-router-dom";


const Navigation = () => {
  const [page, setPage] = useState(useLocation().pathname);
  const [bgOpacity, setBgOpacity] = useState("00");
  const navbarRef = useRef();

  let handleScroll = () => {
    let navbarMaxTopValue = window.innerHeight - navbarRef.current.getBoundingClientRect().height;
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
    <Navbar className="justify-content-center bold" sticky="top" ref={navbarRef} style={{backgroundColor: '#ff2a00' + bgOpacity}}>
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
  )
};

export default Navigation;