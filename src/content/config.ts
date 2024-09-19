import { z, defineCollection, reference } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: z
        .object({
          title: z.string(),
          background_image: image(),
          style: z.string(),
          inner_image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
        })
        .optional(),
      flow: z
        .array(
          z.object({
            row: reference("rows"),
            sections: z.array(
              z
                .object({
                  component: reference("sections"),
                })
                .catchall(z.any()),
            ),
          }),
        )
        .optional(),
    }),
});

const rows = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const sections = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const data = defineCollection({
  type: "data",
  schema: z.any(),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string(),
    permalink: z.string(),
    category: z.string(),
    meta: z.object({keywords: z.string()}),
    project: z.object({
      title: z.string(),
      type: z.string(),
      ci_url: z.string().optional(),
      url: z.string(),
      project_official_url: z.string().optional(),
      logo: z.string(),
      overview: z.string().optional()}),
      supported_releases: z.any().optional(),
      user_stories: z.any().optional(),
      events: z.any().optional(),
      work_items: z.any().optional(),
      project_ci: z.any().optional(),
    }),  
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
  pages,
  rows,
  sections,
  data,
  projects,
};
