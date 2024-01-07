"use client";

import { Fragment, useState, useEffect } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { getProjects } from "@/sanity/sanity-utils";
import { Project as ProjectType } from "@/types/Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[] | []>([]);
  const { ref } = useSectionInView("Projects", 0.5);

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
    <section ref={ref} id="projects" className="scroll-mt-28">
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
