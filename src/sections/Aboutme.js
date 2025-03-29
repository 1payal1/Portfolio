import React from "react";
import "./Aboutme.css"; // Import CSS file
import myPhoto from "../assets/Payal Coat white.jpg"; // Add your image in the assets folder

function Aboutme() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* Left Side - Image */}
                <div className="about-image">
                    <img src={myPhoto} alt="Payal Kumari" />
                </div>

                {/* Right Side - Text Content */}
                <div className="about-content">
                    <h1><u>About Me</u></h1>
                    <h2><strong>Hello! I am Payal Kumari</strong></h2>
                    <p> I am a passionate developer with a strong interest in
                        web technologies and software development. I love building user-friendly applications
                        and solving real-world problems through coding. Currently, I am enhancing my skills in
                        React.js and modern web development technologies.
                    </p>
                    <p>
                        My goal is to create innovative and efficient solutions while continuously learning
                        and growing in the tech industry. I am eager to explore new challenges and contribute
                        to exciting projects.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;

