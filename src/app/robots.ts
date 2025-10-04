import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.recuperacionesjuridicas.lat';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/gracias'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
