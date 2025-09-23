export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  contentPath: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'que-hacer-si-el-inquilino-no-paga',
    title: '¿Qué hacer si el inquilino no paga?',
    description: 'Una guía paso a paso sobre las acciones legales y extrajudiciales que puedes tomar para resolver la situación de mora.',
    contentPath: 'src/content/blog/que-hacer-si-el-inquilino-no-paga.mdx',
  },
  {
    slug: 'claves-para-recuperar-tu-inmueble',
    title: 'Claves para recuperar tu inmueble sin complicaciones',
    description: 'Descubre las estrategias más efectivas y los errores comunes a evitar durante un proceso de restitución de inmueble.',
    contentPath: 'src/content/blog/claves-para-recuperar-tu-inmueble.mdx',
  },
  {
    slug: 'como-protegerte-legalmente-antes-de-arrendar',
    title: 'Cómo protegerte legalmente antes de arrendar',
    description: 'La prevención es clave. Conoce las cláusulas indispensables en tu contrato y qué documentos solicitar para minimizar riesgos.',
    contentPath: 'src/content/blog/como-protegerte-legalmente-antes-de-arrendar.mdx',
  },
];
