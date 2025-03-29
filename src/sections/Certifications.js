import React from "react";
import "./Certifications.css";

const Certifications = () => {
    const certifications = [
        {
            title: "Certified in Leadership for Exercising Leadership",
            organization: "- By HarvardX",
            year: "2022",
        },
        {
            title: "Leadership & 21 Days Summer Internship",
            organization: "- By Netcamp Solutions Private Limited",
            year: "2023",
        },
        {
            title: "Certified in JavaScript",
            organization: "- By Infosys Springboard",
            year: "2024",
        },
    ];

    return (
        <section className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-container">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h3>{cert.title}</h3>
                        <p className="organization">{cert.organization}</p>
                        <p className="year">{cert.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
