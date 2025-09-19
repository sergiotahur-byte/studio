import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Consulta Express',
    price: '$70',
    description: 'Para dudas puntuales y orientación rápida.',
    features: [
      'Videollamada de 30 minutos',
      'Resolución de una duda concreta',
      'Análisis verbal preliminar',
      'Revisión del contrato de arrendamiento y sus anexos',
      'Acción prejudicial',
    ],
    isPopular: false,
    cta: 'Comprar Consulta',
    stripeLink: '#',
  },
  {
    name: 'Consulta Estratégica',
    price: '$125',
    description: 'Análisis profundo y plan de acción detallado.',
    features: [
      'Videollamada de 60 minutos',
      'Análisis de los documentos asociados al arrendamiento',
      'Propuesta de estrategia legal',
      'Resolución de hasta 3 dudas',
      'Acciones prejudiciales y extrajudiciales',
      'Acompañamiento personalizado',
    ],
    isPopular: true,
    cta: 'Comprar Consulta',
    stripeLink: '#',
  },
  {
    name: 'Revisión de Contrato',
    price: '$100',
    description: 'Garantiza la legalidad y equidad de tu contrato.',
    features: [
      'Revisión exhaustiva de contrato de arriendo',
      'Informe escrito con cláusulas a modificar',
      'Propuesta de redacción alternativa',
      'Llamada de 15 min. para resolver dudas',
      'Suministro de contratos de arrendamiento y documentos complementarios dependiendo del perfil del arrendador',
    ],
    isPopular: false,
    cta: 'Comprar Consulta',
    stripeLink: '#',
  },
];

export default function ConsultationPackages() {
  return (
    <section id="consultas" className="section-padding bg-white-a05">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Paquetes de Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Elija la consulta que mejor se adapte a sus necesidades para obtener asesoramiento legal experto.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex flex-col bg-white-a05 border-white-a10 rounded-xl shadow-lg transition-transform duration-300 ${
                pkg.isPopular ? 'border-accent shadow-accent/20 lg:scale-105' : 'hover:-translate-y-2'
              }`}
            >
              {pkg.isPopular && (
                <div className="bg-accent text-accent-foreground text-sm font-bold text-center py-1 rounded-t-xl">
                  MÁS POPULAR
                </div>
              )}
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold font-headline">{pkg.name}</CardTitle>
                <CardDescription className="text-foreground/70">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold">{pkg.price}</span>
                  <span className="text-foreground/70"> USD</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button asChild size="lg" className={`w-full ${pkg.isPopular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                  <a href={pkg.stripeLink}>{pkg.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
