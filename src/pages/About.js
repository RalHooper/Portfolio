import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="aboutMeBackground">
      <div className="aboutMeNav">
        <Link to="/about" className="navLink">About Me</Link>
        <Link to="/home" className="navLink">Home</Link>
        <Link to="/skills" className="navLink">Skills</Link>
        <Link to="/projects" className="navLink">Projects</Link>
      </div>
      <div className="aboutMeContentContainer">
        <div className="aboutMeContent">
          <h2 className="aboutMeSectionTitle">About Me</h2>
          <div className="aboutMeEssay">
            <h2 class="aboutMeTitle">Why Web Development?</h2>
            <p>
              Imagine a curious five-year-old, wide-eyed and eager, encountering their 
              first computer – a Windows 95, if you can believe it! That child was me, 
              and from that moment, I was hooked on technology. From gaming to schoolwork 
              and eventually, professional projects, I've journeyed through different 
              operating systems, honing my technical skills along the way.
            </p>
            <p>
            While my academic journey began in film and visual media, earning an Associates 
            in Sound Media Arts, my passion for technology never faded. For three thrilling 
            years, I freelanced on various film projects, mastering audio manipulation in 
            Pro Tools and Logic. Yet, the desire for new challenges drove me to seek additional 
            training.
            </p>
            <p>
            Enter the Southern California Institute of Technology (SCIT) in 2018, where I 
            discovered my fascination with PLCs (Programmable Logic Computers). This newfound 
            interest propelled me into the world of computer programming.
            </p>
            <p>
            Post-graduation, I dove into electrical work, sharpening my problem-solving skills. 
            However, the allure of coding persisted. As I delved deeper, web development 
            captured my imagination. In 2020, amidst global turmoil, I seized the opportunity 
            to immerse myself fully in web development. From YouTube and Udemy tutorials to endless 
            cups of coffee, I honed my coding skills and crafted visually captivating software.
            </p>
            <p>
            My coding journey has been transformative, leading to diverse projects from games 
            to weather applications. Now, armed with a proven track record and boundless enthusiasm, 
            I'm ready to bring my passion and expertise to your team.</p>
            <p className="centeredLine">
              <b>Now let's collaborate and create something truly remarkable!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;