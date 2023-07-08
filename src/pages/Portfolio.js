import Container from "react-bootstrap/Container";
import Project from "../components/Project";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Portfolio = () => {
  const projectList = [
    {
      title: "www.mattpagett.co.uk",
      subtitle: "Art portfolio website with content management system",
      description: [
        "point 1", 
        "point 2"
      ],
      technical: [
        "point A",
        "point B"
      ],
      imageFile: "/matt-pagett.png"
    },
    {
      title: "test",
      subtitle: "Art portfolio website with content management system",
      description: [
        "point 1", 
        "point 2"
      ],
      technical: [
        "point A",
        "point B"
      ],
      imageFile: "/matt-pagett.png"
    },
    {
      title: "www.mattpagett.co.uk",
      subtitle: "Art portfolio website with content management system",
      description: [
        "point 1", 
        "point 2"
      ],
      technical: [
        "point A",
        "point B"
      ],
      imageFile: "/matt-pagett.png"
    },
    {
      title: "test",
      subtitle: "Art portfolio website with content management system",
      description: [
        "point 1", 
        "point 2"
      ],
      technical: [
        "point A",
        "point B"
      ],
      imageFile: "/matt-pagett.png"
    }
  ]

  const perRow = 2;
  let col = 0;
  let currentRow = [];
  let projectListRows = [];

  console.log(projectList)
  projectList.forEach((item) => {
    col += 1;
    currentRow.push(item);
    if (col === perRow) {
      projectListRows.push(currentRow);
      currentRow = [];
      col = 0;
    }
  })

  return (
    <Container fluid>
      <div className="content-box text-center primary-bg">
        <h1>Portfolio</h1>
      </div>
      <div className="content-box text-center">
        {projectListRows.map(
          (projects) => (
            <Row>
            {projects.map(
              (project) => (
                <Col md>
                  <Project key={project.title} data={project}></Project>
                </Col>
              )
            )}
            </Row>
          )
       )}
      </div>
    </Container>
  )
};

export default Portfolio;