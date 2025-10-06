"use server";

import { analyzeLeaseAgreement as analyzeLeaseAgreementFlow, AnalyzeLeaseAgreementOutput } from '@/ai/flows/analyze-lease-agreement';

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
