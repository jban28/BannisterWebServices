import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import arrProjectData from "../../config/projects.json";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        {arrProjectData.map((projectData) => (
          <ProjectCard key={projectData.id} data={projectData}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
