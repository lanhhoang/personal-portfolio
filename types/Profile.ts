import { PortableTextBlock } from "sanity";

export type Profile = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  intro: PortableTextBlock[];
  about: PortableTextBlock[];
  skills: string[];
  resume: string;
  linkedin: string;
  github: string;
  leetcode: string;
};
