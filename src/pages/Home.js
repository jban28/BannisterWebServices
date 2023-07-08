import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container fluid>
      <div className="content-box text-center">
        <h1 className="bold content">Welcome to Bannister Web Services</h1>
        <p className="content">I am James Bannister, an aspiring developer. I established Bannister Web Services as a way for me to develop my programming skills and showcase my work. I provide free web and software development services on a casual basis and will consider taking on any project that I think I am capable of completing.</p>
        <p className="content">Need a customised website or software solution on a budget?</p>
        <Button>Enquire about your project now</Button>
        <p className="content">Want to see the work I've done before?</p>
        <Button>View my portfolio</Button>
      </div>
    </Container>
  )
};

export default Home;