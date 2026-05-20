import { Link } from "react-router-dom";
import silhouetteIcon from "../assets/silhouette.svg";
import "../main.css";

function About() {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <img src={silhouetteIcon} alt="silhouette" />

        <div className="aboutText">
          <div className="aboutTitle">
            <h4>About me</h4>
          </div>
          <div className="aboutDescription">
            <p>
              I'm a passionate developer with experience in building responsive
              web applications using modern technologies like React and Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
