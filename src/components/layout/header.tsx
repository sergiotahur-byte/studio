'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Análisis IA', href: '#analisis-ia' },
  { name: 'Consultas', href: '#consultas' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-white-a10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.imgur.com/gOFq33q.jpeg" alt="Recuperaciones Jurídicas Logo" width={40} height={40} className="rounded-md" />
            <span className="font-headline">Recuperaciones Jurídicas</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild>
                <Link href={link.href} className="text-foreground/80 hover:text-foreground">
                  {link.name}
                </Link>
              </Button>
            ))}
          </nav>
          
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#contacto">Consulta Gratuita</a>
          </Button>

          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
}
