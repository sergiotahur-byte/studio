import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GraciasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto text-center shadow-lg border-white/10">
            <CardHeader>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <CardTitle className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline mt-4">
                ¡Gracias por tu compra!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-foreground/90">
                Hemos recibido tu pago exitosamente. Un especialista de nuestro equipo se pondrá en contacto contigo en las próximas 24 horas hábiles para agendar tu consulta o iniciar la gestión de tu servicio.
              </p>
              <p className="text-muted-foreground">
                Recibirás una copia de la confirmación en tu correo electrónico. Si tienes alguna pregunta, no dudes en contactarnos.
              </p>
              <Button asChild>
                <Link href="/">
                  Volver a la página de inicio
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
