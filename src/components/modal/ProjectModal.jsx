import PropTypes from "prop-types";
import { MdClose, MdLink } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import "/src/style/ProjectModal.scss"

export function ProjectModal({ data, setModal }) {
  const { name, info, img, git, link } = data;

  const modalToogle = () => {
    setModal(false);
  };

  return (
    <>
      <div className="ProjectModal">
        <div className="ProjectModal__container">
          <button
            onClick={modalToogle}
            className="ProjectModal__container-buttonQuit"
          >
            <MdClose className="ProjectModal__container-buttonQuit-icon" />
          </button>
          <img
            src={`img/projects/${img}`}
            alt=""
            className="ProjectModal__container-img"
          />
          <h4 className="ProjectModal__container-title">{name}</h4>
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
    </>
  );
}

ProjectModal.propTypes = {
  data: PropTypes.any,
  setModal: PropTypes.func,
};
