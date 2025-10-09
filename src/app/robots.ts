// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://sojournerstojokesings.com';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
