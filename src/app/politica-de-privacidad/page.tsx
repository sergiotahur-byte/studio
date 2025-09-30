import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline mb-6">Política de Privacidad</h1>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>Última actualización: [Fecha]</p>
              
              <h2 className="text-2xl font-bold">1. Introducción</h2>
              <p>
                Bienvenido a Recuperaciones Jurídicas. Respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informa sobre sus derechos de privacidad y cómo la ley lo protege.
              </p>

              <h2 className="text-2xl font-bold">2. Datos que recopilamos sobre usted</h2>
              <p>
                Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
              </p>
              <ul>
                <li><strong>Datos de Identidad:</strong> incluyen nombre y apellido.</li>
                <li><strong>Datos de Contacto:</strong> incluyen dirección de correo electrónico y números de teléfono.</li>
                <li><strong>Datos Técnicos:</strong> incluyen la dirección del protocolo de Internet (IP), sus datos de inicio de sesión, tipo y versión del navegador, configuración y ubicación de la zona horaria, tipos y versiones de los complementos del navegador, sistema operativo y plataforma, y ​​otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
                <li><strong>Datos de Uso:</strong> incluye información sobre cómo utiliza nuestro sitio web y servicios.</li>
              </ul>
               <p>
                También recopilamos, usamos y compartimos <strong>Datos Agregados</strong>, como datos estadísticos o demográficos, para cualquier propósito.
               </p>

              <h2 className="text-2xl font-bold">3. Cómo utilizamos sus datos personales</h2>
              <p>
                Utilizaremos sus datos personales solo cuando la ley nos lo permita. Generalmente, utilizaremos sus datos personales en las siguientes circunstancias:
              </p>
              <ul>
                <li>Para responder a sus consultas enviadas a través de nuestro formulario de contacto.</li>
                <li>Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses.</li>
                <li>Donde necesitemos cumplir con una obligación legal o regulatoria.</li>
              </ul>

              <h2 className="text-2xl font-bold">4. Divulgación de sus datos personales</h2>
              <p>
                Es posible que tengamos que compartir sus datos personales con partes externas, como proveedores de servicios que actúan como procesadores, asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores, y reguladores y otras autoridades.
              </p>

              <h2 className="text-2xl font-bold">5. Seguridad de los datos</h2>
              <p>
                Hemos implementado medidas de seguridad adecuadas para evitar que sus datos personales se pierdan, usen o accedan de forma accidental de manera no autorizada, se alteren o se divulguen.
              </p>

              <p>
                <strong>[Esta es una plantilla. Consulte a un profesional legal para asegurarse de que su política de privacidad cumpla con todos los requisitos legales aplicables.]</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
