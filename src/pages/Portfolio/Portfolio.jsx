import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import arrProjectData from "../../config/projects.json";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Navigation transition="fade-in" />
      <div className="portfolio">
        {arrProjectData.map((projectData, index) => (
          <ProjectCard key={projectData.id} data={projectData}></ProjectCard>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
