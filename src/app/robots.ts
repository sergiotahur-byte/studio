import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/gracias', // No es necesario indexar la página de agradecimiento
    },
    sitemap: 'https://www.recuperacionesjuridicas.lat/sitemap.xml',
  };
}
