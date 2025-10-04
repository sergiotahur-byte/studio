import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.recuperacionesjuridicas.lat';

  const mainRoutes = [
    '/',
    '/politica-de-privacidad',
    '/terminos-de-servicio',
  ];

  const mainPages = mainRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...mainPages, ...blogPages];
}
