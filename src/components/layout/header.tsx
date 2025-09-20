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

// Base64 encoded logo
const logoSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8QEA8QDw8PDg8ODw8QEBAQEA8PFREWFhYVFhMYHSggGBolGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysfFR0rLS0rLSstLSstLSstKy0tKy0rLSstLS0tLS0tLS0tKy0rLS0rLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADcQAAIBAgQDBgQEBgMAAAAAAAABAgMRBCExBRJBUWEGEyJxgZGhFDKxwdFS4fAVIyQzU/FicoL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQEAAgICAgMBAAAAAAAAAQIREiExA0FRBBMiMmFC/9v/AASg4JptJNNOzT1TXYpAEYKMd5PzZpTjH3m/RfcC6V01Zq6fR9CnKCksrSfcD42e2j9yS/UqjSjH4Vfv3fmwLpFSSyuz7EciWo0ozVpK/fqvJlU6MI/CkvN7v5sD4LNWvayu/IvRoSm7RXq9kvNhSpxmkmrpaLo/NDhCMVZJRW6S0AxhSjBWWret236spAAUAAAAAAAAAAAAAAAAAAAAAAAAAEACIyazK6fVPQqdKE/iS89n80VqjKLvF3XR/ozOpxbV0mntbVAfKpSlHWSa8zSnTlP4Vfv2XzY5Qoylu0uz1f4L4Uow+GNvXu/NgMI0Yx11l3f4LAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAIAUAigAQAogKAAAEACIyUldOzXRqzKdKlN3lFN9dpea0YpZmnunqt9iL0JxeZNrrfR+qAwlh4PZteln+BRLDuPtRe/Xf1Zq4prZp+aFODvlejd0ugHNk4yV07NdU7MpRgpNtKzaTdt7LQZzoRlrs+8Xb+hq/Qmt4prvb9GQcknZ2vZ3V97Pcu4UJTdopv8F5sVTDKXxxS7x1/I0hRhDSOr7vX8AcYUYQ1jr3er+y/JYAFAAAAAAAAAAAAAAAAAAAAAAAAAABAUAIAUAAAEACAFABABQAgBQAAAAAAAAAAAEUAKAAAAAAAoCAFAAAAAAAAAAAAAAAUABCgADpYDB4at/kl/tk0MLWf+GXzS/mjeAcpYXErdw+bf8AIrlgK6+zL1Tj+jOgA5csJXWzpyXk0yqOHqSlaMZN9kmzpagHKjgKy+KP1kl+rNI4LEx+xJf4ZNe7Z0ABzlhK63pyfk0yrg6v8AkS/2s6YgDkzwtaHtxkvNafeUexq2zcsl73wu/e+h1zGFWE9pRb6X1Xk+gHLjTqTlaKlKT2SV2XwwleW6a82l+rNI4amviTl5WX4ZasLSTvlfzbf5gccMDf/ABJLyjH/AFMyhgKS+JSn5uS/KNsA5scHSj9WLfdty/NjSNOEdopLySQqAIoAAAAAAAAAAAAAAAAAAAAAIACgAAAAIACgAABAoAIAAUEUAAFABQAAAAAAAQAUAEAUAAAAAAAAAAAAAAABAoAigAAAACgAgBQAAAAAAUEAKACAAAAAAAAAAAAAAAAAAAAAAAAAAAAigAAAoAIAUAAAAAAAAAABQAgBQAAAAAAAAAAEAUAAARQAAUAEAFAAAABAUAEAKAAAAAAAAAAigAP/2Q==";

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
            <img src={logoSrc} alt="Recuperaciones Jurídicas Logo" width={40} height={40} className="rounded-md" />
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
