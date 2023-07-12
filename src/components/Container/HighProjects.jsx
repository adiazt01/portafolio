import "/src/style/HighProjectSection.scss";
import { projectsHigh } from "../../utils/projects";
import HighProjectCard from "../card/HighProjectCard";

function HighProjects() {
  return (
    <section className="HighProjectSection" id="Projects">
      <h2>Proyectos</h2>
      <div className="HighProjectContainer">
        {projectsHigh.map((data, index) => {
          return <HighProjectCard key={index} data={data} position={index} />;
        })}
      </div>
    </section>
  );
}

export default HighProjects;
