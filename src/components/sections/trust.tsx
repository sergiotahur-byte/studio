import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-white-a05">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <Image 
              src="https://firebasestorage.googleapis.com/v0/b/studio-7962041961-212ab.appspot.com/o/Gal%C3%A1n.jpg?alt=media&token=8b85d838-ae6e-4f38-be7c-054da17e4508"
              alt="Foto de Sergio Galán, Abogado Fundador"
              width={128}
              height={128}
              className="h-32 w-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent"
            />
            <h3 className="text-2xl font-bold text-foreground">Sergio Galán</h3>
            <p className="text-md text-accent mb-4">Abogado Fundador</p>
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
