import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Education() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((reveal) => revealObserver.observe(reveal));
    return () => revealObserver.disconnect();
  }, []);

  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      grade: "CGPA: 7.8",
      duration: "Aug’ 23 - Present",
    },
    {
      institution: "Sri Chaitanya Junior College",
      location: "Vijayawada, Andhra Pradesh",
      degree: "Intermediate",
      grade: "Percentage: 94.8%",
      duration: "Jun’ 21 – Jun’ 23",
    },
    {
      institution: "Sri Chaitanya Techno School",
      location: "Proddatur, Andhra Pradesh",
      degree: "SSC",
      grade: "Percentage: 99%",
      duration: "Jun’ 20 – Jun’ 21",
    },
  ];

  return (
    <section>
      <Container fluid className="project-section">
        <Particle />
        <div className="light-mode-decorations">

          <div className="deco-shape deco-abstract-blob blob-3"></div>
          <div className="deco-shape circle-red"></div>
          <div className="deco-shape circle-blue"></div>
          <div className="deco-blob blob-1"></div>
          <div className="deco-blob blob-2"></div>
        </div>
        <Container className="project-content">
          <h1 className="project-heading reveal">
            My <strong className="purple">Education</strong>
          </h1>
          <p
            className="reveal"
            style={{
              color: "var(--text-color)",
              opacity: 0.8,
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            My academic journey and milestones.
          </p>

          <div className="education-list">
            {educationData.map((edu, i) => (
              <div key={i} className="card-glass education-card reveal">
                <div className="edu-card-content">
                  <div className="edu-left">
                    <h2 className="edu-institution">{edu.institution}</h2>
                    <p className="edu-location">{edu.location}</p>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-grade">{edu.grade}</p>
                  </div>
                  <div className="edu-right">
                    <span className="edu-duration-badge">{edu.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Education;
