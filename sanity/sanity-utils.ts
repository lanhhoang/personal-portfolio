import { Experience } from "@/types/Experience";
import { Page } from "@/types/Page";
import { Profile } from "@/types/Profile";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      description,
      tags
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      description,
      tags
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }
    `
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }
    `,
    { slug }
  );
}

export async function getProfile(slug: string): Promise<Profile> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "profile" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        intro,
        about,
        skills,
        resume,
        linkedin,
        github,
        leetcode
      }
    `,
    { slug }
  );
}

export async function getExperiences(): Promise<Experience[]> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "experience"] | order(_createdAt desc) {
        _id,
        _createdAt,
        company,
        jobTitle,
        "slug": slug.current,
        location,
        startDate,
        endDate,
        description,
        skills
      }
    `
  );
}
