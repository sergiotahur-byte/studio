import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
             <Button variant="ghost" asChild className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Inicio
              </Link>
            </Button>
            <article className="prose prose-lg max-w-none text-foreground/90 space-y-4 prose-headings:text-foreground prose-strong:text-foreground">
              <h1>Términos de Servicio</h1>
              <p>Última actualización: 1 de Agosto de 2024</p>

              <h2>1. Acuerdo de los términos</h2>
              <p>
                Al acceder y utilizar nuestro sitio web y servicios, usted acepta y está sujeto a los términos y condiciones de este acuerdo. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.
              </p>

              <h2>2. Uso del Servicio</h2>
              <p>
                Recuperaciones Jurídicas proporciona una plataforma para análisis de documentos legales y consultas. Los servicios, incluida la herramienta de análisis de IA, se proporcionan únicamente con fines informativos y no constituyen asesoramiento legal. La relación abogado-cliente solo se forma después de una consulta formal y la firma de un acuerdo de compromiso.
              </p>
              
              <h2>3. Propiedad intelectual</h2>
              <p>
                El sitio y su contenido, características y funcionalidades originales son propiedad de Recuperaciones Jurídicas y están protegidos por leyes internacionales de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.
              </p>

              <h2>4. Limitación de responsabilidad</h2>
              <p>
                En ningún caso Recuperaciones Jurídicas, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, la pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes del uso de nuestro servicio.
              </p>
              
              <h2>5. Ley aplicable</h2>
              <p>
                Estos Términos se regirán e interpretarán de conformidad con las leyes de Colombia, sin tener en cuenta sus disposiciones sobre conflicto de leyes.
              </p>

              <p className="border-l-4 border-accent pl-4 italic">
                <strong>Nota:</strong> Esta es una plantilla genérica. Le recomendamos encarecidamente que consulte a un profesional legal para asegurarse de que sus términos de servicio se ajusten a las necesidades específicas de su negocio y cumplan con toda la legislación aplicable.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
