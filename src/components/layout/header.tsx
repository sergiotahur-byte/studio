'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Análisis IA', href: '#analisis-ia' },
  { name: 'Consultas', href: '#consultas' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM50 8.33333C73.0122 8.33333 91.6667 26.9878 91.6667 50C91.6667 73.0122 73.0122 91.6667 50 91.6667C26.9878 91.6667 8.33333 73.0122 8.33333 50C8.33333 26.9878 26.9878 8.33333 50 8.33333ZM50 25L25 37.5V62.5L50 75L75 62.5V37.5L50 25ZM50 32.125L66.6667 41.25V58.75L50 67.875L33.3333 58.75V41.25L50 32.125Z" fill="hsl(var(--accent))"/>
  </svg>
);


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
            <Logo />
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
