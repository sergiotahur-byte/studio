export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'que-hacer-si-el-inquilino-no-paga',
    title: '¿Qué hacer si el inquilino no paga?',
    description: 'Una guía paso a paso sobre las acciones legales y extrajudiciales que puedes tomar para resolver la situación de mora.',
    content: `El incumplimiento en el pago del arriendo es una de las situaciones más estresantes para un propietario. Afortunadamente, la ley colombiana ofrece herramientas claras para actuar.

Paso 1: Intente una comunicación directa

Antes de iniciar acciones legales, contacte al arrendatario. Un recordatorio amigable puede ser suficiente. Documente esta comunicación.

Paso 2: Envíe una notificación formal

Si el pago no se realiza, envíe una comunicación por escrito (idealmente por correo certificado) requiriendo el pago y estableciendo un plazo. Esto constituye una prueba crucial para un futuro proceso legal.

Paso 3: Inicie el proceso de restitución de inmueble

Si el inquilino sigue sin pagar, es momento de acudir a la justicia. Un abogado especializado puede presentar una demanda de restitución de inmueble arrendado. Con las pruebas correctas (contrato y comunicaciones), el proceso suele ser favorable para el propietario.

En Recuperaciones Jurídicas somos expertos en estos procesos. Contáctenos para recibir asesoría.`
  },
  {
    slug: 'claves-para-recuperar-tu-inmueble',
    title: 'Claves para recuperar tu inmueble sin complicaciones',
    description: 'Descubre las estrategias más efectivas y los errores comunes a evitar durante un proceso de restitución de inmueble.',
    content: `Recuperar un inmueble no tiene por qué ser una pesadilla. Siga estas claves:

1. Tenga un contrato sólido: Un contrato de arrendamiento bien redactado es su mejor arma. Debe ser claro en cuanto a causales de terminación, plazos y obligaciones.

2. Documente todo: Guarde copias de todas las comunicaciones, notificaciones, y pruebas de incumplimiento. Esto es fundamental en un proceso judicial.

3. No actúe por su cuenta: Cambiar cerraduras, cortar servicios públicos o intentar desalojar al inquilino por la fuerza es ilegal y puede traerle graves consecuencias legales. Siempre actúe a través de las vías legales.

4. Asesórese con expertos: Un abogado con experiencia en derecho inmobiliario puede guiarlo para tomar las decisiones correctas, acelerar los tiempos y proteger sus derechos.`
  },
  {
    slug: 'como-protegerte-legalmente-antes-de-arrendar',
    title: 'Cómo protegerte legalmente antes de arrendar',
    description: 'La prevención es clave. Conoce las cláusulas indispensables en tu contrato y qué documentos solicitar para minimizar riesgos.',
    content: `La mejor forma de evitar problemas con un arrendatario es protegiéndose desde el inicio.

Cláusulas Indispensables en su Contrato:

*   Cláusula Penal: Establece una multa en caso de incumplimiento de cualquiera de las partes.
*   Inventario Detallado: Adjunte un inventario del estado del inmueble y los bienes incluidos, con fotografías.
*   Destinación del Inmueble: Especifique claramente el uso permitido (vivienda, comercial, etc.).

Documentos a Solicitar al Potencial Inquilino:

*   Certificado laboral o de ingresos.
*   Extractos bancarios.
*   Fiadores o codeudores solventes.
*   Estudio de arrendamiento a través de una aseguradora o afianzadora.

Tomar estas precauciones reduce drásticamente el riesgo de futuros litigios.`
  },
];
