import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <Image 
              src="https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.appspot.com/o/Gal%C3%A1n.jpg?alt=media&token=8b85d838-ae6e-4f38-be7c-054da17e4508"
              alt="Foto del abogado fundador"
              width={160}
              height={160}
              className="h-40 w-40 rounded-full mx-auto mb-4 object-cover border-4 border-accent"
            />
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
