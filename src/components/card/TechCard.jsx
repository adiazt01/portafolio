import PropTypes from "prop-types";
import "/src/style/TechCard.scss";

function TechCard({ nombre, icono }) {
  return (
    <div className="TechCard">
      <img src={`img/tech/${icono}`} alt="" className="img" />
      <p className="title">{nombre}</p>
    </div>
  );
}

TechCard.propTypes = {
  nombre: PropTypes.string,
  icono: PropTypes.string,
};

export default TechCard;
