import { Badge } from "@/components/ui/badge";
import { Gavel } from "lucide-react";

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-white-a05">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <Gavel className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-foreground font-headline mb-4">Confianza y Respaldo Legal</h2>
            <p className="text-lg text-foreground/80 mb-6">
                Ejercemos bajo la normatividad legal colombiana vigente. Nuestros servicios están respaldados por profesionales en derecho con experiencia comprobada.
            </p>
            <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="text-sm">Derecho Civil</Badge>
                <Badge variant="secondary" className="text-sm">Procesos de Restitución</Badge>
                <Badge variant="secondary" className="text-sm">Legislación Colombiana</Badge>
            </div>
        </div>
      </div>
    </section>
  );
}
