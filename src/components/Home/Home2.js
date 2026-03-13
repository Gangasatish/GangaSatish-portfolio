import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar-premium.png";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

function Home2({ theme }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="card-glass" style={{ margin: "20px 0" }}>
          <Col md={8} className="home-about-description">
            <h1 className="preview-title" style={{ fontSize: "2.6em", textAlign: "left" }}>
              {theme === "light" ? (
                <>A GLIMPSE INTO <span className="purple"> MY JOURNEY </span></>
              ) : (
                <>LET ME <span className="purple"> INTRODUCE </span> MYSELF</>
              )}
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Ganga Satish</b>, a Computer Science student at <b className="purple">Lovely Professional University</b>, specializing in <b className="purple">Cloud Computing</b>. I am driven by curiosity and a passion for solving complex problems through technology.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  AWS, Java, C++, and Cloud Computing infrastructure{" "}
                </b>
              </i>
              — and I enjoy working on projects involving software development and data structures.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
            <div style={{ padding: "20px 0", textAlign: "left" }}>
              <Button as={Link} to="/about" variant="outline-primary" className="btn-secondary">
                Read More
              </Button>
            </div>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <Tilt>
              <img src={myImg} className="img-fluid floating-img" alt="avatar" style={{ borderRadius: "20px", maxHeight: "300px" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
