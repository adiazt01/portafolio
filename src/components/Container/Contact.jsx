import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "/src/style/Contact.scss";

function Contact() {
  return (
    <>
      <section className="ContactSection" id="Contact">
        <h2>Contacto</h2>
        <div className="ContactSection__containerContact">
          <a
            href="https://www.linkedin.com/in/armando-diaz-291385251/"
            className="ContactSection__containerContact-card"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="ContactSection__containerContact-card-icon" />
            <p className="ContactSection__containerContact-card-link">
              Armando Diaz
            </p>
          </a>
          <a
            className="ContactSection__containerContact-card"
            href="https://github.com/adiazt01"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="ContactSection__containerContact-card-icon" />
            <p className="ContactSection__containerContact-card-link">
              Adiaz01
            </p>
          </a>
          <a
            href="mailto:armandodt2004@gmail.com"
            className="ContactSection__containerContact-card"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail className="ContactSection__containerContact-card-icon" />
            <p className="ContactSection__containerContact-card-link">
              armandodt2004@gmail.com
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
