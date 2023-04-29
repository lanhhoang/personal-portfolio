import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from "@material-ui/icons/Code";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton href="https://www.linkedin.com/in/lanh" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/lanhhoang" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://leetcode.com/lanhhoang" target="_blank">
          <CodeIcon />
        </IconButton>
      </div>
      <p>&copy; 2023 lukash.dev</p>
    </div>
  );
}

export default Footer;
