import PropTypes from "prop-types";
import "../styles/ProjectCard.css";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { ProjectModal } from "../modal/ProjectModal.jsx";
function ProjectCard({ name, info, img, git, link }) {
  const [Modal, setModal] = useState(false);
  function handleModal() {
    setModal(!Modal);
  }

  return (
    <>
      <div className="ProjectCard">
        <img
          src={`img/projects/${img}`}
          alt=""
          className="ProjectCard-img"
        />
        <p className="ProjectCard-title">{name}</p>
        <button className="ProjectCard-button" onClick={handleModal}>
          Mas info <MdSearch className="ProjectCard-button-icon" />
        </button>
      </div>
      {Modal ? (
        <ProjectModal
          name={name}
          info={info}
          img={img}
          git={git}
          link={link}
          modalBool={Modal}
          handleModal={handleModal}
        />
      ) : null}
    </>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.string,
  git: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;
