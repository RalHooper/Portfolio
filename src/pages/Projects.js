import React from 'react';
import { Link } from 'react-router-dom';
import lightsout from '../images/lightsout.png';
import weather from '../images/weather.png';
import waits from '../images/waits.png';
import './Projects.css'; // Import your CSS file

function Projects() {
  return (
    <div className="projectsBackground">
      <div className="projectsNav">
        <Link to="/about" className="navLink">About Me</Link>
        <Link to="/home" className="navLink">Home</Link>
        <Link to="/skills" className="navLink">Skills</Link>
        <Link to="/projects" className="navLink">Projects</Link>
      </div>
      <div className="projectsContainer">
        <h1 className="sectionTitle">Projects</h1>

        <div className="projectBox">
          <div className="projectDetails">
            <div className="projectImage">
              <img src={lightsout} alt="LightsOut!" />
            </div>
            <div className="projectTitle">Lights Out!</div>
            <div className="projectDescription">
               Can you turn the lights out on all the squares before the timer runs out? Test your skills here!
            </div>
            <a href="https://lightsoutchallenge.netlify.app/" className="seeProjectButton">See Project</a>
          </div>
        </div>

        <div className="projectBox weather">
          <div className="projectDetails">
            <div className="projectImage large">
              <img src={weather} alt="Weather" />
            </div>
              <div className="projectTitle">Weather Check</div>
              <div className="projectDescription">Check the weather for your local city or anywhere on the planet! Yes, anywhere!</div>
              <a href="https://weathercheckup.netlify.app/" className="seeProjectButton">See Project</a>
            </div>
        </div>

        <div className="projectBox project3">
          <div className="projectDetails">
            <div className="projectImage large">
              <img src={waits} alt="Waits" />
            </div>
            <div className="projectTitle">Wait Times</div>
            <div className="projectDescription">Find out the wait times to the rides any major theme park on the planet!</div>
              <div className="seeProjectButton">See Project</div>
            <div className="comingSoonOverlay">
              <h2>Coming Soon!</h2>
              <p>Currently working on an app that check ride wait times for theme parks worldwide!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
