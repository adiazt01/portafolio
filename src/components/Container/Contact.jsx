import { MdWhatsapp, MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "/src/style/Contact.scss";

function Contact() {
  return (
    <>
      <footer className="ContactSection" id="Contact">
        <h2 className="ContactSection-title">Contacto</h2>
        <p className="ContactSection-p">Trabajemos juntos! 💻</p>
        <div className="ContactSection__containerLink">
          <a
            href="tel:+584249070131"
            className="ContactSection__containerLink-link"
            target="_blank"
            rel="noreferrer"
          >
            <MdWhatsapp />
          </a>
          <a
            href="mailto:armandodt2004@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail className="ContactSection__containerLink-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/armando-diaz-291385251/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="ContactSection__containerLink-link" />
          </a>
          <a
            href="https://github.com/adiazt01"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="ContactSection__containerLink-link" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
