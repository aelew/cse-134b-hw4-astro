import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({
    base: './src/content/recipes',
    pattern: '**/*.{md,mdx}'
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      time: z.string(),
      servings: z.number(),
      price: z.string(),
      date: z.coerce.date(),
      cover: image(),
      ingredients: z.array(z.string()),
      instructions: z.array(z.string())
    })
});

export const collections = { recipes };
