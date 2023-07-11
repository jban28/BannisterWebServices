import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container lg>
      <h1>Welcome to Bannister Web Services</h1>
      <p>I am James Bannister, an aspiring developer. I established Bannister Web Services as a way for me to develop my programming skills and showcase my work. I provide free web and software development services on a casual basis and will consider taking on any project that I think I am capable of completing.</p>
      <h2>Need a customised website or software solution on a budget?</h2>
      <p><Button>Enquire about your project now</Button></p>
      <h2>Want to see my existing work?</h2>
      <p><Button href="/portfolio">View my portfolio</Button></p>
    </Container>
  )
};

export default Home;