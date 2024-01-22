"use client";

import { Fragment } from "react";
import SectionHeading from "./section-heading";
import LoadingSpinner from "./loading-spinner";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

import { Profile } from "@/types/Profile";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type SkillsProps = { profile: Profile };

export default function Skills({ profile }: SkillsProps) {
  const { ref } = useSectionInView("Skills");

  return (
    <Fragment>
      {profile ? (
        <section
          ref={ref}
          id="skills"
          className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
          <SectionHeading>Skills</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {profile.skills.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
}
