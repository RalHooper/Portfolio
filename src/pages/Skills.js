import React from 'react';
import { Link } from 'react-router-dom';
import skillsImage from '../images/Headshot_3364.jpg';
import './Skills.css';

function Skills() {
    return (
      <div className="skillsBackground">
        <div className="skillsNav">
          <Link to="/about" className="navLink">About Me</Link>
          <Link to="/home" className="navLink">Home</Link>
          <Link to="/skills" className="navLink">Skills</Link>
          <Link to="/projects" className="navLink">Projects</Link>
        </div>
        <div className="skillsContainer">
          <div className="skillsContent">
            <h2 className="skillsSectionTitle">Professional Skills</h2>
            <ul className="skillsList">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>RestAPI</li>
              <li>Bootstrap</li>
              <li>Backend Development</li>
              <li>Debugging</li>
              <li>Package Managers</li>
              <li>Build Tools</li>
              <li>Web Animations</li>
              <li>Version Control/Git</li>
              <li>Routing</li>
              <li>UI</li>
              <li>JSX</li>
            </ul>
            <h3 className="skillsSubtitle">Soft Skills</h3>
              <ul className="softSkillsList">
                <li>Welcomes challenges</li>
                <li>Fast-Learner</li>
                <li>Team-Player</li>
                <li>Friendly and Approachable</li>
                <li>Enthusiastic</li>
              </ul>
              <h3 className="skillsSubtitle">Adjunct Skills</h3>
              <ul className="softSkillsList">
                <li>Networking</li>
                <li>Web Server Operations</li>
                <li>Cybersecurity Awareness</li>
                <li>Command-Line Proficent</li>
                <li>Version Control</li>
                <li>Cloud Computing</li>
              </ul>
                <img src={skillsImage} alt="Headshot" className="skillsImage" />
          </div>
        </div>
      </div>
    );
}

export default Skills;