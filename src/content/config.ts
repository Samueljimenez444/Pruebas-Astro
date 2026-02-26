import { defineCollection,z } from "astro:content";

//z -> zod schema

const projects = defineCollection({
schema : z.object({
    title: z.string(),
    author: z.string(),
    technologies: z.string(),
    skills: z.string(),
    link: z.string(),
})
})

export const collections = {projects}