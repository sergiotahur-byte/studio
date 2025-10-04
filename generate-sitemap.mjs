
import fs from 'fs';
import { blogPosts } from './src/lib/blog-posts.js';

const DOMAIN = 'https://www.recuperacionesjuridicas.lat';

function generateSitemap() {
  const staticPages = [
    '/',
    '/politica-de-privacidad',
    '/terminos-de-servicio',
    '/gracias',
  ];

  const staticUrls = staticPages.map(page => `
    <url>
      <loc>${DOMAIN}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>`);
  
  const blogUrls = blogPosts.map(post => `
    <url>
      <loc>${DOMAIN}/blog/${post.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join('')}
  ${blogUrls.join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
