import React from "react";
import "./Education.css"; // Import CSS file

const Education = () => {
    return (
        <section className="education-section">
            <h2 className="education-title">Education</h2>
            <div className="education-container">
                {/* 10th Grade */}
                <div className="education-card">
                    <h3>High School</h3>
                    <p><strong>School:</strong> DAV Girls High School</p>
                    <p><strong>Batch:- </strong> 2017-2018 with 86% marks</p>
                </div>

                {/* 12th Grade */}
                <div className="education-card">
                    <h3>Intermediate</h3>
                    <p><strong>School:</strong> BSS Pranav Children World</p>
                    <p><strong>Batch:- </strong>2018-2020 with 79.4% marks</p>
                </div>

                {/* B.Tech */}
                <div className="education-card">
                    <h3>B.Tech in CSE</h3>
                    <p><strong>College:</strong> Raj Kumar Goel Institiue of Technology</p>
                    <p><strong>Batch:- </strong>2021-2025 with 80% marks</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
