
import fs from 'fs';
import path from 'path';

// Importa las rutas del blog de forma compatible con .mjs
const blogPostsPath = path.resolve(process.cwd(), 'src/lib/blog-posts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

// Extraer los slugs de los blog posts usando una expresión regular
// Esto evita problemas de importación entre módulos ES y CommonJS
const blogSlugs = [];
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = slugRegex.exec(blogPostsContent)) !== null) {
  blogSlugs.push(match[1]);
}

const generateSitemap = async () => {
  const domain = 'https://www.recuperacionesjuridicas.lat';

  const staticPages = [
    '',
    '/politica-de-privacidad',
    '/terminos-de-servicio',
    '/gracias',
  ];

  const blogPages = blogSlugs.map(slug => `/blog/${slug}`);

  const allPages = [...staticPages, ...blogPages];

  const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (url) => `
    <url>
      <loc>${`${domain}${url}`}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${url === '' ? '1.0' : url.startsWith('/blog/') ? '0.9' : '0.7'}</priority>
    </url>
  `
    )
    .join('')}
</urlset>
  `.trim();

  try {
    const publicDir = path.resolve(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log('sitemap.xml generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
