import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Home, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: 'Recuperación de Inmuebles',
    description: 'Gestionamos rápida y eficientemente la restitución de inmuebles arrendados, recuperando tu propiedad frente a arrendatarios morosos o incumplidos.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Defensa del Arrendador',
    description: 'Lo defendemos ante cualquier disputa legal, protegiendo sus derechos como propietario y asegurando el cumplimiento del contrato para su tranquilidad.',
  },
  {
    icon: <Gavel className="h-10 w-10 text-accent" />,
    title: 'Asesoría en Contratos',
    description: 'Revisamos y redactamos contratos de arrendamiento sólidos para prevenir futuros conflictos y garantizar su seguridad jurídica.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Nuestros Servicios Jurídicos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/90">
            Soluciones legales a la medida de los propietarios para proteger su patrimonio en Colombia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card text-center flex flex-col items-center p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="p-0 mb-4">
                {service.icon}
                <CardTitle className="mt-4 text-2xl font-bold font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/90">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
