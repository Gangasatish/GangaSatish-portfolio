import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { FaLaptopCode, FaAward } from "react-icons/fa";
import { SiAmazonaws, SiOracle, SiCoursera, SiLinkedin, SiFreecodecamp } from "react-icons/si";
import "./Certificates.css";

import awsCert from "../../Assets/Certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250606-25-s5hk1j.jpg";
import oracleAICert from "../../Assets/Certificates/oracle ai certificate.jpg";
import oracleDBCert from "../../Assets/Certificates/oracle database certificate.jpg";
import digitalSystemsCert from "../../Assets/Certificates/COURSE DIGITAL SYSTEMS CERTIFICATE.jpg";
import bitsBytesCert from "../../Assets/Certificates/Coursera BITS AND BTYES OF COMPUTER NETWORKING.jpg";
import networksCert from "../../Assets/Certificates/computer networks coursesera all certificate.jpg";
import genAICert from "../../Assets/Certificates/MASTER GENERATIVE.jpg";
import oopCert from "../../Assets/Certificates/oop certificate.jpg";
import javaCert from "../../Assets/Certificates/java cerificate.jpg";
import cpCert from "../../Assets/Certificates/COMPUTER PROGRAMMING.jpg";
import socialNetworksCert from "../../Assets/Certificates/Social Networks.jpg";
import rwdCert from "../../Assets/Certificates/responsive_web_design_new.png";

function Certificates() {
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

    const certificatesData = [
        { title: "AWS Academy Cloud Foundations", issuer: "AWS", date: "May 2025", icon: <SiAmazonaws />, image: awsCert },
        { title: "AI Foundations Associate", issuer: "Oracle", date: "Mar 2026", icon: <SiOracle />, image: oracleAICert },
        { title: "Data Platform Foundations Associate", issuer: "Oracle", date: "Mar 2026", icon: <SiOracle />, image: oracleDBCert },
        { title: "Digital Systems: From Logic Gates to Processors", issuer: "Coursera", date: "Sep 2024", icon: <SiCoursera />, image: digitalSystemsCert },
        { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", date: "Sep 2024", icon: <SiCoursera />, image: bitsBytesCert },
        { title: "Fundamentals of Network Communication", issuer: "Coursera", date: "2024", icon: <SiCoursera />, image: networksCert },
        { title: "Master Generative AI", issuer: "LinkedIn Learning", date: "2024", icon: <SiLinkedin />, image: genAICert },
        { title: "Object Oriented Programming", issuer: "iamneo", date: "Dec 2024", icon: <FaLaptopCode />, image: oopCert },
        { title: "Java Programming", issuer: "iamneo", date: "May 2025", icon: <FaLaptopCode />, image: javaCert },
        { title: "Computer Programming", issuer: "iamneo", date: "May 2024", icon: <FaLaptopCode />, image: cpCert },
        { title: "Social Networks", issuer: "NPTEL", date: "Apr 2025", icon: <FaAward />, image: socialNetworksCert },
        { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Nov 2023", icon: <SiFreecodecamp />, image: rwdCert }
    ];

    return (
        <Container fluid className="about-section certificates-section">
            <Particle />

            {/* Background Decorations */}
            <div className="certificates-decor">
                <div className="decor-blob blob-gold"></div>
                <div className="decor-blob blob-purple"></div>
            </div>

            <div className="light-mode-decorations">
                <div className="deco-shape circle-red"></div>
                <div className="deco-shape circle-blue"></div>
            </div>

            <Container className="certificates-container-wrapper" style={{ position: "relative", zIndex: 1 }}>
                <h1 className="project-heading reveal">
                    My <strong className="purple">Certificates </strong>
                </h1>
                <p className="reveal" style={{ color: "var(--text-color)", textAlign: "center", marginBottom: "3rem", opacity: 0.8 }}>
                    A gallery of my continuous learning journey and achievements.
                </p>

                <div className="certificates-grid">
                    {certificatesData.map((cert, index) => (
                        <div key={index} className="certificate-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="certificate-image-container">
                                <img src={cert.image} alt={cert.title} className="certificate-img" />
                                <div className="certificate-overlay">
                                    <div className="certificate-icon-wrapper">
                                        {cert.icon}
                                    </div>
                                    <div className="view-text">View Details</div>
                                </div>
                            </div>
                            <div className="certificate-content">
                                <div className="certificate-header-info">
                                    <h3 className="certificate-title">{cert.title}</h3>
                                    <span className="certificate-date">{cert.date}</span>
                                </div>
                                <p className="certificate-issuer">
                                    <strong>{cert.issuer}</strong>
                                </p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    ))}
                </div>
            </Container>
        </Container>
    );
}

export default Certificates;
