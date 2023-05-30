import { useState } from "react";
import Title from "../Title";
import ProjectCard from "../card/ProjectCard";
import "../styles/ProjectSection.css";

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
    <section className="ProjectSection">
      <Title title={"Proyectos"} />
      {/* Codigo modal html */}
      {console.log(modal !== false ? projects[modal] : modal)}
      {/*
        EJEMPLO
      {Modal && (
        <ProjectModal
          name={name}
          info={info}
          img={img}
          git={git}
          link={link}
          modalBool={Modal}
          handleModal={handleModal}
          position={modal}
        />
      )}
        */}
      {/*<ProjectModal data={modal !== false ? projects[modal] : modal} setModal={setModal} />*/}
      <div className="ProjectSection__Container">
        <div className="ProjectSection__Container">
          {projects.map((data, index) => {
            return (
              <>
                <ProjectCard data={data} setModal={setModal} position={index} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
