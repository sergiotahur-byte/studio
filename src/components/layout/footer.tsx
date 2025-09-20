import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white-a05 border-t border-white-a10">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <Image src="https://i.imgur.com/gOFq33q.jpeg" alt="Recuperaciones Jurídicas Logo" width={24} height={24} className="rounded-sm" />
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
