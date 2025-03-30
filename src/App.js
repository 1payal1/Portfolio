import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Aboutme from "./sections/Aboutme";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  // Create references for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <BrowserRouter basename="/Portfolio">
      <div className="app-container">
        {/* Navbar with scrolling functionality */}
        <Navbar
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          educationRef={educationRef}
          certificationsRef={certificationsRef}
          contactRef={contactRef}
        />

        {/* Main Content */}
        <main>
          <section ref={aboutRef}>
            <Aboutme />
          </section>

          <section ref={educationRef}>
            <Education />
          </section>

          <section ref={skillsRef}>
            <Skills />
          </section>

          <section ref={projectsRef}>
            <Projects />
          </section>

          <section ref={certificationsRef}>
            <Certifications />
          </section>

          <section ref={contactRef} className="contact-info">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

