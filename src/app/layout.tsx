
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ParticleBackground from '@/components/animations/particle-background';
import WhatsAppButton from '@/components/layout/whatsapp-button';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.recuperacionesjuridicas.lat'),
  title: 'Recuperaciones Jurídicas | Expertos en Derecho Inmobiliario en Colombia',
  description: 'Asesoría legal experta en recuperación de inmuebles, defensa de propietarios y contratos de arriendo en Colombia. Analice su contrato con nuestra IA.',
  keywords: [
    'recuperacion de inmuebles',
    'abogados inmobiliarios colombia',
    'restitucion de inmueble arrendado',
    'defensa de propietarios',
    'contrato de arrendamiento',
    'asesoria legal arriendos',
    'recuperaciones juridicas',
  ],
  openGraph: {
    title: 'Recuperaciones Jurídicas | Expertos en Derecho Inmobiliario',
    description: 'Soluciones legales para propietarios en Colombia. Protegemos su patrimonio y recuperamos su tranquilidad.',
    url: 'https://www.recuperacionesjuridicas.lat',
    siteName: 'Recuperaciones Jurídicas',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Logo de Recuperaciones Jurídicas',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recuperaciones Jurídicas | Expertos en Derecho Inmobiliario',
    description: 'Asesoría legal experta en recuperación de inmuebles y contratos de arriendo en Colombia.',
     images: ['https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'Recuperaciones Jurídicas',
  appleWebApp: {
    title: 'Recuperaciones Jurídicas',
    statusBarStyle: 'default',
    capable: true,
  },
  alternates: {
    canonical: 'https://www.recuperacionesjuridicas.lat',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Recuperaciones Jurídicas',
  url: 'https://www.recuperacionesjuridicas.lat',
  logo: 'https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a',
  description: 'Asesoría legal experta en recuperación de inmuebles, defensa de propietarios y contratos de arriendo en Colombia.',
  telephone: '+573182806162',
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://calendly.com',
      inLanguage: 'es-CO',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/IOSPlatform',
        'http://schema.org/AndroidPlatform',
      ],
    },
    name: 'Agendar Consulta',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased relative`}>
        <ParticleBackground />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
