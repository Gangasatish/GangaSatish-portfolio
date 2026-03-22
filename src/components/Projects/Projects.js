import React, { useEffect } from "react";
import { Container, Button as BSButton } from "react-bootstrap";
import Particle from "../Particle";
import { FiExternalLink } from "react-icons/fi";
import bookstore from "../../Assets/Projects/bookstore.png";
import chatify from "../../Assets/Projects/chatify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import naturanet from "../../Assets/Projects/naturanet.png";
import awsConsole from "../../Assets/Projects/aws-console.png";

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
      description: "Architected a full-stack e-commerce bookstore with RESTful APIs, secure JWT authentication, and an interactive Admin Dashboard. Integrated secure authentication & role-based access for product management and cart analytics.",
      link: "https://github.com/Gangasatish/BOOK-STORE-APPLICATION-USING-MERN.git",
      image: bookstore,
      date: "Jan '24 - Mar '24",
      techs: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"]
    },
    {
      title: "Student Marks Analyzer",
      description: "Engineered a console-based academic processing system using C++ and core data structures. Implemented modular architecture for efficient data handling, grade calculation, and structured analysis reporting.",
      link: "https://github.com/Gangasatish/STUDENT-MARKS-ANALYZER-SYSTEM/blob/main/project.cpp",
      image: chatify,
      date: "Aug '23 - Nov '23",
      techs: ["C++", "Data Structures", "Algorithms"]
    },
    {
      title: "Process & Memory Simulator",
      description: "Collaborated on building system-level OS modules focused on concurrent process management and virtual memory systems. Programmed in C to demonstrate advanced OS principles like paging and scheduling.",
      link: "https://github.com/Gangasatish/Intellegent-cpu-scheduler-simulator",
      image: codeEditor,
      date: "Jan '23 - Apr '23",
      techs: ["C", "Operating Systems", "Linux", "Memory Management"]
    },
    {
      title: "AWS S3 File Conversion System",
      description: "Built a serverless workflow to automatically convert CSV files to JSON using AWS S3 triggers and Lambda. Executed Python-based conversion logic with secure IAM role configurations and integrated CloudWatch. Delivered a scalable and cost-efficient automated data pipeline with minimal operational overhead.",
      link: "https://github.com/Gangasatish/AWS-S3-File-Conversion-System/tree/main/INT330AWSPROJECT",
      image: awsConsole,
      date: "May '25",
      techs: ["AWS S3", "AWS Lambda", "Python", "IAM", "CloudWatch"]
    },
    {
      title: "NaturaNet",
      description: "Developed an eco-focused website using AI-driven digital marketing strategies to boost visibility and engagement. Applied SEO optimization and systematized content workflows to improve organic reach. Leveraged WiX, Google Analytics, and Canva for website creation, performance tracking, and content design.",
      link: "https://gangasatish001.wixsite.com/naturanet-1",
      image: naturanet,
      date: "Nov '25",
      techs: ["WiX", "Google Analytics", "Canva", "SEO", "Digital Marketing"]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="light-mode-decorations">

        {/* Top Right: Abstract Blob */}
        <div className="deco-shape deco-abstract-blob blob-3"></div>

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

        <div className="grid-projects">
          {projects.map((project, i) => (
            <div key={i} className="project-card-v2 reveal">
              <div className="project-image-box">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              </div>

              <div className="project-info-box">
                <div className="project-title-row">
                  <h3 className="project-title-v2">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link-icon">
                    <FiExternalLink />
                  </a>
                </div>

                <p className="project-date">{project.date}</p>

                <p className="project-description-v2">{project.description}</p>

                <div className="project-tech-stack">
                  {project.techs.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
