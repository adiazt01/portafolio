import PropTypes from "prop-types";
import "../styles/ProjectCard.css";
import { MdSearch } from "react-icons/md";

function ProjectCard({ name, img, Modal, toggleModal, ModalInfo }) {

  const handleModal = () => {
    toggleModal(!Modal)
    handleModalInfo()
  }

  const handleModalInfo = () => {
    ModalInfo({
      name: name,
      img: img
    })
  }


  return (
    <>
      <div className="ProjectCard">
        <img
          src={`/public/projects/${img}`}
          alt=""
          className="ProjectCard-img"
        />
        <p className="ProjectCard-title">{name}</p>
        <button className="ProjectCard-button" onClick={handleModal}>
          Mas info <MdSearch className="ProjectCard-button-icon" />
        </button>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  Modal: PropTypes.bool,
  toggleModal: PropTypes.func,
  ModalInfo: PropTypes.func
};

export default ProjectCard;
