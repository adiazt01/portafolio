import { SwitchTheme } from "../switchTheme";
import "/src/style/Navbar.scss";

function Navbar({ toggleTheme, theme }) {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <h1>Armando D.T</h1>
      </div>
      <ul className="linksContainer">
        <li className="item">
          <a href="#Welcome" className="link">
            Biografía
          </a>
        </li>
        <li className="item">
          <a href="#Projects" className="link">
            Proyectos
          </a>
        </li>
        <li className="item">
          <a href="#Contacts" className="link">
            Contacto
          </a>
        </li>
        <li className="item">
          <SwitchTheme toggleTheme={toggleTheme} theme={theme} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
