import ShuffleText from "./shuffleText";
import "../main.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
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
              "Web Engineer",
              "Application Architect",
              "Solution Architect",
              "UI Engineer",
              "Tech Enthusiast",
              "Systems Engineer",
              "Digital Craftsman",
              "Software Craftsman",
            ]}
            typingSpeed={50}
            deletingSpeed={50}
            pauseAfterTyping={1500}
          />
        </div>

        <div className="description">
          Computer Science undergraduate passionate about software development
          and building creative projects working with Java, Python, and
          JavaScript. Currently exploring web development with React and
          Node.js.
        </div>

        <Link className="hireMeBtn" to="/contact">
          <p>Hire Me</p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
