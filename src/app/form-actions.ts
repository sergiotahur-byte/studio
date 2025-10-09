'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { FormState } from './types';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Por favor, corrija los errores en el formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Recuperaciones Juridicas <onboarding@resend.dev>',
      to: ['sergio@recuperacionesjuridicas.com'], // Replace with your actual email
      subject: 'Nuevo Mensaje de Contacto desde la Web',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return {
        status: 'error',
        message: 'Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.',
        errors: null,
      };
    }

    return {
      status: 'success',
      message: '¡Gracias por tu mensaje! Te responderemos pronto.',
      errors: null,
    };
  } catch (exception) {
    console.error('Exception sending email:', exception);
    return {
      status: 'error',
      message: 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo.',
      errors: null,
    };
  }
}