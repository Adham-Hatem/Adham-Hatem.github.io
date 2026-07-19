import ShuffleText from "./shuffleText";
import "../main.css";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

function Hero() {
  return (
    <div className="section hero" id="hero">
      <div className="heroText">
        <div className="heroName">Adham Hatem</div>
        <div className="heroRole">
          <ShuffleText
            words={[
              "Software Engineer",
              "Full Stack Developer",
              "React Developer",
              "Creative Technologist",
              "Problem Solver",
              "Frontend Developer",
              "Systems Builder",
              "AI Developer",
              "Software Developer",
              "Game Developer",
              "Backend Developer",
              "Computer Science Student",
            ]}
            typingSpeed={50}
            deletingSpeed={50}
            pauseAfterTyping={1500}
          />
        </div>

        <div className="description">
          Computer Science undergraduate who enjoys turning ideas into
          functional software. I build interactive applications, AI-driven
          projects, and creative experiences while continuously exploring new
          technologies and improving my craft.
        </div>
      </div>

      <div className="row">
        <button
          className="heroButtons clickable"
          onClick={() => scrollToSection("contact")}
        >
          <p>Contact Me</p>
        </button>
        <button
          className="heroButtons clickable"
          onClick={() => scrollToSection("projects")}
        >
          <p>View My Work</p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
