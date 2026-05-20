import { Link } from "react-router-dom";
import mailIcon from "../assets/mail-Icon.svg";
import whatsappIcon from "../assets/whatsapp-Icon.svg";
import linkedinIcon from "../assets/linkedin-Icon.svg";
import "../main.css";

function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div className="contactContainer">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me through any of the following platforms:
        </p>

        <div className="iconRow">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adhamhatemgomaa@gmail.com" target="_blank">
            <img src={mailIcon} alt="Email" className="icon" />
          </a>
          <a href="https://wa.me/+201028675020" target="_blank">
            <img src={whatsappIcon} alt="WhatsApp" className="icon" />
          </a>
          <a href="https://linkedin.com/in/adham-hatem-94bb99343/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
