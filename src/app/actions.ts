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

  // Las variables de entorno para el correo se cargan de forma segura.
  // La variable EMAIL_PASS debe configurarse en el archivo .env.
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Faltan variables de entorno para el envío de correo. Asegúrese de que EMAIL_HOST, EMAIL_PORT, EMAIL_USER y EMAIL_PASS estén configurados en su archivo .env.');
    return { message: 'Error del servidor: la configuración de correo está incompleta. Por favor, contacte al administrador.', errors: {} };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Usar true para el puerto 465 (SSL/TLS)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Esta variable se carga desde el archivo .env
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'recuprolex@gmail.com', // El correo de destino
      replyTo: email,
      subject: 'Nuevo Mensaje de Contacto desde la Web',
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
    console.error('Error al enviar el correo:', e);
    // No exponer detalles del error al cliente por seguridad.
    return { message: 'Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.', errors: {} };
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
