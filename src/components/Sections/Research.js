import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Research() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research & <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
          This section will showcase research papers, publications, and academic contributions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12} className="about-text">
            <p style={{ textAlign: "justify" }}>
              Work in progress... I am currently organizing my research contributions to be displayed here.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Research;
