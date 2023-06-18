import TechCard from "../card/TechCard";
import "/src/style/Technology.scss";

function Technology() {
  return (
    <section className="TechSection" id="Tech">
      <h2>Tecnologias</h2>
      <div className="container">
        <TechCard nombre={'HTML'} icono={'html.png'}/>
        <TechCard nombre={'CSS3'} icono={'css.png'}/>
        <TechCard nombre={'Javascript'} icono={'javascript.png'}/>
        <TechCard nombre={'React'} icono={'react.png'}/>
        <TechCard nombre={'Git'} icono={'git.png'}/>
        <TechCard nombre={'GitHub'} icono={'github.png'}/>
      </div>
    </section>
  );
}

export default Technology;
