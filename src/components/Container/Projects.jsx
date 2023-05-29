import Title from "../Title";
import ProjectCard from "../card/ProjectCard";
import "../styles/ProjectSection.css";

function Projects() {
  return (
    <section className="ProjectSection">
      <Title title={"Proyectos"} />
      <div className="ProjectSection__Container">
        <div className="ProjectSection__Container">
          <ProjectCard
            name={"Landing Page"}
            img={"landingPage.png"}
            git={"https://github.com/adiazt01/Landing-page"}
            info={
              "Este es un simple login realizado con HTML y CSS"
            }
            link={"https://adiazt01.github.io/Landing-page/"}
          />
          <ProjectCard
            name={"Frases aleatorias"}
            img={"frasesAleatorias.png"}
            git={"https://github.com/adiazt01/frases-aleatorias"}
            info={
              "En este proyecto se pone a prueba la obtencion de datos de una API en React para generar frases aleatorias."
            }
            link={"https://adiazt01.github.io/frases-aleatorias/"}
          />
          <ProjectCard
            name={"Login Menu"}
            img={"loginMenu.png"}
            git={"https://github.com/adiazt01/login-menu"}
            info={
              "En este proyecto se pone a prueba la obtencion de datos de una API en React para generar frases aleatorias."
            }
            link={"https://adiazt01.github.io/login-menu/"}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
