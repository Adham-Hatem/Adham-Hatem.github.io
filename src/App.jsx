import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import WindowCat from "./components/windowCat";
import AccentPopEffect from "./hooks/AccentPopEffect";
import { AccentProvider } from "./context/AccentContext";
import { CatTypeProvider } from "./context/CatTypeContext";
import { CloudProvider } from "./context/cloudContext";
import { MoonProvider } from "./context/moonContext";

function App() {
  return (
    <AccentProvider>
      <Router>
        <div className="pageWrapper">
          <AccentPopEffect />
          <Navbar />
          <main className="mainContent">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/WindowCat"
                element={
                  <CatTypeProvider>
                    <CloudProvider>
                      <MoonProvider>
                        <WindowCat />
                      </MoonProvider>
                    </CloudProvider>
                  </CatTypeProvider>
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </Router>
    </AccentProvider>
  );
}

export default App;
