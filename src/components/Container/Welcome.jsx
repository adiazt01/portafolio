import "/src/style/Welcome.scss";

function Welcome() {
  return (
    <section className="Welcome" id="Welcome">
      <div className="Welcomeinfo">
        <h3 className="title">Hola, me llamo Armando Diaz ✌</h3>
        <p className="rol">y soy desarrollador Front-end</p>
        <p className="bio">
          Con experencia en el desarrollo de aplicaciones y sitios web, Me
          apasiona el diseño web y la optimización del rendimiento. Estoy
          buscando oportunidades para seguir desenvolviendome en este campo para
          seguir creciendo de profesionalmente.
        </p>
        <button className="buttonCv">Descargar cv</button>
      </div>
      <img src="img/simplePc.png" alt="Pc" className="img" />
    </section>
  );
}

export default Welcome;
