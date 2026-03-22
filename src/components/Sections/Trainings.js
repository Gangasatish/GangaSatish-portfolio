import React, { useEffect } from "react";
import { Container, Button as BSButton } from "react-bootstrap";
import Particle from "../Particle";
import { PiCertificateFill } from "react-icons/pi";
import "./Trainings.css";

function Trainings() {
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

  const trainingsData = [
    {
      title: "Data Structures Using C++",
      provider: "Lovely Professional University",
      badge: "Summer Training 2025",
      duration: "Jun’ 25 – Jul’ 25",
      description: "Completed Summer training on Data Structures using C++, covering arrays, linked lists, stacks, queues, recursion, BST, and graphs.",
      highlights: [
        "Advanced multiple DSA-based programs through hands-on coding practice.",
        "Made mini-projects including the Students Marks Analyzer System and File Encryption/Decryption tool."
      ],
      certificate: "https://drive.google.com/file/d/1pYwY0WVpKXIv3yS7aMytcX081fE07fwz/view?usp=sharing"
    },
    {
      title: "MERN Stack Training",
      provider: "Pep Coding",
      badge: "Full-Stack Development",
      duration: "Completed",
      description: "Completed hands-on training in full-stack development using MongoDB, Express.js, React.js, and Node.js.",
      highlights: [
        "Built responsive UIs, REST APIs, and database-driven applications.",
        "Gained expertise in React Hooks, Redux, Express middleware, MongoDB aggregation, and full-stack integration."
      ],
      certificate: null
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      
      {/* Background Decorations */}
      <div className="trainings-decor">
        <div className="decor-blob blob-purple"></div>
        <div className="decor-blob blob-blue"></div>
      </div>

      <div className="light-mode-decorations">

          <div className="deco-shape deco-abstract-blob blob-3"></div>
          <div className="deco-shape circle-red"></div>
          <div className="deco-shape circle-blue"></div>
          <div className="deco-blob blob-1"></div>
          <div className="deco-blob blob-2"></div>
      </div>

      <Container className="trainings-container">
        <h1 className="project-heading reveal">
          Featured <strong className="purple">Training </strong>
        </h1>
        <p className="reveal" style={{ color: "var(--text-color)", opacity: 0.8, textAlign: "center", marginBottom: "4rem" }}>
          In-depth technical specialization and hands-on expertise.
        </p>

        <div className="trainings-cards-container">
          {trainingsData.map((training, index) => (
            <div key={index} className="featured-training-card reveal">
              <div className="training-header">
                <div className="training-icon-wrapper">
                  <PiCertificateFill />
                </div>
                <div className="training-badge">{training.badge}</div>
              </div>

              <div className="training-content">
                <h2 className="training-title">{training.title}</h2>
                <span className="training-provider">{training.provider}</span>
                <div className="edu-duration-badge" style={{ display: 'inline-block', marginBottom: '2rem' }}>
                  {training.duration}
                </div>

                <div className="training-description">
                  <p style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: "1.5rem" }}>
                    {training.description}
                  </p>
                  <ul className="training-list">
                    {training.highlights.map((highlight, idx) => (
                      <li key={idx} className="reveal" style={{ animationDelay: `${idx * 0.2}s` }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {training.certificate && (
                <div className="training-footer">
                  <BSButton
                    href={training.certificate}
                    target="_blank"
                    variant="primary"
                    className="view-cert-btn"
                  >
                    View Full Certificate
                  </BSButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Trainings;
