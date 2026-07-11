import { AccentContext } from "../context/AccentContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cvFile from "../assets/cv.pdf";
import listIcon from "../assets/list-icon.svg";
import "../main.css";

function Navbar() {
  const { cycle } = useContext(AccentContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1000) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="brand">
          <img
            className="list-icon clickable"
            src={listIcon}
            alt="List"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <h1 className="clickable" onClick={cycle}>
            Portofolio
          </h1>
        </div>
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

        <a className="downloadCvBtn" href={cvFile} download>
          Download CV
        </a>
      </nav>

      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />

          <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>

            <a href={cvFile} download>
              Download CV
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
