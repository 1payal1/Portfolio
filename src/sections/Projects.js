import React from "react";
import "./Projects.css";
import portfolioImg from "../assets/portfolioImg.png";
import schoolImg from "../assets/schoolImg.png";
import doctorAppImg from "../assets/doctorAppImg.png";

const Projects = () => {
    const projectData = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website showcasing projects, skills, and contact information.",
            technologies: ["React", "CSS",],
            year: "2024",
            image: portfolioImg,
        },
        {
            title: "Doctor's Appointment System",
            description:
                "A full-stack application to book doctor appointments, check availability, and get real-time notifications.",
            technologies: ["React", "MongoDB", "Node Js", "Express JS"],
            year: "2024",
            image: doctorAppImg,
        },
        {
            title: "School Website",
            description:
                "Developed a responsive school website with an admission portal, online notice board, and student dashboard.",
            technologies: ["HTML", "CSS", "JavaScript"],
            year: "2023",
            image: schoolImg,
        },
    ];

    return (
        <section className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="year">{project.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
