const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "resume",
      title: "Resume",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub",
      type: "url",
    },
    {
      name: "leetcode",
      title: "LeetCode",
      type: "url",
    },
  ],
};

export default profile;
