import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { FaTrophy, FaAward, FaLaptopCode, FaUsers } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { PiMedalFill } from "react-icons/pi";
import "./Achievements.css";

function Achievements() {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        reveals.forEach((reveal) => revealObserver.observe(reveal));
        return () => revealObserver.disconnect();
    }, []);

    const achievementsData = [
        {
            title: "1st Prize – Analytical Leaderboard (Round 1)",
            date: "Nov 2025",
            description: "Secured 1st rank among 100+ participants, demonstrating strong analytical thinking, quick interpretation, and logical decision-making abilities.",
            icon: <FaTrophy />
        },
        {
            title: "IBM Technical Proficiency Badge",
            date: "Nov 2024",
            description: "Earned the “Introduction to Hardware and Operating Systems” certification from IBM (via Coursera), along with a verified digital badge from Credly, showcasing foundational technical proficiency.",
            icon: <SiIbm />
        },
        {
            title: "Adobe India Hackathon",
            date: "Jul 2025",
            description: "Participated in Adobe India Hackathon Round 1 (MCQ + Coding) representing LPU as part of Team CODERS, applying problem-solving and coding skills in a competitive environment.",
            icon: <FaLaptopCode />
        },
        {
            title: "Code of Duty Hackathon",
            date: "Mar 2024",
            description: "Participated in the Code of Duty Web Hackathon 2024, demonstrating teamwork, collaboration, and innovative problem-solving skills.",
            icon: <FaUsers />
        }
    ];
    return (
        <Container fluid className="project-section">
            <Particle />

            {/* Background Decorations */}
            <div className="achievements-decor">
                <div className="decor-blob blob-gold"></div>
                <div className="decor-blob blob-purple"></div>
            </div>

            <div className="light-mode-decorations">

                <div className="deco-shape deco-abstract-blob blob-3"></div>
                <div className="deco-shape circle-red"></div>
                <div className="deco-shape circle-blue"></div>
            </div>

            <Container className="achievements-container-wrapper">
                <h1 className="project-heading reveal">
                    My <strong className="purple">Achievements </strong>
                </h1>
                <p className="reveal" style={{ color: "var(--text-color)", textAlign: "center", marginBottom: "3rem", opacity: 0.8 }}>
                    A showcase of my awards, honors, and competitive programming achievements.
                </p>
                
                <div className="achievements-container">
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className="achievement-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="achievement-header">
                                <div className="achievement-icon-wrapper">
                                    {achievement.icon}
                                </div>
                                <div className="achievement-date">
                                    {achievement.date}
                                </div>
                            </div>
                            <div className="achievement-content">
                                <h2 className="achievement-title">{achievement.title}</h2>
                                <p className="achievement-description">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}

export default Achievements;
