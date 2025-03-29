import React from "react";
import { FaPython, FaHtml5, FaReact, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiCplusplus } from "react-icons/si";
import "../sections/Skills.css";

const technologies = [
    { name: "Python", icon: <FaPython />, level: "Proficient" },
    { name: "C++", icon: <SiCplusplus />, level: "Intermediate" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Intermediate" },
    { name: "HTML", icon: <FaHtml5 />, level: "Proficient" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Proficient" },
    { name: "ReactJS", icon: <FaReact />, level: "Intermediate" },
    { name: "SQL", icon: <FaDatabase />, level: "Proficient" }
];

const Skills = () => {
    return (
        <section className="technology-section">
            <h2 className="technology-heading">Technologies</h2>
            <div className="technology-container">
                {technologies.map((tech, index) => (
                    <div key={index} className="technology-card">
                        <div className="icon">{tech.icon}</div>
                        <h3>{tech.name}</h3>
                        <p className={`level ${tech.level.toLowerCase()}`}>{tech.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;


