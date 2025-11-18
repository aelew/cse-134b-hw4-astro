import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
  const recipes = await getCollection('recipes');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: recipes.map((recipe) => ({
      ...recipe.data,
      link: `/recipes/${recipe.id}/`
    }))
  });
}
