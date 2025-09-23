import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-16 bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center bg-card p-8 rounded-xl shadow-lg">
          <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-foreground font-headline mb-4">Nuestra Promesa</h2>
          <p className="text-lg text-foreground/80">
            Recibe tu contrato personalizado en un plazo máximo de 48 horas. Si no quedas satisfecho, te devolvemos tu dinero. Porque tu tranquilidad es nuestra prioridad.
          </p>
        </div>
      </div>
    </section>
  );
}
