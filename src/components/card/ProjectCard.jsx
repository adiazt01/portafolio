import PropTypes from "prop-types";
import { MdSearch } from "react-icons/md";
import "/src/style/ProjectCard.scss";

function ProjectCard({ data, setModal, position }) {
  return (
    <>
      <div className="ProjectCard">
        <img
          src={`img/projects/${data.img}`}
          alt=""
          className="ProjectCard_img"
        />
        <p className="ProjectCard_title">{data.name}</p>
        <button
          className="ProjectCard_button"
          onClick={() => setModal(position)}
        >
          Mas info <MdSearch className="ProjectCard_button_icon" />
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
