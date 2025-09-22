import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'Recuperaron mi apartamento en tiempo récord. Su profesionalismo y comunicación constante me dieron una tranquilidad inmensa durante todo el proceso. ¡Totalmente recomendados!',
    name: 'Carlos Fernández',
    title: 'Propietario en Bogotá',
  },
  {
    id: 'testimonial-2',
    quote: 'Tenía un contrato con cláusulas que no entendía y me parecían abusivas. El análisis con su herramienta de IA y la posterior consulta me aclararon todo. Me siento mucho más seguro.',
    name: 'Laura Jiménez',
    title: 'Propietaria en Medellín',
  },
  {
    id: 'testimonial-3',
    quote: 'La defensa legal que me proporcionaron fue excepcional. Se enfrentaron a una situación complicada y lograron proteger mis derechos como arrendador. No podría estar más agradecido.',
    name: 'Miguel Ángel Ruiz',
    title: 'Inversionista Inmobiliario en Cali',
  },
];

export default function Testimonials() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="testimonios" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Casos de Éxito</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Descubra cómo hemos ayudado a otros propietarios a proteger su inversión y tranquilidad.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const imageData = getImage(testimonial.id);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full bg-card rounded-xl shadow-lg flex flex-col justify-between">
                    <CardContent className="p-8 flex-grow">
                      <p className="text-lg text-foreground/90 italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        {imageData && (
                          <Image
                            src={imageData.imageUrl}
                            alt={`Foto de ${testimonial.name}`}
                            width={50}
                            height={50}
                            className="rounded-full mr-4"
                            data-ai-hint={imageData.imageHint}
                          />
                        )}
                        <div>
                          <p className="font-bold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
