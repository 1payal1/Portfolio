import React from "react";
import "./Navbar.css"; // Import CSS file

function Navbar({ scrollToSection, aboutRef, educationRef, skillsRef, projectsRef, certificationsRef, contactRef }) {
    return (
        <nav className="navbar">
            {/* Left Side - Name */}
            <div className="navbar-name">PAYAL KUMARI</div>

            {/* Right Side - Navigation Links */}
            <div className="navbar-links">
                <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
                <button onClick={() => scrollToSection(educationRef)}>Education</button>
                <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
                <button onClick={() => scrollToSection(projectsRef)}>Project</button>
                <button onClick={() => scrollToSection(certificationsRef)}>Certification</button>
                <button onClick={() => scrollToSection(contactRef)}>Contact</button>
            </div>
        </nav>
    );
}

export default Navbar;


