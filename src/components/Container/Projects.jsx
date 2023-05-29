import { useState } from "react";
import Title from "../Title";
import ProjectCard from "../card/ProjectCard";
import "../styles/ProjectSection.css";
import ProjectModal from "../modal/ProjectModal";

function Projects() {
  const [Modal, setModal] = useState(false);
  const [ModalInfo, setModalInfo] = useState({ name: "", img: "" });

  const HandleModalInfo = (info) => {
    setModalInfo(info);
  };

  const toggleModal = (bool) => {
    setModal(bool);
  };

  return (
    <section className="ProjectSection">
      <Title title={"Proyectos"} />
      <div className="ProjectSection__Container">
        <ProjectCard
          name={"Login Menu"}
          img={"loginMenu.png"}
          Modal={Modal}
          toggleModal={toggleModal}
          ModalInfo={HandleModalInfo}
        />
        <ProjectCard
          name={"Holii"}
          img={"loginMenu.png"}
          Modal={Modal}
          toggleModal={toggleModal}
          ModalInfo={HandleModalInfo}
        />
        <ProjectCard
          name={"Holii"}
          img={"loginMenu.png"}
          Modal={Modal}
          toggleModal={toggleModal}
          ModalInfo={HandleModalInfo}
        />
        <ProjectCard
          name={"Holii"}
          img={"loginMenu.png"}
          Modal={Modal}
          toggleModal={toggleModal}
          ModalInfo={HandleModalInfo}
        />
        <ProjectCard
          name={"Holii"}
          img={"loginMenu.png"}
          Modal={Modal}
          toggleModal={toggleModal}
          ModalInfo={HandleModalInfo}
        />
        <ProjectCard
          name={"Holii"}
          img={"loginMenu.png"}
          Modal={Modal}
          toggleModal={toggleModal}
          ModalInfo={HandleModalInfo}
        />
      </div>
      {Modal ? <ProjectModal info={ModalInfo} Modal={Modal} toggleModal={toggleModal}/> : null}
    </section>
  );
}

export default Projects;
