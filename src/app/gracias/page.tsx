import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function GraciasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-card p-10 rounded-xl shadow-lg border-white/10">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline mb-4">¡Gracias por tu compra!</h1>
            <p className="text-lg text-foreground/90 mb-8">
              Hemos recibido tu pago exitosamente. Un especialista de nuestro equipo se pondrá en contacto contigo en las próximas 24 horas hábiles para agendar tu consulta o iniciar la gestión de tu servicio.
            </p>
            <p className="text-muted-foreground mb-8">
              Recibirás una copia de la confirmación en tu correo electrónico. Si tienes alguna pregunta, no dudes en contactarnos.
            </p>
            <Button asChild>
              <Link href="/">
                Volver a la página de inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
