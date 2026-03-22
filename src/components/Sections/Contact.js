import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.css"; // Import the custom styling

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <div className="contact-heading-container">
           <h5 className="contact-header">GET IN TOUCH</h5>
           <h1 className="contact-title">Drop Me a Line</h1>
           <div className="contact-decor-line"></div>
        </div>

        <div className="contact-main-card">
          <Row className="g-0">
            
            {/* Left Column: Form */}
            <Col md={12} lg={7} className="contact-form-col">
              <div className="contact-form-wrapper">
                <p className="contact-subtitle">
                  Have a question or want to work together? Fill out the form or reach out directly.
                </p>
                <Form className="contact-form">
                  <Row>
                     <Col md={6}>
                        <Form.Group className="form-group" controlId="formName">
                          <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                     </Col>
                     <Col md={6}>
                        <Form.Group className="form-group" controlId="formEmail">
                          <Form.Control type="email" placeholder="your.email@example.com" />
                        </Form.Group>
                     </Col>
                  </Row>
                  
                  <Form.Group className="form-group" controlId="formSubject">
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                  
                  <Form.Group className="form-group" controlId="formMessage">
                    <Form.Control as="textarea" rows={5} placeholder="Your message..." />
                  </Form.Group>
                  
                  <Button variant="primary" type="button" className="btn-send">
                    <span>Send Message</span> <FiSend className="send-icon" />
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Right Column: Information */}
            <Col md={12} lg={5} className="contact-info-col">
              <div className="contact-info-wrapper">
                <h3 className="contact-info-title">Contact Information</h3>
                <p className="contact-info-text">
                  I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <AiOutlineMail />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Email</span>
                      <a href="mailto:gangasatish001@gmail.com" className="info-value">gangasatish001@gmail.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <FaPhoneAlt size="1.1rem" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Phone</span>
                      <a href="tel:+917981048680" className="info-value">+91-7981048680</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <FaLinkedinIn />
                    </div>
                    <div className="info-content">
                      <span className="info-label">LinkedIn</span>
                      <a href="https://www.linkedin.com/in/gangasatish/" target="_blank" rel="noreferrer" className="info-value">gangasatish</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <AiFillGithub />
                    </div>
                    <div className="info-content">
                      <span className="info-label">GitHub</span>
                      <a href="https://github.com/Gangasatish" target="_blank" rel="noreferrer" className="info-value">Gangasatish</a>
                    </div>
                  </div>
                </div>

                <div className="follow-me-section">
                  <h4 className="follow-me-title">Connect with me</h4>
                  <div className="social-icons-wrapper">
                    <a href="https://www.linkedin.com/in/gangasatish/" target="_blank" rel="noreferrer" className="social-icon-btn">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/Gangasatish" target="_blank" rel="noreferrer" className="social-icon-btn">
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;
