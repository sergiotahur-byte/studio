import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ParticleBackground from '@/components/animations/particle-background';
import WhatsAppButton from '@/components/layout/whatsapp-button';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
    <html lang="es-CO">
      <body className={`${inter.variable} font-body antialiased relative`}>
        <ParticleBackground />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
