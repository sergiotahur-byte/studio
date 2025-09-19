"use server";

import { z } from 'zod';
import { analyzeLeaseAgreement as analyzeLeaseAgreementFlow, AnalyzeLeaseAgreementOutput } from '@/ai/flows/analyze-lease-agreement';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error de validación.',
    };
  }

  try {
    // Here you would typically send an email or save to a database
    console.log('Contact form submitted:');
    console.log(validatedFields.data);
    return { message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', errors: {} };
  } catch (e) {
    console.error(e);
    return { message: 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.', errors: {} };
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
    return { success: false, error: 'No se pudo analizar el documento. Asegúrate de que sea un archivo de imagen o PDF válido.' };
  }
}
