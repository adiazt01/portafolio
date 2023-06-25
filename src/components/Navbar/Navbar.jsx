import "/src/style/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <p className="title">Programador A.D</p>
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
      </ul>
    </div>
  );
}

export default Navbar;
