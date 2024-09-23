import { z } from "astro/zod";
import {
  reference,
  type CollectionEntry,
} from "astro:content";

const component = (filename: CollectionEntry<"sections">["slug"]) =>
    z.literal(filename);

export const textSchema = z.object({
    component: component("text"),
    text_content: z.string(),
    style: z.string().optional(),
  });