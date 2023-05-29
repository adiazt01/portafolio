import TechCard from "../card/TechCard";
import "../styles/Technology.css";
import Title from "../Title";

function Technology() {
  return (
    <section className="TechSection">
      <Title title={"Tecnologias"} />
      <div className="TechSection__Container">
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
