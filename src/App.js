import Navbar from './Navbar.js';
import './App.css';
import rollSimPic from './Images/TFT_rollSim_pic.jpg';
import bonusbotPic from './Images/Bonusbot_pic.jpg';
import profilePic from './Images/temp-profpic.png';
import githubLogo from './Images/GitHub_logo.png';
import resume from './Resume2.pdf';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body style={{width: "60%", margin: "auto", marginTop: "3.5rem"}}>
        <section id='aboutme'>
          <br />
          <br />
          <h1>About Me</h1>
          <div style={{ backgroundColor: "#C5F8FF", display: "flex", flexDirection: "row", width: "100%", alignItems: "center"}}>
            <div style={{width: "80%", padding: "2rem"}}>
              <h3>Hi there! </h3><p>My name is Matthew, and I'm a senior at Plano West Senior High School pursuing a computer science major in college. I'm interested in web development and building fun and challenging projects. In my free time, I enjoy reading and playing the cello.</p>
              <h3>Languages and frameworks: </h3>
              <ul>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Python</li>
              </ul>
            </div>
            <img src={profilePic} style={{width: "10%", paddingLeft: "5rem", paddingRight: "2rem"}} alt='Pic of me' />
          </div>
        </section>
        <section id='projects'>
          <br />
          <br />
          <h1>Projects</h1>
          <div style={{backgroundColor: "#C5F8FF"}}>
            <h2>TFT Roll Simulator: </h2>
            <div className='project'>
              <div style={{width: "80%"}}>
                <p>This was my first web application. It simulates the rolling mechanic in Teamfight Tactics, a popular strategy auto-chess game. Rolling quickly and efficiently is an integral aspect of the game, but players only have one or two opportunities in a 40-minute match to do so. The goal of this application is to provide an environment where players can frequently and efficiently practice rolling to improve their speed and accuracy in game. I used HTML, CSS, Javascript, and React to build this application, along with Photoshop and Audacity to generate the graphics and audio.</p>
                <h4 style={{display: "flex", alignItems: "center"}}>Github link: <a href='https://github.com/mlin55/TFT-Rolling-Simulator' target='_blank'><img src = {githubLogo} style={{width: "2rem", padding: 0}}/></a></h4>
              </div>
              <img style={{width: "20rem",height: "15rem", padding: "3rem"}} src={rollSimPic} alt='Pic of project' />
            </div>
            <h2>Bonus Bot for Quizbowl: </h2>
            <div className='project'>
              <div style={{width: "80%"}}>
                <p>I built this project as a practice tool for my school's quizbowl club. It functions as a Discord bot that automatically pulls bonuses (a type of question in quizbowl) from a database of over 40,000 questions and reads them to the player, thus eliminating the need for a human reader. Statistics such as the number of bonuses heard and the player's average points per bonus are compiled and updated throughout the session. I built this project using Java Discord API and Python.</p>
                <h4 style={{display: "flex", alignItems: "center"}}>Github link: <a href='https://github.com/mlin55/Discord-Quizbowl-Bonus-Bot' target='_blank'><img src = {githubLogo} style={{width: "2rem", padding: 0}}/></a></h4>
              </div>
                <img style={{width: "20rem",height: "15rem", paddingLeft: "3rem", paddingRight: "3rem", paddingBottom: "2rem"}} src={bonusbotPic} alt='Pic of project' />
            </div>
          </div>
        </section>
        <section id='resume'>
          <h1>Resume</h1>
          <iframe src={resume} style={{width: "100%", height: "60rem"}}/>
        </section>
        <section id='contact'>
          <h1>Contact: </h1>
          <div style={{backgroundColor: "#C5F8FF", padding: "1rem", fontSize: "1.2rem"}}>
            <p><b>Phone Number:</b> 469-534-4373</p>
            <p><b>Email:</b> <a style={{textDecoration: "none", color: "#0099ff"}} href='mailto: mlin2278@gmail.com' target='_blank'>mlin2778@gmail.com</a></p>
            <p><b>Github:</b><a style={{textDecoration: "none", color: "#0099ff"}} href='https://github.com/mlin55' target='_blank'> mlin55</a></p>
          </div>
        </section>
      </body>
      <footer>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#69c6ea", width: "100%", marginTop: "3rem", fontSize: "1.1rem", color: "#344A53"}}>
          <p>Designed and built by Matthew Lin, 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
