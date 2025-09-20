import Link from 'next/link';

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM50 8.33333C73.0122 8.33333 91.6667 26.9878 91.6667 50C91.6667 73.0122 73.0122 91.6667 50 91.6667C26.9878 91.6667 8.33333 73.0122 8.33333 50C8.33333 26.9878 26.9878 8.33333 50 8.33333ZM50 25L25 37.5V62.5L50 75L75 62.5V37.5L50 25ZM50 32.125L66.6667 41.25V58.75L50 67.875L33.3333 58.75V41.25L50 32.125Z" fill="hsl(var(--accent))"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white-a05 border-t border-white-a10">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-lg font-headline">Recuperaciones Jurídicas</span>
          </div>
          <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Recuperaciones Jurídicas. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Política de Privacidad</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
