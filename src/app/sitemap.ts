// app/sitemap.ts
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://sojournerstojokesings.com'; // ← change to your domain

export default function sitemap(): MetadataRoute.Sitemap {
  // Core routes — add/remove as needed
  const staticRoutes = [
    '',
    '/about',
    // '/events',
    '/contact',
    // If you have policy pages:
    // '/privacy',
    // '/terms',
  ];

  const now = new Date();

  return staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now, // or track real dates per page
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
