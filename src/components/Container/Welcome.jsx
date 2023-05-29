import "../styles/Welcome.css";

function Welcome() {
  return (
    <section className="WelcomeSection">
      <div className="WelcomeSection__info">
        <p className="WelcomeSection__info-title">Ey, soy Armando Diaz</p>
        <p className="WelcomeSection__info-rol">Un desarrollador Front-end</p>
        <p className="WelcomeSection__info-bio">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quae
          accusantium, placeat nostrum, sit doloremque perspiciatis ea odio
          voluptatibus at, assumenda ad enim. Nemo sequi molestiae quos aliquam
          ab ratione.
        </p>
        <button className="WelcomeSection__info-button">Descargar cv</button>
      </div>
      <img src="simplePc.svg" alt="Pc" className="welcomeSection-img" />
    </section>
  );
}

export default Welcome;
