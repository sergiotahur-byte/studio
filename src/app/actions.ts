"use server";

import { z } from 'zod';
import { analyzeLeaseAgreement as analyzeLeaseAgreementFlow, AnalyzeLeaseAgreementOutput } from '@/ai/flows/analyze-lease-agreement';
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type FormState = {
  message: string | null;
  errors: {
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
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error de validación. Por favor, revise los campos.',
    };
  }

  const { name, email, message } = validatedFields.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.EMAIL_FROM;
  const toEmail = 'recuprolex@gmail.com';

  if (!process.env.RESEND_API_KEY || !fromEmail) {
    console.error('Resend API Key or From Email are not configured in .env');
    return {
        message: 'Error del servidor: El servicio de correo no está configurado.',
        errors: null
    };
  }
  
  try {
    const { data, error } = await resend.emails.send({
      from: `Contacto Web <${fromEmail}>`,
      to: [toEmail],
      subject: `Nuevo Mensaje de Contacto de ${name}`,
      reply_to: email,
      html: `
        <p>Has recibido un nuevo mensaje desde el formulario de contacto de tu web.</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error("Error sending email from Resend:", error);
      return {
        message: 'Error del servidor: No se pudo enviar el mensaje. Por favor, inténtelo más tarde.',
        errors: null,
      };
    }

    return { message: '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.', errors: null };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      message: 'Error del servidor: No se pudo enviar el mensaje. Por favor, inténtelo más tarde.',
      errors: null,
    };
  }
}

export async function analyzeLease(leaseAgreementDataUri: string): Promise<{ success: boolean; data?: AnalyzeLeaseAgreementOutput; error?: string }> {
  if (!leaseAgreementDataUri) {
    return { success: false, error: 'No se proporcionó ningún documento.' };
  }

  try {
    const result = await analyzeLeaseAgreementFlow({ leaseAgreementDataUri });
    return { success: true, data: result };
  } catch (error) {
    console.error('Error analyzing lease agreement:', error);
    return { success: false, error: 'No se pudo analizar el documento. Asegúrese de que sea un archivo de imagen o PDF válido.' };
  }
}
