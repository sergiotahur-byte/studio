import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-3">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.firebasestorage.app/o/logo.png1.jpg?alt=media&token=bc9760bf-8837-4b16-b1ce-714472abec2a"
                alt="Recuperaciones Jurídicas Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            <span className="font-bold text-lg font-headline">Recuperaciones Jurídicas</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Recuperaciones Jurídicas. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidad</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
