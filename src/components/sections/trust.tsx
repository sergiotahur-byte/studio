import { Badge } from "@/components/ui/badge";

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-foreground font-headline mb-4 mt-8">Confianza y Respaldo Legal</h2>
            <p className="text-lg text-foreground/80 mb-6">
                Ejercemos bajo la normatividad legal colombiana vigente. Nuestros servicios están respaldados por profesionales en derecho con experiencia comprobada.
            </p>
            <div className="flex justify-center gap-4">
                <Badge variant="outline" className="text-sm">Derecho Civil</Badge>
                <Badge variant="outline" className="text-sm">Procesos de Restitución</Badge>
                <Badge variant="outline" className="text-sm">Legislación Colombiana</Badge>
            </div>
        </div>
      </div>
    </section>
  );
}
