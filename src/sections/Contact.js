import React from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact-section">
            <h2 className="section-title">Contact Me</h2>

            <div className="contact-container">
                {/* Left Section - Contact Info */}
                <div className="contact-info">
                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <p>Email: payalkri1103@example.com</p>
                    </div>
                    <div className="contact-item">
                        <FaPhone className="icon" />
                        <p>Phone: xxxxxxxxx</p>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="icon" />
                        <p>Address: Jamshedpur , Jharkhand</p>
                    </div>
                </div>

                {/* Right Section - Social Media */}
                <div className="follow-me">
                    <h3>Follow Me</h3>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/payal-kumari-25a855241/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon linkedin" />
                        </a>
                        <a href="https://www.instagram.com/payalraj1103/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon instagram" />
                        </a>
                        <a href="https://github.com/1payal1" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon github" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


