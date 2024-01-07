import { PortableTextBlock } from "sanity";

export type Experience = {
  _id: string;
  _createdAt: Date;
  company: string;
  jobTitle: string;
  slug: string;
  location: string;
  startDate: string;
  endDate: string;
  description: PortableTextBlock[];
  skills: string[];
};
