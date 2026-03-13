import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SkillCard from "./SkillCard";
import "./TechnicalArsenal.css";

// Icons from existing assets
import CIcon from "../../Assets/TechIcons/C++.svg";
import JavascriptIcon from "../../Assets/TechIcons/Javascript.svg";
import NodeIcon from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import JavaIcon from "../../Assets/TechIcons/Java.svg";
import PythonIcon from "../../Assets/TechIcons/Python.svg";
import GitIcon from "../../Assets/TechIcons/Git.svg";
import DockerIcon from "../../Assets/TechIcons/Docker.svg";
import MongoIcon from "../../Assets/TechIcons/Mongo.svg";
import KubernetesIcon from "../../Assets/TechIcons/Kubernates.svg";
import ReduxIcon from "../../Assets/TechIcons/Redux.svg";
import TailwindIcon from "../../Assets/TechIcons/Tailwind.svg";
import PostmanIcon from "../../Assets/TechIcons/Postman.svg";
import AWSIcon from "../../Assets/TechIcons/AWS.svg";
import VSCodeIcon from "../../Assets/TechIcons/vscode.svg";

// React icons for missing ones
import { DiHtml5, DiCss3 } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const skillsData = [
  // Programming Languages
  { name: "C", icon: <img src={CIcon} alt="C" />, category: "ProgrammingLanguages", progress: 70 },
  { name: "C++", icon: <img src={CIcon} alt="C++" />, category: "ProgrammingLanguages", progress: 75 },
  { name: "Java", icon: <img src={JavaIcon} alt="Java" />, category: "ProgrammingLanguages", progress: 85 },
  { name: "Python", icon: <img src={PythonIcon} alt="Python" />, category: "ProgrammingLanguages", progress: 75 },
  { name: "JavaScript", icon: <img src={JavascriptIcon} alt="JavaScript" />, category: "ProgrammingLanguages", progress: 90 },

  // Frontend
  { name: "React", icon: <img src={ReactIcon} alt="React" />, category: "Frontend", progress: 90 },
  { name: "HTML", icon: <DiHtml5 />, category: "Frontend", progress: 95 },
  { name: "CSS", icon: <DiCss3 />, category: "Frontend", progress: 85 },
  { name: "Redux", icon: <img src={ReduxIcon} alt="Redux" />, category: "Frontend", progress: 85 },
  { name: "Tailwind CSS", icon: <img src={TailwindIcon} alt="Tailwind" />, category: "Frontend", progress: 80 },

  // Backend
  { name: "Node.js", icon: <img src={NodeIcon} alt="Node" />, category: "Backend", progress: 85 },
  { name: "Express.js", icon: <SiExpress />, category: "Backend", progress: 80 },

  // Databases
  { name: "MongoDB", icon: <img src={MongoIcon} alt="Mongo" />, category: "Databases", progress: 85 },

  // Tools
  { name: "Docker", icon: <img src={DockerIcon} alt="Docker" />, category: "Tools", progress: 85 },
  { name: "Kubernetes", icon: <img src={KubernetesIcon} alt="Kubernetes" />, category: "Tools", progress: 80 },
  { name: "Git", icon: <img src={GitIcon} alt="Git" />, category: "Tools", progress: 90 },
  { name: "Postman", icon: <img src={PostmanIcon} alt="Postman" />, category: "Tools", progress: 90 },
  { name: "AWS", icon: <img src={AWSIcon} alt="AWS" />, category: "Tools", progress: 75 },
  { name: "VS Code", icon: <img src={VSCodeIcon} alt="VS Code" />, category: "Tools", progress: 95 },
];

const categories = ["All Skills", "ProgrammingLanguages", "Frontend", "Backend", "Databases", "Tools"];

function TechnicalArsenal() {
  const [activeTab, setActiveTab] = useState("All Skills");

  const filteredSkills = activeTab === "All Skills" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <Container fluid className="technical-arsenal-section">
      <h1 className="arsenal-title">Technical Arsenal</h1>
      <p className="arsenal-subtitle">A showcase of technologies I've mastered on my journey as a developer.</p>
      
      <div className="filter-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-tab ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category === "ProgrammingLanguages" ? "Programming Languages" : category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={skill.name} className="animate-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default TechnicalArsenal;
