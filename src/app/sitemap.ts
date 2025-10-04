import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.recuperacionesjuridicas.lat';

  // Rutas estáticas
  const staticRoutes = [
    '',
    '/gracias',
    '/politica-de-privacidad',
    '/terminos-de-servicio',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Rutas dinámicas del blog
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
