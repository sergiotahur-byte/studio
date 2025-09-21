"use server";

import { z } from 'zod';
import { analyzeLeaseAgreement as analyzeLeaseAgreementFlow, AnalyzeLeaseAgreementOutput } from '@/ai/flows/analyze-lease-agreement';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
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

  const { name, email, message } = validatedFields.data;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Use true for port 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address
      to: 'servicio@recuperacionesjuridicas.lat', // list of receivers
      replyTo: email,
      subject: 'Nuevo Mensaje de Contacto desde la Web', // Subject line
      html: `
        <h1>Nuevo Mensaje de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    
    return { message: '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.', errors: {} };
  } catch (e) {
    console.error(e);
    return { message: 'Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo.', errors: {} };
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
