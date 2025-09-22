'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Análisis IA', href: '#analisis-ia' },
  { name: 'Consultas', href: '#consultas' },
  { name: 'Blog', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
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
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          <Link href="/" className="flex flex-col items-center gap-2 text-xl font-bold text-foreground">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a"
                alt="Recuperaciones Jurídicas Logo"
                width={96}
                height={96}
                className="h-24 w-24 object-contain"
              />
            <span className="sm:inline text-2xl">Recuperaciones Jurídicas</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild>
                <Link href={link.href} className="text-foreground/80 hover:text-foreground text-sm">
                  {link.name}
                </Link>
              </Button>
            ))}
             <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contacto">Consulta Gratuita</a>
            </Button>
          </nav>
          
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
}
