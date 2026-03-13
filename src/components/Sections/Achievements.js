import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Achievements() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Achievements </strong>
                </h1>
                <p style={{ color: "var(--text-color)" }}>
                    A showcase of my awards, honors, and competitive programming achievements.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col md={12} className="about-text">
                        <div className="education-card" style={{
                            background: "var(--card-bg)",
                            padding: "20px",
                            borderRadius: "10px",
                            marginBottom: "20px",
                            border: "1px solid rgba(123, 31, 162, 0.2)"
                        }}>
                            <p style={{ textAlign: "justify", color: "var(--text-color)" }}>
                                Consistently achieving excellence in technical learning and academic performance. Holding certifications in Cloud Computing, Java Programming, and Data Structures, with a strong focus on practical implementation and problem-solving in the tech domain.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Achievements;
