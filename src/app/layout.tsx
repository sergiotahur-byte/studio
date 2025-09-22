import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ParticleBackground from '@/components/animations/particle-background';
import WhatsAppButton from '@/components/layout/whatsapp-button';

export const metadata: Metadata = {
  title: 'Recuperaciones Jurídicas',
  description: 'Expertos en recuperación de inmuebles y defensa de propietarios en Colombia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased relative">
        <ParticleBackground />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
