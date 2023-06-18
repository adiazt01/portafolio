import { MdWhatsapp, MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <footer className="ContactSection" id="Contact">
        <h2 className="ContactSection-title">Contactame</h2>
        <div className="ContactSection__containerLink">
          <a
            href="tel:+584249070131"
            className="ContactSection__containerLink-link"
          >
            <MdWhatsapp />
          </a>
          <a href="mailto:armandodt2004@gmail.com">
            <MdEmail className="ContactSection__containerLink-link" />
          </a>
          </div>
      </footer>
    </>
  );
}

export default Contact;
