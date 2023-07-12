import PropTypes from "prop-types";
import "/src/style/ProjectHighCard.scss";
import { GoMarkGithub } from "react-icons/go";
import { MdLink } from "react-icons/md";

function HighProjectCard({ data }) {
  return (
    <div className="ProjectHighCard">
      <img
        src={`img/highProjects/${data.img}`}
        alt=""
        className="ProjectHighCard_imgContainer_img"
      />
      <div className="ProjectHighCard_infoContainer">
        <p className="ProjectHighCard_title">{data.name}</p>
        <div className="ProjectHighCard_containerTech">
          {data.techs.map((tech, index) => (
            <div key={index} className="ProjectHighCard_containerTech_tech">
              <p>{tech}</p>
            </div>
          ))}
        </div>
        <p className="ProjectHighCard_info">{data.info}</p>
        <div className="ProjectHighCard__container__linksContainer">
          <a
            href={data.git}
            target="_blank"
            rel="noreferrer"
            className="ProjectHighCard__container__linksContainer-button"
          >
            Respositorio
            <GoMarkGithub className="ProjectHighCard__container__linksContainer-icon" />
          </a>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="ProjectHighCard__container__linksContainer-button"
          >
            Demo
            <MdLink className="ProjectHighCard__container__linksContainer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

HighProjectCard.propTypes = {
  data: PropTypes.object,
  setModal: PropTypes.func,
  position: PropTypes.any,
};

export default HighProjectCard;
