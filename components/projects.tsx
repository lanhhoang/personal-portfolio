"use client";

import { Fragment, useState, useEffect } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { getProjects } from "@/sanity/sanity-utils";
import { Project as ProjectType } from "@/types/Project";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[] | []>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <Fragment key={index}>
            <Project project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
