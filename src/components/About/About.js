import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import TechnicalArsenal from "./TechnicalArsenal";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <TechnicalArsenal />
        </Container>
      </Container>
    </>
  );
}

export default About;
