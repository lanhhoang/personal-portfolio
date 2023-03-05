import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Lukas</h2>
        <div className="prompt">
          <p>A software developer with a passion for leaning and creating</p>
          <IconButton href="https://github.com/lanhhoang" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/lanh" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://twitter.com/luka5h" target="_blank">
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, Angular, HTML, CSS, NPM, Yarn, Bootstrap, Material
              UI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Ruby on Rails, NodeJS, ExpressJS, PostgreSQL, MySQL, MongoDB, AWS,
              GCP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Ruby, Python, JavaScript, TypeScript, Java, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
