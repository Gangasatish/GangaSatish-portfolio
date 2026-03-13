import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Hi everyone! I’m <span className="purple">Ganjikunta Ganga Satish</span>{" "}
          from <span className="purple">Jalandhar, Punjab / India</span>.
          <br />
          I’m a <span className="purple">B.Tech CSE Student (Cloud Computing)</span> at{" "}
          <span className="purple">Lovely Professional University</span>.
          <br />
          I have a strong interest in <span className="purple">Problem Solving</span> and building <span className="purple">Cloud-Native Solutions</span>.
          <br />
          <br />
          Outside of coding, I love engaging in activities that keep me
          creative and inspired:

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ganga Satish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
