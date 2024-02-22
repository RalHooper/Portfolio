import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import resumeFile from '../components/Ral_Resume.pdf';
import homeImage from '../images/Room_9343.jpg';
import './Home.css'; 

function Home() {
  useEffect(() => {
  const typeText = (element, text) => {
    let index = 0;
    const typingAnimation = () => {
      if (index <= text.length) {
        element.textContent = text.slice(0, index);
        index++;
        setTimeout(typingAnimation, 100); // Typing speed (adjust as needed)
      }
    };
    typingAnimation();
  };

  const homeIntroElement = document.querySelector('.homeIntro');
  const homeDescriptionElement = document.querySelector('.homeDescription');

  const homeIntroText = homeIntroElement.getAttribute('data-text');
  const homeDescriptionText = homeDescriptionElement.getAttribute('data-text');

  typeText(homeIntroElement, homeIntroText); // Start typing for homeIntro

  setTimeout(() => {
    console.log("Removing hidden class from homeDescription");
    homeDescriptionElement.classList.remove('hidden'); // Reveal homeDescription
    typeText(homeDescriptionElement, homeDescriptionText); // Start typing for homeDescription
  }, homeIntroText.length * 100 + 1500); 
}, []);

  function handleDownloadResume() {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'Ral_Resume.pdf'; // Set the filename for the downloaded file
        link.click();
    }

  
   return (
      <div>
         <div className="background"> 
            <div className="contentContainer">
               <div className="nav">
                  <Link to="/about" className="navLink">About Me</Link>
                  <Link to="/home" className="navLink">Home</Link>
                  <Link to="/skills" className="navLink">Skills</Link>
                  <Link to="/projects" className="navLink">Projects</Link>
               </div>
               <div className="content">
                  <h1 className="homeIntro typing-animation" data-text="Hi, I'm Raleigh!">Hi, I'm Raleigh!</h1>
                  <p className="homeDescription hidden typing-animation" data-text="I am a Web Developer."></p>
                  <h3>See what I'm about!</h3>
                  <button className="resumeButton" onClick={handleDownloadResume}>
                    Download Resume
                  </button>
                  <div className="contactSection">
                    <b>Contact Me:</b>
                    <div className="contactEmail">raleigh.hooper@yahoo.com</div>
                  </div>
                  <div className="homeImageContainer">
                    <img src={homeImage} alt="Room" className="homeImage" />
                  <div className="shadow"></div>
                </div>
                  <div className="footer">
                     <a href="https://github.com/RalHooper" className="socialButton">
                      <img src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/raleigh-hooper/" className="socialButton">
                      <img src={linkedin} alt="LinkedIn" />
                    </a>
                 </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;