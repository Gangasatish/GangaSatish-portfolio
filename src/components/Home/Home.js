import React, { useEffect } from "react";
import { Container, Row, Col, Button as BSButton } from "react-bootstrap";
import homeLogo from "../../Assets/Professional portrait in navy blazer.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineFundProjectionScreen,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FaLinkedinIn, FaChalkboardTeacher, FaReact, FaNodeJs, FaAws, FaProjectDiagram, FaDatabase, FaBook, FaChartLine, FaMicrochip } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import bookstore from "../../Assets/Projects/bookstore.png";
import chatify from "../../Assets/Projects/chatify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";


function Home({ theme }) {
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

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <div className="light-mode-decorations">
          {/* Top Floral Border */}
          <div className="top-floral-border"></div>

          {/* Top Right: Abstract Blob */}
          <div className="deco-shape deco-abstract-blob blob-3"></div>

          {/* Scattered Circles */}
          <div className="deco-shape circle-red"></div>
          <div className="deco-shape circle-blue"></div>
          

          <div className="deco-blob blob-1"></div>
          <div className="deco-blob blob-2"></div>
        </div>
        <Container className="home-content">
          <Row style={{ position: "relative", zIndex: 1 }}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {theme === "light" ? (
                  <>
                    Step into my <span className="purple">Creative Hub</span>
                    <span className="wave" role="img" aria-labelledby="wave">✨</span>
                  </>
                ) : (
                  <>
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                  </>
                )}
              </h1>

              <h1 className="heading-name">
                {theme === "light" ? "EXPLORE THE WORLD OF" : "I'M"}
                <strong className="main-name">
                  {theme === "light" ? " Ganjikunta Ganga Satish" : " Ganjikunta Ganga Satish"}
                </strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>

              <div className="hero-buttons">
                <Link to="/project" className="hero-btn hero-btn-primary">
                  View Projects
                </Link>
                <Link to="/resume" className="hero-btn hero-btn-secondary">
                  Resume
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="hero-img-container">
                <div className="hero-img-wrapper portrait-hero-container">
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid floating-img portrait-hero-img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* SECTION 2: ABOUT PREVIEW (Home2) */}
      <div className="reveal">
        <Home2 theme={theme} />
      </div>

      <Container>
        {/* SECTION 3: SKILLS PREVIEW */}
        <section className="home-preview-section reveal">
          <h2 className="preview-title">My Skills</h2>
          <div className="grid-preview">
            {[
              { 
                title: "MERN Full Stack Web Development", 
                icon: (
                  <div className="skill-icons-group mern-group">
                    <FaDatabase className="skill-icon mongo-icon" title="MongoDB" />
                    <FaReact className="skill-icon react-icon" title="React" />
                    <FaNodeJs className="skill-icon node-icon" title="Node.js" />
                  </div>
                ) 
              },
              { 
                title: "Core AWS Services", 
                subtitle: "(Compute, Storage, Database, Networking, Security)", 
                icon: <FaAws className="skill-icon single-icon aws-icon" /> 
              },
              { 
                title: "Data Structure and Algorithms", 
                icon: <FaProjectDiagram className="skill-icon single-icon dsa-icon" /> 
              }
            ].map((skill, i) => (
              <div key={i} className="card-glass text-center">
                <div className="skill-icon-container">{skill.icon}</div>
                <h3 style={{ marginTop: "1rem" }}>{skill.title}</h3>
                {skill.subtitle && <p style={{ fontSize: "0.9em", opacity: 0.8 }}>{skill.subtitle}</p>}
              </div>
            ))}
          </div>
          <div className="text-center">
            <BSButton as={Link} to="/about" className="hero-btn hero-btn-secondary">Learn More About My Skills</BSButton>
          </div>
        </section>

        {/* SECTION 4: PROJECTS PREVIEW */}
        <section className="home-preview-section reveal">
          <h2 className="preview-title">Featured Projects</h2>
          <div className="grid-projects">
            {[
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
              }
            ].map((project, i) => (
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
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <BSButton as={Link} to="/project" className="hero-btn hero-btn-secondary">View All Projects</BSButton>
          </div>
        </section>

        {/* SECTION 5-8: Grid of other sections */}
        <section className="home-preview-section reveal">
          <div className="grid-preview">
            <div className="card-glass">
              <IoMdSchool size={30} className="purple" />
              <h3>Education</h3>
              <p>Highlights of my academic journey.</p>
              <BSButton as={Link} to="/education" variant="link" className="purple">Learn More</BSButton>
            </div>
            <div className="card-glass">
              <PiCertificate size={30} className="purple" />
              <h3>Certificates</h3>
              <p>Professional certifications and courses.</p>
              <BSButton as={Link} to="/certificates" variant="link" className="purple">View All</BSButton>
            </div>
            <div className="card-glass">
              <AiOutlineTrophy size={30} className="purple" />
              <h3>Achievements</h3>
              <p>Recognition and awards received.</p>
              <BSButton as={Link} to="/achievements" variant="link" className="purple">Explore</BSButton>
            </div>
            <div className="card-glass">
              <FaChalkboardTeacher size={30} className="purple" />
              <h3>Trainings</h3>
              <p>Workshops and industrial training.</p>
              <BSButton as={Link} to="/trainings" variant="link" className="purple">Details</BSButton>
            </div>
          </div>
        </section>

        {/* SECTION 9: CALL TO ACTION */}
        <section className="cta-section reveal">
          <h2>Interested in working together?</h2>
          <p style={{ marginBottom: "2rem" }}>Let's build something great.</p>
          <div className="d-flex justify-content-center gap-3">
            <BSButton as={Link} to="/contact" className="hero-btn hero-btn-primary">Contact Me</BSButton>
            <BSButton href="/Ganga_Satish_Resume.pdf" target="_blank" className="hero-btn hero-btn-secondary">Resume</BSButton>
          </div>
        </section>

        {/* SECTION 10: CONTACT PREVIEW */}
        <Row className="home-preview-section reveal">
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gangasatish"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gangasatish/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
