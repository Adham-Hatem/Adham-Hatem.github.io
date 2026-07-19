import { AccentContext } from "../context/AccentContext";
import { useContext, useState, useEffect } from "react";
import cvFile from "../assets/Adham_Hatem_Gomaa_Resume.pdf";
import listIcon from "../assets/list-icon.svg";
import { scrollToSection } from "../utils/scrollToSection";
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
          <p
            className="navbarTab clickable"
            onClick={() => scrollToSection("hero")}
          >
            HERO
          </p>
          <p
            className="navbarTab clickable"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </p>
          <p
            className="navbarTab clickable"
            onClick={() => scrollToSection("projects")}
          >
            PROJECTS
          </p>
          <p
            className="navbarTab clickable"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </p>
        </div>

        <a className="downloadCvBtn" href={cvFile} download>
          Download CV
        </a>
      </nav>

      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />

          <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
            <a
              className="clickable"
              onClick={() => setMenuOpen(false) & scrollToSection("hero")}
            >
              HOME
            </a>
            <a
              className="clickable"
              onClick={() => setMenuOpen(false) & scrollToSection("about")}
            >
              ABOUT
            </a>
            <a
              className="clickable"
              onClick={() => setMenuOpen(false) & scrollToSection("projects")}
            >
              PROJECTS
            </a>
            <a
              className="clickable"
              onClick={() => setMenuOpen(false) & scrollToSection("contact")}
            >
              CONTACT
            </a>

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
