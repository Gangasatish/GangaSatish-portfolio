import React, { useEffect } from "react";
import { Container, Button as BSButton } from "react-bootstrap";
import Particle from "../Particle";
import { PiCertificateFill } from "react-icons/pi";

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
      title: "Data Structures Using C++ (Summer Training)",
      provider: "Lovely Professional University",
      duration: "Jun ’ 25 – Jul ’ 25",
      description: "Comprehensive training on Data Structures including arrays, linked lists, stacks, queues, BST, and graphs. Developed mini-projects like Students Marks Analyzer and File Encryption tool.",
      certificate: "https://drive.google.com/file/d/1Wqe8vP1NIV8dHlp3R0ofsVLqX5whgXag/view?usp=sharing"
    },
    {
      title: "Prompt Engineering: ChatGPT, Generative AI & LLM",
      provider: "Infosys Springboard",
      duration: "Aug ’ 25",
      description: "Learned advanced prompt engineering techniques for large language models, focusing on generative AI applications and efficiency.",
      certificate: "https://drive.google.com/file/d/13DQUfYbg6oJ-XvfmSRBL2NeH1slEv8iX/view?usp=sharing"
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS Academy",
      duration: "May ’ 25",
      description: "Acquired foundational knowledge of cloud computing, covering core AWS services, security, architecture, pricing, and support.",
      certificate: "https://drive.google.com/file/d/1X0p8T5-2kDRZZrGx35wvmN4mkF-bAytI/view?usp=drive_link"
    },
    {
      title: "Social Networks",
      provider: "NPTEL Swayam",
      duration: "Apr ’ 25",
      description: "Explored the structure and dynamics of social networks, understanding computational models and analysis techniques.",
      certificate: "https://drive.google.com/file/d/1oB_ZY0BwxYjy2E3h8EqM7btFvU31y10l/view?usp=sharing"
    },
    {
      title: "C++ (Advanced STL)",
      provider: "IAM Neo Platform",
      duration: "Dec ’ 24",
      description: "Deep dive into the C++ Standard Template Library, mastering containers, iterators, and industrial coding practices.",
      certificate: "https://drive.google.com/file/d/1Ku7dy2c4hbwUiMf3tCyF9P5lpxx5hlrd/view?usp=sharing"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="light-mode-decorations">
          <div className="deco-shape deco-bunting bunting-1">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="deco-flag" />)}
          </div>
          <div className="deco-shape deco-abstract-blob blob-3"></div>
          <div className="deco-shape circle-red"></div>
          <div className="deco-shape circle-blue"></div>
          <div className="deco-blob blob-1"></div>
          <div className="deco-blob blob-2"></div>
      </div>
      <Container className="project-content">
        <h1 className="project-heading reveal">
          Professional <strong className="purple">Trainings </strong>
        </h1>
        <p className="reveal" style={{ color: "var(--text-color)", opacity: 0.8, textAlign: "center", marginBottom: "3rem" }}>
          Upskilling through industry-leading programs and hands-on training.
        </p>

        <div className="grid-preview">
          {trainingsData.map((training, i) => (
            <div key={i} className="card-glass reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div className="purple" style={{ fontSize: "2rem" }}><PiCertificateFill /></div>
                  <span className="edu-duration-badge">{training.duration}</span>
                </div>
                <h3 style={{ color: "var(--text-color)", fontSize: "1.25rem", fontWeight: "700" }}>{training.title}</h3>
                <p style={{ color: "var(--imp-text-color)", fontWeight: "600", marginBottom: "0.5rem" }}>{training.provider}</p>
                <p style={{ fontSize: "0.9em", color: "var(--text-color)", opacity: 0.85, textAlign: 'justify' }}>
                  {training.description}
                </p>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <BSButton
                  href={training.certificate}
                  target="_blank"
                  variant="primary"
                  className="w-100"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  View Certificate
                </BSButton>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Trainings;
