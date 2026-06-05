import { AccentContext } from "../context/AccentContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import cvFile from "../assets/cv.pdf";
import "../main.css";

function Navbar() {
  const { cycle } = useContext(AccentContext);

  return (
    <nav className="nav">
      <div className="left brand" onClick={cycle}>
        <h1 className="clickable">Portofolio</h1>
      </div>

      <div className="empty"></div>

      <div className="center">
        <Link to="/">
          <p className="navbarTab">HOME</p>
        </Link>
        <Link to="/about">
          <p className="navbarTab">ABOUT</p>
        </Link>
        <Link to="/projects">
          <p className="navbarTab">PROJECTS</p>
        </Link>
        <Link to="/contact">
          <p className="navbarTab">CONTACT</p>
        </Link>
      </div>

      <div className="empty"></div>

      <a className="downloadCvBtn" href={cvFile} download>
        Download CV
      </a>
    </nav>
  );
}

export default Navbar;
