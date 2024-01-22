import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { getProfile, getProjects, getExperiences } from "@/sanity/sanity-utils";

export default async function Home() {
  const profile = await getProfile("lucas");
  const projects = await getProjects();
  const experiences = await getExperiences();

  return (
    <main className="flex flex-col items-center px-4">
      <Intro profile={profile} />
      <SectionDivider />
      <About profile={profile} />
      <Projects projects={projects} />
      <Skills profile={profile} />
      <Experience experiences={experiences} />
      <Contact />
    </main>
  );
}
