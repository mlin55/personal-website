import Navbar from './components/Navbar';
import ProjectDisplay from './components/ProjectDisplay';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';

import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';

import './styles.css';

import guessthecityPic from './images/guessthecity.jpg';
import rollSimPic from './images/TFT_rollSim_pic.jpg';
import bonusbotPic from './images/Bonusbot_pic.jpg';
import profilePic from './images/temp-profpic.png';
import aboutmeBkgrnd from './images/aboutme-background.png';
import projectBkgrnd from './images/projects-background.jpeg';
import resumeBkgrnd from './images/resume-background.jpeg';
import contactBkgrnd from './images/contact-background.webp';

import resume from './Resume.pdf';



function App() {

  const handleClick = () => {

  }
  
  return (
    <div className="App">
      <Navbar />
      <body style={{margin: "auto", marginTop: "3.5rem"}}>
        <div className='section-header-container' style={{backgroundImage: `url(${aboutmeBkgrnd})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className='section-header-overlay'>
              <h1  style={{color: 'white', fontSize: '3rem'}}>Hey there! I'm Matthew.</h1>
              <h2  style={{color: 'white', fontSize: '1.7rem'}}>Welcome to my website!</h2>
          </div>
        </div>
        <section id='aboutme'>
          <div className='section-body'>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center"}}>
              <div style={{width: "80%", padding: "2rem"}}>
                <h3>About me </h3><p>I'm a student studying computer science at the University of Texas at Austin, as well as an aspiring software engineer. I'm interested in full-stack web development and leveraging my skills to build fun and challenging projects. In my free time, I enjoy reading, playing the cello, and going on long bike rides with friends.</p>
                <h3>Proficient in: </h3>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                  <li>MERN stack</li>
                  <li>React/Redux</li>
                </ul>
              </div>
              <img src={profilePic} style={{width: "10%", paddingLeft: "5rem", paddingRight: "2rem"}} alt='Pic of me' />
            </div>
          </div>
        </section>
        <SectionHeader 
          title='Projects'
          image={projectBkgrnd}
        />
        <section id='projects'>
          <div className='section-body'>
            <div>
              <h2>Guess the City</h2>
              <div className='project'>
                <div style={{width: "80%"}}>
                  <p>A fullstack web-based quiz game. The player is shown pictures of city skylines and has to guess which city is being portrayed in each image, with a score assigned based on their accuracy. It also includes functionality to add new cities to the quiz, provided they have not already been added. I built it using the MERN (MongoDB, Express, React, Node) stack, and hosted the backend using Heroku and the frontend using Netlify.</p>
                  <p><strong>Note:</strong> Because Heroku's free tier automatically hibernates the app after a set period of time, you will have to activate the server by clicking <a href='https://guess-the-city.herokuapp.com' target='_blank'>here</a> before using the live demo.</p>
                  <a className='project-tag' href= 'https://github.com/mlin55/Guess-the-City' target='_blank'><Chip icon={<GitHubIcon />} color='primary' label='Github link' onClick={handleClick} /></a>
                  <a className='project-tag' href='https://guess-the-city.netlify.app' target='_blank'><Chip color='primary' label='Live demo' onClick={handleClick} /></a>
                </div>
                <img style={{width: "20rem",height: "15rem", padding: "3rem"}} src={guessthecityPic} alt='Pic of project' />
              </div>
            </div>
            <ProjectDisplay 
              title='TFT Roll Simulator:'
              description='This was my first web application. It simulates the rolling mechanic in Teamfight Tactics, a popular strategy auto-chess game. Rolling quickly and efficiently is an integral aspect of the game, but players only have one or two opportunities in a 40-minute match to do so. The goal of this application is to provide an environment where players can frequently and efficiently practice rolling to improve their speed and accuracy in game. I used HTML, CSS, Javascript, and React to build this application, along with Photoshop and Audacity to generate the graphics and audio.'
              githubLink='https://github.com/mlin55/TFT-Rolling-Simulator'
              pic={rollSimPic}
              demoLink='https://tftroll.surge.sh'
            />
            <ProjectDisplay
              title='Bonus Bot for Quizbowl:'
              description="I built this project as a practice tool for my school's quizbowl club. It functions as a Discord bot that automatically pulls bonuses (a type of question in quizbowl) from a database of over 40,000 questions and reads them to the player, thus eliminating the need for a human reader. Statistics such as the number of bonuses heard and the player's average points per bonus are compiled and updated throughout the session. I built this project using Java Discord API and Python."
              githubLink='https://github.com/mlin55/Discord-Quizbowl-Bonus-Bot'
              pic={bonusbotPic}
            />
          </div>
        </section>
        <SectionHeader
          title='Resume'
          image={resumeBkgrnd}
        />
        <section id='resume'>
          <div className='section-body'>
            <iframe src={resume} style={{width: "100%", height: "60rem"}}/>
          </div>
        </section>
        <SectionHeader
          title='Contact'
          image={contactBkgrnd}
        />
        <section id='contact'>
          <div className='section-body'>
            <div style={{padding: "1rem", fontSize: "1.2rem"}}>
              <p><b>Phone Number:</b> 469-534-4373</p>
              <p><b>Email:</b> <a style={{textDecoration: "none", color: "#0099ff"}} href='mailto: mlin2278@gmail.com' target='_blank'>mlin2778@gmail.com</a></p>
              <p><b>Github:</b><a style={{textDecoration: "none", color: "#0099ff"}} href='https://github.com/mlin55' target='_blank'> mlin55</a></p>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </div>
  );
}

export default App;
