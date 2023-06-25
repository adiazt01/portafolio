import PropTypes from "prop-types";
import { MdClose, MdLink } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import "/src/style/ProjectModal.scss";

export function ProjectModal({ data, setModal }) {
  const { name, info, img, git, link, techs } = data;

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
          <div className="ProjectModal__containerInfo">
            <h4 className="ProjectModal__container-title">{name}</h4>
            <div className="ProjectModal__containerInfo-containerTech">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="ProjectModal__containerInfo-containerTech-tech"
                >
                  <p>{tech}</p>
                </div>
              ))}
            </div>
            <p className="ProjectModal__container-info">{info}</p>
            <div className="ProjectModal__container__linksContainer">
              <a
                href={git}
                target="_blank"
                rel="noreferrer"
                className="ProjectModal__container__linksContainer-button"
              >
                Respositorio
                <GoMarkGithub className="ProjectModal__container__linksContainer-icon" />
              </a>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="ProjectModal__container__linksContainer-button"
              >
                Demo
                <MdLink className="ProjectModal__container__linksContainer-link" />
              </a>
            </div>
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
