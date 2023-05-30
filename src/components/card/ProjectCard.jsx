import PropTypes from "prop-types";
import "../styles/ProjectCard.css";
import { MdSearch } from "react-icons/md";
function ProjectCard({ data, setModal, position }) {
  return (
    <>
      <div className="ProjectCard">
        <img
          src={`img/projects/${data.img}`}
          alt=""
          className="ProjectCard-img"
        />
        <p className="ProjectCard-title">{data.name}</p>
        <button
          className="ProjectCard-button"
          onClick={() => setModal(position)}
        >
          Mas info <MdSearch className="ProjectCard-button-icon" />
        </button>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.object,
  setModal: PropTypes.func,
  position: PropTypes.any,
};

export default ProjectCard;
