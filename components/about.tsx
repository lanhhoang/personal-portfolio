"use client";

import { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import LoadingSpinner from "./loading-spinner";
import { motion } from "framer-motion";
import { Profile } from "@/types/Profile";
import { getProfile } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { ref } = useSectionInView("About");

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
    <div>
      {profile ? (
        <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
        >
          <SectionHeading>About me</SectionHeading>
          <div className="mb-3">
            <PortableText value={profile.about} />
          </div>
        </motion.section>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
