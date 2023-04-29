import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import "../styles/ProjectDisplay.scss";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <strong>Skills:</strong> {project.skills}
      </p>
      <div className="urls">
        <IconButton href={project.github} target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href={project.url} target="_blank">
          <LinkIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ProjectDisplay;
