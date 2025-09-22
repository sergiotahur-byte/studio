import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Qué hago si el arrendatario no paga?',
    answer: 'Debes iniciar un proceso de restitución del inmueble. Nosotros te asesoramos en todo el proceso para que sea rápido y apegado a la ley.',
  },
  {
    question: '¿Puedo desalojar a un inquilino sin un proceso judicial?',
    answer: 'No. En Colombia, solo un juez puede ordenar la restitución de un inmueble. Intentar hacerlo por cuenta propia puede acarrear problemas legales. La única excepción son los acuerdos de desocupación voluntarios y firmados.',
  },
  {
    question: '¿Es obligatorio firmar un contrato de arrendamiento por escrito?',
    answer: 'No es estrictamente obligatorio, ya que los acuerdos verbales tienen validez. Sin embargo, es altamente recomendable tener un contrato escrito para proteger tus derechos y definir claramente las obligaciones de ambas partes. Nosotros lo elaboramos por ti.',
  },
  {
    question: '¿Cuánto tiempo tarda recuperar un inmueble legalmente?',
    answer: 'El tiempo varía dependiendo del juzgado, la complejidad del caso y la cooperación del arrendatario. En promedio, un proceso de restitución puede tardar entre 3 y 6 meses.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Preguntas Frecuentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Resolvemos algunas de las dudas más comunes de los propietarios.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl px-6 shadow-lg">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
