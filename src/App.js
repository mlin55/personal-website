import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

import "./styles.css";

import spotifyPic from "./images/Spotify.jpeg";
import guessthecityPic from "./images/guessthecity.jpg";
import rollSimPic from "./images/TFT_rollSim_pic.jpg";
import bonusbotPic from "./images/Bonusbot_pic.jpg";
import profilePic from "./images/profpic.png";
import amazonPic from "./images/amazon_logo.png";

import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Fade bottom>
        <div className="section-header-container">
          <div className="header-text">
            <h1 className="header-text-main">Hey there! I'm Matthew.</h1>
            <h2 className="header-text-sub">Welcome to my website!</h2>
            <div className="contact-icons">
              <a
                className="icon"
                href="mailto: mlin2278@gmail.com"
                target="_blank"
              >
                <i class="bi bi-envelope" style={{ color: "white" }}></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/mlin55"
                className="icon"
              >
                <i class="bi bi-github" style={{ color: "white" }}></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matthew-lin-25a02918b/"
                className="icon"
              >
                <i class="bi bi-linkedin" style={{ color: "white" }}></i>
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <section id="about-me">
          <div className="content">
            <h2 style={{ textAlign: "center" }}>
              <b>About me</b>
            </h2>
            <div className="about-me-section">
              <div className="about-me-text">
                <p>
                  I'm a rising senior pursuing a double major in computer science and mathematics at the University of Texas at Austin. I'm interested in all things software engineering and leveraging my
                  skills to build fun and challenging projects.
                </p>
                <p>Previously I've worked at:</p>
                <ul className="about-me-experience">
                  <li>
                    <b style={{ marginLeft: "0" }}>Capital One</b>, developing an external event gateway capable of handling over 1 million third party events per day
                  </li>
                </ul>
                <ul className="about-me-experience">
                  <li>
                    <b style={{ marginLeft: "0" }}>Nelnet</b>, building REST API endpoints on the backend and
                    developing responsive webpages on the frontend
                  </li>
                </ul>
                <p>
                  In my free time, I enjoy rock climbing, reading, playing guitar, and wandering the streets of Austin.
                </p>
              </div>
              <div className="pic-container">
                <img
                  src={profilePic}
                  alt="Pic of me"
                  className="about-me-picture"
                />
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade bottom>
        <section id="projects">
          <h2 style={{ textAlign: "center", color: "white" }}>
            <b>Projects</b>
          </h2>
          <div className="projects">
            <ProjectCard
              image={amazonPic}
              title="E-Commerce Product Recommender"
              description="Scrapes Amazon.com for inputted product and returns a list of top recommendations based on the user's personal preferences. Built with Selenium and Flask."
              githubLink="https://github.com/mlin55/AmazonScraper"
            />
            <ProjectCard
              image={spotifyPic}
              title="Spotify Recapped"
              description="Uses the Spotify Web API to pull data about a user's top songs, artists, and genres from various time frames. Built using an Express backend and React frontend."
              githubLink="https://github.com/mlin55/Spotify-Recapped"
              link="https://spotify-recapped.netlify.app/"
            />
            <ProjectCard
              image={guessthecityPic}
              title="Guess the City"
              description="A fullstack web-based quiz game built on the MERN stack. The player is shown pictures of city skylines and has to guess which city is being shown in each image."
              githubLink="https://github.com/mlin55/guessthecity"
              link="https://spotify-recapped.netlify.app"
            />
            <ProjectCard
              image={rollSimPic}
              title="TFT Roll Simulator"
              description="Simulates the rolling mechanic in Teamfight Tactics, a popular strategy auto-chess game. The goal is to provide an environment where players can frequently and efficiently practice rolling to improve their speed and accuracy in game."
              githubLink="https://github.com/mlin55/TFT-Rolling-Simulator"
            />
            <ProjectCard
              image={bonusbotPic}
              title="Quizbowl Bot Practice Tool"
              description="Discord bot that automatically pulls quizbowl questions from a database of over 40,000 questions and reads them to the player, thus eliminating the need for a human reader. Built with Java and Discord JDA."
              githubLink="https://github.com/mlin55/Discord-Quizbowl-Bonus-Bot"
            />
          </div>
        </section>
      </Fade>
      <footer class="page-footer" style={{ backgroundColor: "#0662a4" }}>
        <div class="container center" style={{ textAlign: "center" }}>
          <h5 class="white-text">Matthew Lin</h5>
          <span>__________</span>
          <div class="contact-icons">
            <a
              className="icon"
              href="mailto: mlin2278@gmail.com"
              target="_blank"
            >
              <i class="bi bi-envelope" style={{ color: "white" }}></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/mlin55"
              className="icon"
            >
              <i class="bi bi-github" style={{ color: "white" }}></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/matthew-lin-25a02918b/"
              className="icon"
            >
              <i class="bi bi-linkedin" style={{ color: "white" }}></i>
            </a>
          </div>
        </div>
        <div class="footer-copyright"></div>
      </footer>
    </div>
  );
}

export default App;
