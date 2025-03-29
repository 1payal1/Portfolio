import React, { useRef } from "react";
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
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
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


      {/* About Me Section - Now uses the AboutMe component */}
      <div ref={aboutRef}>
        <Aboutme />
      </div>

      <section ref={educationRef}>
        <Education />
      </section>


      <section ref={skillsRef} className="section">
        < Skills />
      </section>

      <section ref={projectsRef} className="section">
        <Projects />
      </section>


      <section ref={certificationsRef} className="section">
        <Certifications />

      </section>

      <section ref={contactRef} className="section contact-info">
        <Contact />
      </section>
      <div>
        {/* Other components */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
