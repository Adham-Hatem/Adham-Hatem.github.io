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
import Background from "./components/Background";

function App() {
  return (
    <AccentProvider>
      <div className="pageWrapper">
        <Background />
        <AccentPopEffect />
        <Navbar />
        <main className="mainContent">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>

      <Footer />
    </AccentProvider>
  );
}

export default App;
