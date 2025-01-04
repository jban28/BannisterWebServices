import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import arrProjectData from "../../config/projects.json";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        {arrProjectData.map((projectData) => (
          <ProjectCard key={projectData.id} data={projectData}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
