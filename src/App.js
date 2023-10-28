import React from 'react';
import github from './github.png'; 
import linkedin from './linkedin.png';
import LightsOut from './LightsOut.png';
import Weather from './Weather.png';
import Waits from './Waits.png';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <div className="left-side">
      <div className="intro-container">
      <div className="circle-background"></div>
        <div className="intro">
          <h1 className="custom-font1">Hi, I'm Raleigh!</h1>
          <p className="custom-font2">I'm a Web Developer!</p>
        </div>
        <div className="bio">
          <p className="custom-font3">I create a variety of user interfaces and web applications!</p>
        </div>
        </div>
      </div>
      <div className="right-side">
      <div className="project">
      <a href="https://lightsoutchallenge.netlify.app/" className="project-link">
       <div className="project-content">
        <div className="project-image">
           <img src={LightsOut} alt="Lights Out!" />
        </div>
        <div className="project-info">
          <h2 className="project-title">Lights Out!</h2>
          <p className="project-description">Can you click off all of
          the squares in five minutes! Click here to accept the challenge!
          </p>
        </div>
      </div>
      </a>
    </div>
    <div className="project">
      <a href="https://weathercheckup.netlify.app/" className="project-link">
      <div className="project-content">
          <div className="project-image">
            <img src={Weather} alt="Weather Check" />
          </div>
        <div className="project-info">
         <h2 className="project-title">Weather Check</h2>
         <p className="project-description">Want to know what's the current
         weather like from Los Angeles to London? Click here to check the weather!
        </p>
      </div>
      </div>
      </a>
    </div>
    <div className="project coming-soon">
     <a href="[Dead Link]" className="project-link">
    <div className="project-content">
      <div className="project-image">
        <img src={Waits} alt="Coming Soon" className="blurred-image" />
      </div>
      <div className="project-info blurred">
        <h2 className="project-title">Wait Times</h2>
        <p className="project-description">Want to see wait times?</p>
      </div>
    </div>
  </a>
  <div className="coming-soon-overlay">
    <h2 className="coming-soon-message">Coming Soon: Theme Park Wait Times</h2>
  </div>
</div>
  <div className="buttons">
      <a 
      href="/Ral_Resume.pdf" 
      className="download-button"
      download="Ral_Resume.pdf"
      >Download Resume</a>
  </div>  
  <div className="contact">
    <a href="https://github.com/RalHooper" className="square-button">
      <img src={github} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/raleigh-hooper/" className="square-button">
      <img src={linkedin} alt="LinkedIn" />
    </a>
</div>
   </div>
  </div>
  );
}

export default App;
