import { useState } from "react";
import ProjectCard from "../card/ProjectCard";
import { ProjectModal } from "../modal/ProjectModal";
import "/src/style/ProjectSection.scss";
import { projects } from "../../utils/projects";

function Projects() {
  const [modal, setModal] = useState(false);

  return (
    <section className="ProjectSection" id="Projects">
      <h2>Pequeños proyectos</h2>
      {modal !== false ? (
        <ProjectModal data={projects[modal]} setModal={setModal} />
      ) : null}

      <div className="ProjectContainer">
        {projects.map((data, index) => {
          return (
            <ProjectCard
              key={index}
              data={data}
              setModal={setModal}
              position={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
