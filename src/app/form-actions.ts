"use server";

import { z } from 'zod';
import type { FormState } from './types';

// Esquema de validación para los datos del formulario de contacto
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, ingrese un correo electrónico válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

/**
 * Procesa el envío del formulario de contacto.
 * Valida los datos, envía un correo electrónico a través de Resend y devuelve el estado del formulario.
 */
export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // 1. Validar los datos del formulario
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Error de validación. Por favor, revise los campos del formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // 2. Verificar la configuración de la API de Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO || 'servicio@recuperacionesjuridicas.lat';
  const fromEmail = 'onboarding@resend.dev';

  if (!resendApiKey) {
    console.error('Error de configuración: La clave de API de Resend no está definida en las variables de entorno.');
    return {
      status: 'error',
      message: 'Error interno del servidor. No se pudo procesar su solicitud.',
      errors: null,
    };
  }

  // 3. Enviar el correo electrónico usando la API de Resend
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `Formulario Web <${fromEmail}>`,
        to: [toEmail],
        subject: `Nuevo mensaje de contacto de: ${name}`,
        reply_to: email,
        html: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Capturar errores específicos de la API de Resend
      const errorMessage = data?.message || 'Error desconocido al comunicarse con la API de correo.';
      console.error(`Resend API Error (${response.status}):`, data);
      return {
        status: 'error',
        message: `No se pudo enviar el mensaje. Error: ${errorMessage}`,
        errors: null,
      };
    }
    
    console.log(`Correo enviado exitosamente. ID de Resend: ${data.id}`);
    return {
      status: 'success',
      message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
      errors: null,
    };

  } catch (exception) {
    // Capturar errores críticos de red u otros imprevistos
    console.error("Excepción crítica en submitContactForm:", exception);
    const errorMessage = exception instanceof Error ? exception.message : 'Error desconocido del servidor.';
    return {
      status: 'error',
      message: `Error crítico al procesar la solicitud: ${errorMessage}`,
      errors: null,
    };
  }
}
