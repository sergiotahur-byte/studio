import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.recuperacionesjuridicas.lat';

  const staticRoutes = [
    '',
    '/blog',
    '/gracias',
    '/politica-de-privacidad',
    '/terminos-de-servicio',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogPostRoutes];
}
