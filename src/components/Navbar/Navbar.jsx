import "../styles/Navbar.css";
import {
  MdAccountCircle,
  MdOutlineComputer,
  MdFolder,
  MdContacts,
} from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logoContainer"><p className="navbar__logoContainer-title">Programador A.D</p></div>
      <ul className="navbar__linksContainer">
        <li
          className="navbar__linksContainer-item"
          style={{ animationDuration: "1s" }}
        >
          <a href="" className="navbar__linksContainer-link">
            <MdAccountCircle className="navbar__linksContainer-icon" />
            Sobre mi
          </a>
        </li>
        <li
          className="navbar__linksContainer-item"
          style={{ animationDuration: "1.1s" }}
        >
          <a href="" className="navbar__linksContainer-link">
            <MdOutlineComputer className="navbar__linksContainer-icon" />
            Tecnologias
          </a>
        </li>
        <li
          className="navbar__linksContainer-item"
          style={{ animationDuration: "1.2s" }}
        >
          <a href="" className="navbar__linksContainer-link">
            <MdFolder className="navbar__linksContainer-icon" />
            Proyectos
          </a>
        </li>
        <li
          className="navbar__linksContainer-item"
          style={{ animationDuration: "1.3s" }}
        >
          <a href="" className="navbar__linksContainer-link">
            <MdContacts className="navbar__linksContainer-icon" />
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
