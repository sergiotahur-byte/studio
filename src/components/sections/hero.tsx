import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground tracking-tighter mb-6 font-headline leading-tight">
            Defendemos su Propiedad. Recuperamos su Tranquilidad.
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-foreground/80 mb-10">
            Expertos en recuperación de inmuebles y defensa de propietarios en Colombia. Analice su contrato de arriendo con nuestra IA y obtenga una consulta legal especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-8">
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Agendar Consulta Inicial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg py-7 px-8 hover:bg-secondary">
              <Link href="#analisis-ia">
                Analizar Documento
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
