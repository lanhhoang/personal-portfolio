"use client";

import { Fragment } from "react";
import SectionHeading from "./section-heading";
import LoadingSpinner from "./loading-spinner";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CgWorkAlt } from "react-icons/cg";

import "react-vertical-timeline-component/style.min.css";

import { Experience as ExperienceType } from "@/types/Experience";
import { PortableText } from "@portabletext/react";
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/theme-context";

const getExperienceDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate).getFullYear();

  if (endDate === null) {
    return `${start} - Present`;
  }

  const end = new Date(endDate).getFullYear();

  return `${start} - ${end}`;
};

type ExperienceProps = { experiences: ExperienceType[] };

export default function Experience({ experiences }: ExperienceProps) {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();

  return (
    <Fragment>
      {experiences.length > 0 ? (
        <section
          ref={ref}
          id="experience"
          className="scroll-mt-28 mb-28 sm:mb-40"
        >
          <SectionHeading>Experience</SectionHeading>
          <VerticalTimeline lineColor="">
            {experiences.map((experience, index) => (
              <Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background:
                      theme === "light"
                        ? "#f3f4f6"
                        : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.05)",
                  }}
                  date={getExperienceDate(
                    experience.startDate,
                    experience.endDate
                  )}
                  icon={<CgWorkAlt />}
                  iconStyle={{
                    background:
                      theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}
                  visible={true}
                >
                  <h3 className="font-semibold capitalize">
                    {experience.jobTitle}
                  </h3>
                  <p className="font-normal !mt-0">{experience.company}</p>
                  <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    <PortableText value={experience.description} />
                  </div>
                </VerticalTimelineElement>
              </Fragment>
            ))}
          </VerticalTimeline>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
}
