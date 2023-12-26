import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-12-24",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-12-24",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      url,
      description
    }`,
    { slug }
  );
}
