import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"

const Project = () => {
  return (
    <Card className="content">
      <Card.Img variant="top" src="/matt-pagett.png"></Card.Img>
      <Card.Title>www.mattpagett.co.uk</Card.Title>
      <Card.Subtitle>Art portfolio website and content management system</Card.Subtitle>
      <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <div className="nav-link selector">Summary</div>
          </Nav.Item>
          <Nav.Item>
            <div className="nav-link selector">Technical Details</div>
          </Nav.Item>
        </Nav>
    </Card>
  )
};

export default Project;