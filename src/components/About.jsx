import silhouetteIcon from "../assets/silhouette.svg";
import "../main.css";

function About() {
  return (
    <section id="about" className="section aboutSection">
      <div className="aboutContainer">
        <img src={silhouetteIcon} alt="silhouette" />

        <div className="aboutText">
          <div className="aboutTitle">
            <h4>About me</h4>
          </div>
          
          <div className="aboutDescription">
            <p>
              I'm a passionate developer who enjoys turning ideas into
              functional software and solving challenging problems through code.
            </p>

            <p>
              My experience spans web development, artificial intelligence, game
              development, and software engineering. I enjoy exploring how
              systems work, whether it's creating interactive React
              applications, developing AI algorithms, or designing gameplay
              mechanics.
            </p>

            <p>
              I believe the best way to improve as a developer is by constantly
              building, experimenting, and learning through real projects. Every
              project is an opportunity to explore new technologies and create
              something meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
