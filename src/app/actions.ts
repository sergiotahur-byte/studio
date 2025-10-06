"use server";

import { z } from 'zod';
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
  
  // Hardcoded values for maximum reliability during diagnostics
  const resendApiKey = 're_D6zhiZ2X_KgLKBxktJRHYMS4FbptwjVHo';
  const fromEmail = 'servicio@recuperacionesjuridicas.lat';
  const toEmail = 'recuprolex@gmail.com';
  
  console.log(`Attempting to send email from ${fromEmail} to ${toEmail} via fetch.`);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
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
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error Response:", data);
      throw new Error(`Error de la API de Resend: ${data.message || 'Error desconocido'}`);
    }

    console.log("Email sent successfully with ID:", data.id);
    return {
      status: 'success',
      message: '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.',
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
