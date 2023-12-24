import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  title: "Portfolio Dashboard",
  apiVersion: "2023-12-24",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
