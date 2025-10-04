// generate-sitemap.mjs
import fs from 'fs';
import path from 'path';

// Import blog posts using a dynamic import because this is an ES Module
const { blogPosts } = await import('./src/lib/blog-posts.ts');

const baseUrl = 'https://www.recuperacionesjuridicas.lat';

async function generateSitemap() {
  const staticPages = [
    '',
    '/politica-de-privacidad',
    '/terminos-de-servicio',
    '/gracias',
  ];

  const staticUrls = staticPages.map(page => {
    return `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${page === '' ? '1.0' : '0.7'}</priority>
      </url>
    `;
  });

  const blogUrls = blogPosts.map(post => {
    return `
      <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join('')}
  ${blogUrls.join('')}
</urlset>`;

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap generated successfully!');
}

generateSitemap();
