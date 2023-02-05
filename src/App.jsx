import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mainDiv">
        <section>
          <Navbar />
        </section>
        <section>
          <HeroSec />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
