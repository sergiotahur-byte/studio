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
    content: `Imagina esto: llega fin de mes, y el depósito que esperabas nunca aparece. Llamas, escribes, y recibes evasivas. El inquilino dejó de pagar. ¿Qué hacer?

Lo primero es mantener la calma y documentar todo. Guarda los mensajes, correos y cualquier evidencia del impago. Luego, revisa el contrato: ¿hay cláusulas de penalización o desalojo? Si no hay, no estás desprotegido. La ley respalda tu derecho a cobrar y recuperar tu propiedad.

Evita confrontaciones. Es preferible enviar una carta formal o acudir a una conciliación extrajudicial. Si no hay acuerdo, el siguiente paso es la demanda de desalojo por falta de pago. No lo hagas solo. Un abogado puede acelerar el proceso y evitar errores.

Recuerda: actuar rápido y con respaldo legal es clave. No dejes que el tiempo juegue en tu contra.`
  },
  {
    slug: 'claves-para-recuperar-tu-inmueble',
    title: 'Claves para recuperar tu inmueble sin complicaciones',
    description: 'Descubre las estrategias más efectivas y los errores comunes a evitar durante un proceso de restitución de inmueble.',
    content: `Has sido paciente. Pero el inquilino no paga, no entrega el inmueble, o simplemente desapareció. Tu propiedad, ocupada. ¿Y ahora qué?
La recuperación legal de un inmueble no es automática, pero es posible. El primer paso es identificar el tipo de ocupación: ¿hay contrato vigente? ¿hubo abandono? Esto determina si se inicia un proceso por desalojo, recuperación por ocupación precaria o lanzamiento por vencimiento.

La clave es no usar la fuerza. Entrar por cuenta propia o cambiar cerraduras puede volverse en tu contra legalmente. En cambio, presentar una demanda bien sustentada, con pruebas del contrato y el incumplimiento, suele dar buenos resultados.

Y algo importante: una medida cautelar puede ayudarte a recuperar el bien incluso antes del fallo final. Pero solo con asesoría profesional adecuada.`
  },
  {
    slug: 'como-protegerte-legalmente-antes-de-arrendar',
    title: 'Cómo protegerte legalmente antes de arrendar',
    description: 'La prevención es clave. Conoce las cláusulas indispensables en tu contrato y qué documentos solicitar para minimizar riesgos.',
    content: `Firmar un contrato de arrendamiento sin previsión legal es como construir sobre arena. Todo puede venirse abajo cuando menos lo esperas.

Antes de arrendar, investiga a tu futuro inquilino: pide referencias laborales y bancarias. Verifica que no tenga demandas previas como inquilino. Esto no es desconfianza, es precaución.
Luego, el contrato. Nada de modelos genéricos sacados de internet. Un buen contrato incluye: duración clara, monto y forma de pago, garantías, penalidades por incumplimiento, y cláusula de desalojo anticipado. Además, registra el contrato si es posible, y deja constancia del estado del inmueble con fotos o inventario firmado.

Finalmente, cobra siempre por medios formales. No solo es más seguro: también genera evidencia si algo va mal.

Arrendar puede ser un ingreso estable o una pesadilla legal. Tú eliges cómo empezar.`
  },
];
