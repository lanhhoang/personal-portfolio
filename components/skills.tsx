"use client";

import { Fragment, useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import LoadingSpinner from "./loading-spinner";
import { useSectionInView } from "@/lib/hooks";
import { animate, delay, motion } from "framer-motion";

import { Profile } from "@/types/Profile";
import { getProfile } from "@/sanity/sanity-utils";

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

export default function Skills() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { ref } = useSectionInView("Skills");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile("lucas");
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

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
                className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
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
