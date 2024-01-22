"use client";

import { Fragment } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import LoadingSpinner from "./loading-spinner";
import { Project as ProjectType } from "@/types/Project";
import { useSectionInView } from "@/lib/hooks";

type ProjectsProps = {
  projects: ProjectType[];
};

export default function Projects({ projects }: ProjectsProps) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <Fragment>
      {projects.length > 0 ? (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
          <SectionHeading>Projects</SectionHeading>
          <div>
            {projects.map((project, index) => (
              <Fragment key={index}>
                <Project project={project} />
              </Fragment>
            ))}
          </div>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
}
