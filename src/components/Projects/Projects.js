import React, { useEffect } from "react";
import { Container, Button as BSButton } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Projects() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => revealObserver.observe(reveal));
    return () => revealObserver.disconnect();
  }, []);

  const projects = [
    {
      title: "MERN Bookstore",
      description: "Full-stack e-commerce bookstore with RESTful APIs, JWT authentication, and Admin Dashboard.",
      link: "https://github.com/Gangasatish/BOOK-STORE-APPLICATION-USING-MERN.git",
    },
    {
      title: "Student Marks Analyzer",
      description: "Console-based system using C++ and core data structures for academic data processing.",
      link: "https://github.com/Gangasatish",
    },
    {
      title: "Process & Memory Simulator",
      description: "System-level OS modules focused on process management and memory systems in C.",
      link: "https://github.com/Gangasatish",
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="light-mode-decorations">
          {/* Top Left: Bunting */}
          <div className="deco-shape deco-bunting bunting-1">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="deco-flag" />)}
          </div>

          {/* Top Right: Abstract Blob */}
          <div className="deco-shape deco-abstract-blob blob-3"></div>

          {/* Bottom Left: Step Line */}
          <svg className="deco-shape step-1" width="100" height="100" viewBox="0 0 100 100">
            <path d="M10,90 L40,90 L40,60 L70,60 L70,30" stroke="#2980b9" strokeWidth="4" fill="none" />
          </svg>

          {/* Scattered Circles */}
          <div className="deco-shape circle-red"></div>
          <div className="deco-shape circle-blue"></div>
          
          <div className="deco-blob blob-1"></div>
          <div className="deco-blob blob-2"></div>
      </div>
      <Container className="project-content">
        <h1 className="project-heading reveal">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="reveal" style={{ color: "var(--text-color)", opacity: 0.8, textAlign: "center", marginBottom: "3rem" }}>
          Explore the projects that define my technical journey.
        </p>
        
        <div className="grid-preview">
          {projects.map((project, i) => (
            <div key={i} className="card-glass reveal">
              <div style={{ height: "150px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <AiOutlineFundProjectionScreen size={50} className="purple" />
              </div>
              <h3 style={{ color: "var(--text-color)" }}>{project.title}</h3>
              <p style={{ fontSize: "0.9em", color: "var(--text-color)", opacity: 0.9 }}>{project.description}</p>
              <div className="d-flex gap-2">
                <BSButton href={project.link} target="_blank" variant="primary" size="sm">Details</BSButton>
                <BSButton href={project.link} target="_blank" variant="outline-primary" size="sm">Live</BSButton>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
