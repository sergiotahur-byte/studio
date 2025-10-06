"use server";

import { z } from 'zod';
import { Resend } from 'resend';
import { analyzeLeaseAgreement as analyzeLeaseAgreementFlow, AnalyzeLeaseAgreementOutput } from '@/ai/flows/analyze-lease-agreement';

// --- Rebuilt Contact Form Logic ---

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

  // TEMPORARY DIAGNOSTIC STEP: Hardcoding values to rule out environment issues.
  const resendApiKey = 're_D6zhiZ2X_KgLKBxktJRHYMS4FbptwjVHo';
  const fromEmail = 'servicio@recuperacionesjuridicas.lat';
  const toEmail = 'recuprolex@gmail.com';

  if (!resendApiKey || !fromEmail || !toEmail) {
    // This check remains as a safeguard for future development.
    return {
        status: 'error',
        message: 'Error de configuración del servidor: Faltan credenciales de envío.',
        errors: null,
    };
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
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
      console.error("Resend API Error:", error);
      return {
        status: 'error',
        message: `Error del servidor: No se pudo enviar el mensaje. ${error.message}`,
        errors: null,
      };
    }

    return {
      status: 'success',
      message: '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.',
      errors: null,
    };
  } catch (error) {
    console.error("General Error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado del servidor.';
    return {
      status: 'error',
      message: errorMessage,
      errors: null,
    };
  }
}


// --- Existing Lease Analyzer Logic ---

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
