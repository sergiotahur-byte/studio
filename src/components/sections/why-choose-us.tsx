import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Scale } from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Equipo Experto',
    description: 'Nuestro equipo de abogados combina años de experiencia en derecho inmobiliario con un profundo conocimiento de la legislación colombiana.',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: 'Tecnología y Eficiencia',
    description: 'Utilizamos herramientas tecnológicas, como nuestro analizador de contratos con IA, para darte respuestas rápidas y precisas.',
  },
  {
    icon: <Scale className="h-10 w-10 text-accent" />,
    title: 'Enfoque Claro y Directo',
    description: 'Te ofrecemos soluciones legales sin rodeos. Nos enfocamos en proteger tus derechos de manera eficiente y segura para tu tranquilidad.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">¿Por Qué Elegirnos?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            En Recuperaciones Jurídicas nos comprometemos a proteger tus derechos como propietario con un enfoque legal claro y eficiente. Nuestro equipo de expertos combina experiencia y tecnología para ofrecerte soluciones rápidas y seguras en recuperación de inmuebles y manejo de contratos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card text-center flex flex-col items-center p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="p-0 mb-4">
                {feature.icon}
                <CardTitle className="mt-4 text-2xl font-bold font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}