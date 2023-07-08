import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Project from "../components/Project"

const Home = () => {
  return (
    <Container fluid>

      <div id="background" className="content-box text-center">
        <h1 className="bold content">Welcome to Bannister Web Services</h1>
        <p className="content">I am James Bannister, an aspiring developer. I established Bannister Web Services as a way for me to develop my programming skills and showcase my work. I provide free web and software development services on a casual basis and will consider taking on any project that I think I am capable of completing.</p>
        <p className="content">Need a customised website or software solution on a budget?</p>
        <Button>Enquire about your project now</Button>
      </div>
      <div className="content-box text-center primary-bg">
        <h1>Portfolio</h1>
      </div>
      <div className="content-box text-center">
        <Project></Project>
      </div>

    </Container>
  )
};

export default Home;