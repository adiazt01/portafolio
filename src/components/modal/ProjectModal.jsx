import PropTypes from "prop-types";
import "../styles/ProjectModal.css";
import { MdClose, MdLink } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

export function ProjectModal({
  name,
  info,
  img,
  git,
  link,
  modalBool,
  handleModal,
}) {
  const modalToogle = () => {

    handleModal(!modalBool);
  };

  return (
    <div className="ProjectModal">
      <div className="ProjectModal__container">
        <button
          onClick={modalToogle}
          className="ProjectModal__container-buttonQuit"
        >
          <MdClose className="ProjectModal__container-buttonQuit-icon" />
        </button>
        <p className="ProjectModal__container-title">{name}</p>
        <img
          src={`/public/projects/${img}`}
          alt=""
          className="ProjectModal__container-img"
        />
        <p className="ProjectModal__container-info">{info}</p>
        <div className="ProjectModal__container__linksContainer">
          <a href={git}>
            <GoMarkGithub className="ProjectModal__container__linksContainer-link" />
          </a>
          <a href={link}>
            <MdLink className="ProjectModal__container__linksContainer-link" />
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.string,
  git: PropTypes.string,
  link: PropTypes.string,
  modalBool: PropTypes.bool,
  handleModal: PropTypes.func,
};
