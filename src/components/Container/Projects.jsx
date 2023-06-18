import { useState } from "react";
import ProjectCard from "../card/ProjectCard";
import { ProjectModal } from "../modal/ProjectModal";
import "/src/style/ProjectSection.scss";

const projects = [
  {
    name: "Landing Page",
    img: "landingPage.png",
    git: "https://github.com/adiazt01/Landing-page",
    info: "Este es un simple login realizado con HTML y CSS",
    link: "https://adiazt01.github.io/Landing-page/",
  },
  {
    name: "Frases aleatorias",
    img: "frasesAleatorias.png",
    git: "https://github.com/adiazt01/frases-aleatorias",
    info: "En este proyecto se pone a prueba la obtencion de datos de una API en React para generar frases aleatorias.",
    link: "https://adiazt01.github.io/frases-aleatorias/",
  },
  {
    name: "Login Menu",
    img: "loginMenu.png",
    git: "https://github.com/adiazt01/Landing-page",
    info: "Este es un simple login realizado con HTML y CSS",
    link: "https://adiazt01.github.io/login-menu/",
  },
];

function Projects() {
  const [modal, setModal] = useState(false);

  return (
    <section className="ProjectSection" id="Projects">
      <h2>Proyectos</h2>

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
