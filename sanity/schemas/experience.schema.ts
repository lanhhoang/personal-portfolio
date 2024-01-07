const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: { jobTitle: string; company: string }, _: {}) =>
          `${doc.jobTitle}-${doc.company}`,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MMM YYYY",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMM YYYY",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default experience;
