import PropTypes from "prop-types";
import "../styles/TechCard.css";

function TechCard({ nombre, icono }) {
  return (
    <div className="TechCard">
      <img src={`../public/${icono}`} alt="" className="TechCard-img" />
      <p className="TechCard-title">{nombre}</p>
    </div>
  );
}

TechCard.propTypes = {
  nombre: PropTypes.string,
  icono: PropTypes.string,
};

export default TechCard;
