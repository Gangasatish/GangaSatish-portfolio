import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Get in <strong className="purple">Touch</strong>
                        </h1>
                        <p style={{ fontSize: "1.2em" }}>
                            I'm always open to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>
                        <div className="contact-info" style={{ marginTop: "30px" }}>
                            <p>
                                Email: <span className="purple">soumyajitbehera@gmail.com</span>
                            </p>
                            <p>
                                Location: <span className="purple">Bhubaneswar, India</span>
                            </p>
                        </div>
                        <ul className="home-about-social-links" style={{ marginTop: "20px" }}>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/SoumyajitBehera"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/soumyajitbehera/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/soumyajit.behera"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
