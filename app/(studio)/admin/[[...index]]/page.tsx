import { Admin } from "./Admin";

// Ensures the Studio route is statically generated
export const dynamic = "force-static";

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from "next-sanity/studio/metadata";
export { viewport } from "next-sanity/studio/viewport";

export default function AdminPage() {
  return <Admin />;
}
