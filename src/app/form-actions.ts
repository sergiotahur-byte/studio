"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

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
  const toEmail = 'recuprolex@gmail.com';
  const fromEmail = 'servicio@recuperacionesjuridicas.lat';

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
        from: fromEmail,
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

    if (!response.ok) {
      // Si la respuesta no es OK, lanzamos un error con los detalles de Resend
      console.error("Resend API Error Response:", data);
      throw new Error(`Error de la API de Resend: ${data.message || 'Error desconocido'}`);
    }

    if (data.error) {
       console.error("Resend API Error (in data object):", data.error);
       throw new Error(`Error de la API de Resend: ${data.error.message}`);
    }

    // Devolvemos el ID del correo en el mensaje de éxito para depuración.
    return {
      status: 'success',
      message: `Éxito. ID del correo: ${data.id}`,
      errors: null,
    };

  } catch (exception) {
    console.error("Critical error in submitContactForm:", exception);
    const errorMessage = exception instanceof Error ? exception.message : 'Error inesperado del servidor al procesar el formulario.';
    return {
      status: 'error',
      message: errorMessage,
      errors: null,
    };
  }
}
