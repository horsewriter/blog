import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Alex Mejía'),
    tags: z.array(z.string()).default([]),
    category: z.enum(['short-story', 'chronicle', 'essay', 'reflection']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const quotes = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string().optional(),
    source: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  quotes,
};