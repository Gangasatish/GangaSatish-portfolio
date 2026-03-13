import React from "react";
import "./TechnicalArsenal.css";

function SkillCard({ name, icon, category, progress }) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <div className="skill-icon">{icon}</div>
        <div className="skill-name">{name}</div>
      </div>
      <div className="skill-progress-container">
        <div 
          className="skill-progress-bar" 
          style={{ "--target-width": `${progress}%` }}
        ></div>
      </div>
      <div className="skill-category-label">{category}</div>
    </div>
  );
}

export default SkillCard;
