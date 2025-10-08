"use server";

import { z } from 'zod';
import { type FormState } from './types';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Error de validación. Por favor, revise los campos.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;
  
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = 'servicio@recuperacionesjuridicas.lat';
  const fromEmail = 'onboarding@resend.dev';

  if (!resendApiKey) {
    console.error('La clave de API de Resend no está configurada en las variables de entorno.');
    return {
      status: 'error',
      message: 'Error de configuración del servidor. No se pudo enviar el correo.',
      errors: null,
    };
  }
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `Recuperaciones Jurídicas <${fromEmail}>`,
        to: [toEmail],
        subject: `Nuevo Mensaje de Contacto de ${name}`,
        reply_to: email,
        html: `
          <p>Has recibido un nuevo mensaje desde el formulario de contacto de tu web.</p>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await response.json();

    if (data.error) {
       console.error("Resend API Error:", data.error);
       return {
        status: 'error',
        message: `Error de la API: ${data.error.message}`,
        errors: null,
      };
    }
    
    if (!response.ok || !data.id) {
        console.error("Resend API Error Response:", data);
        const errorMessage = 'Error desconocido al enviar el correo. Intente más tarde.';
        return {
          status: 'error',
          message: errorMessage,
          errors: null,
        };
    }

    return {
      status: 'success',
      message: `¡Formulario enviado! ID de confirmación: ${data.id}`,
      errors: null,
    };

  } catch (exception) {
    console.error("Critical error in submitContactForm:", exception);
    const errorMessage = exception instanceof Error ? exception.message : 'Error inesperado del servidor.';
    return {
      status: 'error',
      message: errorMessage,
      errors: null,
    };
  }
}
