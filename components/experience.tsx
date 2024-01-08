"use client";

import { Fragment, useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import LoadingSpinner from "./loading-spinner";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CgWorkAlt } from "react-icons/cg";

import "react-vertical-timeline-component/style.min.css";
import { getExperiences } from "@/sanity/sanity-utils";
import { Experience as ExperienceType } from "@/types/Experience";
import { PortableText } from "@portabletext/react";

const getExperienceDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate).getFullYear();

  if (endDate === null) {
    return `${start} - Present`;
  }

  const end = new Date(endDate).getFullYear();

  return `${start} - ${end}`;
};

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceType[] | []>([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const data = await getExperiences();
      setExperiences(data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  return (
    <Fragment>
      {experiences.length > 0 ? (
        <section id="experience">
          <SectionHeading>Experience</SectionHeading>
          <VerticalTimeline lineColor="">
            {experiences.map((experience, index) => (
              <Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                  }}
                  date={getExperienceDate(
                    experience.startDate,
                    experience.endDate
                  )}
                  icon={<CgWorkAlt />}
                  iconStyle={{
                    background: "white",
                    fontSize: "1.5rem",
                  }}
                  visible={true}
                >
                  <h3 className="font-semibold capitalize">
                    {experience.jobTitle}
                  </h3>
                  <p className="font-normal !mt-0">{experience.company}</p>
                  <p className="!mt-1 !font-normal text-gray-700">
                    <PortableText value={experience.description} />
                  </p>
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
