import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Certificates() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Certificates </strong>
                </h1>
                <p style={{ color: "var(--text-color)" }}>
                    Recognition and validation of my continuous learning journey.
                </p>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12} className="about-text">
                        {[
                            { title: "AWS Academy Graduate - AWS Academy Cloud Foundations", issuer: "AWS", date: "May 2025" },
                            { title: "Java Programming", issuer: "iamneo", date: "May 2025" },
                            { title: "Social Networks", issuer: "NPTEL", date: "May 2025" },
                            { title: "Data Structures and Algorithms", issuer: "iamneo", date: "Dec 2024" },
                            { title: "Object Oriented Programming", issuer: "iamneo", date: "Dec 2024" },
                            { title: "Computer Communications", issuer: "United Latino Students Association", date: "Nov 2024" },
                            { title: "NGO Certification", issuer: "Balaji Rural Development Society", date: "Jul 2024" },
                            { title: "Computer Programming", issuer: "iamneo", date: "May 2024" },
                            { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Nov 2023" }
                        ].map((cert, index) => (
                            <div key={index} className="education-card" style={{
                                background: "var(--card-bg)",
                                padding: "15px 20px",
                                borderRadius: "10px",
                                marginBottom: "15px",
                                border: "1px solid rgba(123, 31, 162, 0.2)"
                            }}>
                                <h3 className="purple" style={{ fontSize: "1.2rem" }}>{cert.title}</h3>
                                <p style={{ margin: 0 }}><strong>{cert.issuer}</strong> | {cert.date}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Certificates;
