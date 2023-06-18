import "/src/style/Navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoContainer"><p className="title">Programador A.D</p></div>
      <ul className="linksContainer">
        <li
          className="item"
          style={{ animationDuration: "1s" }}
        >
          <a href="#Welcome" className="link">
            Sobre mi
          </a>
        </li>
        <li
          className="item"
          style={{ animationDuration: "1.1s" }}
        >
          <a href="#Tech" className="link">
            Tecnologias
          </a>
        </li>
        <li
          className="item"
          style={{ animationDuration: "1.2s" }}
        >
          <a href="#Projects" className="link">
            Proyectos
          </a>
        </li>
        <li
          className="item"
          style={{ animationDuration: "1.3s" }}
        >
          <a href="#Contacts" className="link">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
