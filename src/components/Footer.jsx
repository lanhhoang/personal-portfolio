import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>&copy; 2023 lukash.dev</p>
    </div>
  );
}

export default Footer;
