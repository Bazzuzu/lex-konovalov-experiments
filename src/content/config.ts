import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cover: z.string(),
        tags: z.array(z.string()),
        role: z.string().optional(),
        period: z.string().optional(),
        publishDate: z.date().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    projects,
};
