import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '¿Qué hacer si el inquilino no paga?',
    description: 'Una guía paso a paso sobre las acciones legales y extrajudiciales que puedes tomar para resolver la situación de mora.',
  },
  {
    title: 'Claves para recuperar tu inmueble sin complicaciones',
    description: 'Descubre las estrategias más efectivas y los errores comunes a evitar durante un proceso de restitución de inmueble.',
  },
  {
    title: 'Cómo protegerte legalmente antes de arrendar',
    description: 'La prevención es clave. Conoce las cláusulas indispensables en tu contrato y qué documentos solicitar para minimizar riesgos.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-white-a05">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Blog Legal</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Explora artículos cortos y útiles sobre derechos del arrendador, recuperación de inmuebles, contratos y más.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="bg-white-a05 border-white-a10 flex flex-col rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold font-headline">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/70">{post.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="link" className="p-0 text-accent">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg">
            Ver más artículos
          </Button>
        </div>
      </div>
    </section>
  );
}
