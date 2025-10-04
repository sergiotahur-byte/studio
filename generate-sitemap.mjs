
import fs from 'fs';
import { blogPosts } from './src/lib/blog-posts.ts';

const siteUrl = 'https://www.recuperacionesjuridicas.lat';

function generateSitemap() {
  const mainRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/terminos-de-servicio`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const allRoutes = [...mainRoutes, ...blogPages];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.lastModified}</lastmod>
      <changefreq>${route.changeFrequency}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemapContent);
  console.log('Sitemap generated successfully in public/sitemap.xml');
}

generateSitemap();
