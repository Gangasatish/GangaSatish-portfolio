import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineMail,
} from "react-icons/ai";


import { CgFileDocument } from "react-icons/cg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

function NavBar({ theme, toggleTheme }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex custom-logo-container">
          <span className="logo-letter logo-g">G</span>
          <span className="logo-letter logo-s">S</span>
          <span className="logo-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <div className="nav-icon-wrapper">
                  <AiOutlineHome className="nav-icon" />
                </div>
                <span className="nav-text">Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/skills" onClick={() => updateExpanded(false)} className="nav-link-custom">
                <div className="nav-icon-wrapper">
                  <AiOutlineThunderbolt className="nav-icon" />
                </div>
                <span className="nav-text">Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <div className="nav-icon-wrapper">
                  <AiOutlineFundProjectionScreen className="nav-icon" />
                </div>
                <span className="nav-text">Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <div className="nav-icon-wrapper">
                  <CgFileDocument className="nav-icon" />
                </div>
                <span className="nav-text">Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <div className="nav-icon-wrapper">
                  <IoMdSchool className="nav-icon" />
                </div>
                <span className="nav-text">Education</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                 <div className="nav-icon-wrapper">
                   <PiCertificate className="nav-icon" />
                 </div>
                 <span className="nav-text">Certificates</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/achievements"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <div className="nav-icon-wrapper">
                  <AiOutlineTrophy className="nav-icon" />
                </div>
                <span className="nav-text">Achievements</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/trainings"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <div className="nav-icon-wrapper">
                  <FaChalkboardTeacher className="nav-icon" />
                </div>
                <span className="nav-text">Trainings</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <div className="nav-icon-wrapper">
                  <AiOutlineMail className="nav-icon" />
                </div>
                <span className="nav-text">Contact</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ display: "flex", alignItems: "center" }}>
              <div aria-label="Toggle Theme" className={`theme-toggle-switch ${theme}`} onClick={toggleTheme}>
                <div className="switch-bg-icons">
                   <BsFillMoonStarsFill className="bg-icon moon" />
                   <BsFillSunFill className="bg-icon sun" />
                </div>
                <div className="toggle-knob">
                  {theme === "dark" ? <BsFillMoonStarsFill className="knob-icon moon" /> : <BsFillSunFill className="knob-icon sun" />}
                </div>
              </div>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
