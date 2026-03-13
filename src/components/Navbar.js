import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineMail,
} from "react-icons/ai";


import { CgFileDocument } from "react-icons/cg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiCertificate } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";

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
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
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
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/skills" onClick={() => updateExpanded(false)}>
                <AiOutlineThunderbolt style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
              >
                <IoMdSchool style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
              >
                <PiCertificate style={{ marginBottom: "2px" }} /> Certificates
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/achievements"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineTrophy style={{ marginBottom: "2px" }} /> Achievements
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/trainings"
                onClick={() => updateExpanded(false)}
              >
                <FaChalkboardTeacher style={{ marginBottom: "2px" }} /> Trainings
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              title={<HiOutlineDotsVertical style={{ fontSize: "1.2rem" }} />}
              id="collasible-nav-dropdown"
              className="navbar-dropdown"
            >
              <NavDropdown.Item as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginRight: "10px" }} /> About
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineMail style={{ marginRight: "10px" }} /> Contact
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item style={{ marginLeft: "15px", display: "flex", alignItems: "center" }}>
              <Button
                onClick={toggleTheme}
                variant="outline-primary"
                style={{
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0"
                }}
              >
                {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
