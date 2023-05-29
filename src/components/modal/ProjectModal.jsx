import PropTypes from "prop-types";
import "../styles/ProjectModal.css";
import { MdClose, MdLink } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

function ProjectModal({ info, Modal, toggleModal }) {
  const handleModal = () => {
    toggleModal(!Modal);
  };

  return (
    <div className="ProjectModal">
      <div className="ProjectModal__container">
        <button
          onClick={handleModal}
          className="ProjectModal__container-buttonQuit"
        >
          <MdClose className="ProjectModal__container-buttonQuit-icon"/>
        </button>
        <p className="ProjectModal__container-title">{info.name}</p>
        <img src={`/public/projects/${info.img}`} alt="" className="ProjectModal__container-img"/>
        <div className="ProjectModal__container__linksContainer">
          <a href=""><GoMarkGithub className="ProjectModal__container__linksContainer-link"/></a>
          <a href=""><MdLink className="ProjectModal__container__linksContainer-link"/></a>
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  info: PropTypes.object,
  Modal: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default ProjectModal;
