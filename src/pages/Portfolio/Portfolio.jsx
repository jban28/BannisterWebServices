import Project from "../../components/Project/Project.jsx";
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
          <Project key={projectData.id} data={projectData}></Project>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
