
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Análisis IA', href: '/#analisis-ia' },
  { name: 'Consultas', href: '/#consultas' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Testimonios', href: '/#testimonios' },
  { name: 'Contacto', href: '/#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold text-foreground">
              <Image
                  src="https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a"
                  alt="Recuperaciones Jurídicas Logo"
                  width={192}
                  height={192}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                  priority
                />
              <span className="hidden sm:inline text-lg">Recuperaciones Jurídicas</span>
            </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild>
                <Link href={link.href} className="text-foreground/90 hover:text-foreground text-sm">
                  {link.name}
                </Link>
              </Button>
            ))}
             <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/#contacto">Consulta Gratuita</a>
            </Button>
          </nav>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 p-6">
                   <Link href="/" className="flex items-center gap-3 text-xl font-bold text-foreground mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                          src="https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a"
                          alt="Recuperaciones Jurídicas Logo"
                          width={64}
                          height={64}
                          className="h-16 w-16 object-contain"
                        />
                      <span>Recuperaciones Jurídicas</span>
                    </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg text-foreground/90 hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    <a href="/#contacto">Consulta Gratuita</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
