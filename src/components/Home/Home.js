import React, { useEffect } from "react";
import { Container, Row, Col, Button as BSButton } from "react-bootstrap";
import homeLogo from "../../Assets/hero-premium.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineThunderbolt,
  AiOutlineFundProjectionScreen,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FaLinkedinIn, FaChalkboardTeacher } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";


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
          {/* Top Left: Bunting */}
          <div className="deco-shape deco-bunting bunting-1">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="deco-flag" />)}
          </div>

          {/* Top Right: Branch with Flowers */}
          <svg className="deco-shape branch-1" width="120" height="120" viewBox="0 0 100 100">
            <path d="M90,20 Q70,40 20,90" stroke="#2d3436" strokeWidth="3" fill="none" />
            <path d="M70,40 Q50,60 30,80" stroke="#2d3436" strokeWidth="2" fill="none" />
            <circle cx="85" cy="25" r="8" fill="#ff8e9e" /> <circle cx="85" cy="25" r="3" fill="#f1c40f" />
            <circle cx="65" cy="45" r="8" fill="#ff8e9e" /> <circle cx="65" cy="45" r="3" fill="#f1c40f" />
            <circle cx="45" cy="65" r="8" fill="#ff8e9e" /> <circle cx="45" cy="65" r="3" fill="#f1c40f" />
          </svg>

          {/* Top Right: Abstract Blob */}
          <div className="deco-shape deco-abstract-blob blob-3"></div>

          {/* Left: Spiky Shape (Gear-like) */}
          <svg className="deco-shape deco-spiky spiky-1" viewBox="0 0 100 100">
            <path d="M50 0 L58 35 L90 20 L75 50 L90 80 L58 65 L50 100 L42 65 L10 80 L25 50 L10 20 L42 35 Z" />
          </svg>

          {/* Bottom Left: Step Line */}
          <svg className="deco-shape step-1" width="100" height="100" viewBox="0 0 100 100">
            <path d="M10,90 L40,90 L40,60 L70,60 L70,30" stroke="#2980b9" strokeWidth="4" fill="none" />
          </svg>

          {/* Bottom Left: Wavy Line */}
          <svg className="deco-shape wavy-1" width="100" height="30" viewBox="0 0 100 30">
            <path d="M0,15 Q12.5,0 25,15 T50,15 T75,15 T100,15" stroke="#f39c12" strokeWidth="4" fill="none" />
          </svg>

          {/* Bottom Right: Textured Circle */}
          <div className="deco-shape deco-textured-circle textured-circle-1"></div>

          {/* Bottom Right: Spiky Shape 2 */}
          <svg className="deco-shape deco-spiky spiky-2" viewBox="0 0 100 100">
            <path d="M50 5 L55 35 L85 35 L60 55 L70 85 L50 65 L30 85 L40 55 L15 35 L45 35 Z" fill="#2980b9" />
          </svg>

          {/* Right: Vertical Zigzag */}
          <svg className="deco-shape zigzag-v" width="100" height="30" viewBox="0 0 100 30">
            <path d="M0,15 L20,0 L40,15 L60,0 L80,15 L100,0" stroke="#f39c12" strokeWidth="4" fill="none" />
          </svg>

          {/* Scattered Circles */}
          <div className="deco-shape circle-red"></div>
          <div className="deco-shape circle-blue"></div>
          <div className="deco-shape circle-dark"></div>

          {/* Retained Zigzags from first pass */}
          <svg className="deco-zigzag zigzag-1" viewBox="0 0 60 30">
            <path d="M0,15 L10,5 L20,15 L30,5 L40,15 L50,5 L60,15" />
          </svg>
          <svg className="deco-zigzag zigzag-2" viewBox="0 0 60 30">
            <path d="M0,15 L10,5 L20,15 L30,5 L40,15 L50,5 L60,15" />
          </svg>
          
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
                <BSButton as={Link} to="/project" variant="primary" className="btn-primary">
                  View Projects
                </BSButton>
                <BSButton href="/Ganga_Satish_Resume.pdf" target="_blank" variant="outline-primary" className="btn-secondary">
                  Resume
                </BSButton>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="hero-img-container">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid floating-img"
                  style={{ maxHeight: "400px", borderRadius: "20px" }}
                />
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
              { title: "MERN Full Stack Web Development", icon: <AiOutlineThunderbolt /> },
              { title: "Core AWS Services", subtitle: "(Compute, Storage, Database, Networking, Security)", icon: <AiOutlineThunderbolt /> },
              { title: "Data Structure and Algorithms", icon: <AiOutlineThunderbolt /> }
            ].map((skill, i) => (
              <div key={i} className="card-glass text-center">
                <div className="purple" style={{ fontSize: "40px" }}>{skill.icon}</div>
                <h3 style={{ marginTop: "1rem" }}>{skill.title}</h3>
                {skill.subtitle && <p style={{ fontSize: "0.9em", opacity: 0.8 }}>{skill.subtitle}</p>}
              </div>
            ))}
          </div>
          <div className="text-center">
            <BSButton as={Link} to="/about" variant="outline-primary">Learn More About My Skills</BSButton>
          </div>
        </section>

        {/* SECTION 4: PROJECTS PREVIEW */}
        <section className="home-preview-section reveal">
          <h2 className="preview-title">Featured Projects</h2>
          <div className="grid-preview">
            {[
              {
                title: "MERN Bookstore",
                description: "Full-stack e-commerce bookstore with RESTful APIs, JWT authentication, and Admin Dashboard.",
                link: "https://github.com/Gangasatish/BOOK-STORE-APPLICATION-USING-MERN.git",
                path: "/project"
              },
              {
                title: "Student Marks Analyzer",
                description: "Console-based system using C++ and core data structures for academic data processing.",
                link: "https://github.com/Gangasatish",
                path: "/project"
              },
              {
                title: "Process & Memory Simulator",
                description: "System-level OS modules focused on process management and memory systems in C.",
                link: "https://github.com/Gangasatish",
                path: "/project"
              }
            ].map((project, i) => (
              <div key={i} className="card-glass">
                <div style={{ height: "150px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", marginBottom: "1rem", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                   <AiOutlineFundProjectionScreen size={50} className="purple" />
                </div>
                <h3>{project.title}</h3>
                <p style={{ fontSize: "0.9em" }}>{project.description}</p>
                <div className="d-flex gap-2">
                  <BSButton as={Link} to={project.path} variant="primary" size="sm">Details</BSButton>
                  {project.link !== "#" && <BSButton href={project.link} target="_blank" variant="outline-primary" size="sm">Live</BSButton>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <BSButton as={Link} to="/project" variant="outline-primary">View All Projects</BSButton>
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
            <BSButton as={Link} to="/contact" variant="light">Contact Me</BSButton>
            <BSButton href="/Ganga_Satish_Resume.pdf" target="_blank" variant="outline-light">Resume</BSButton>
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
