
'use server';

/**
 * @fileOverview Analyzes a lease agreement for potentially unfair or illegal clauses.
 *
 * - analyzeLeaseAgreement - A function that handles the lease agreement analysis process.
 * - AnalyzeLeaseAgreementInput - The input type for the analyzeLeaseAgreement function.
 * - AnalyzeLeaseAgreementOutput - The return type for the analyzeLeaseAgreement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeLeaseAgreementInputSchema = z.object({
  leaseAgreementDataUri: z
    .string()
    .describe(
      "A lease agreement document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeLeaseAgreementInput = z.infer<typeof AnalyzeLeaseAgreementInputSchema>;

const UnfairClauseSchema = z.object({
  clause: z.string().describe('The specific text of the potentially unfair clause.'),
  explanation: z
    .string()
    .describe(
      'A simplified explanation of why the clause might be unfair or illegal and what the tenant’s rights are.'
    ),
});

const AnalyzeLeaseAgreementOutputSchema = z.object({
  summary: z.string().describe('A summary of the lease agreement.'),
  unfairClauses: z.array(UnfairClauseSchema).describe('A list of potentially unfair clauses found in the lease agreement.'),
});
export type AnalyzeLeaseAgreementOutput = z.infer<typeof AnalyzeLeaseAgreementOutputSchema>;

export async function analyzeLeaseAgreement(input: AnalyzeLeaseAgreementInput): Promise<AnalyzeLeaseAgreementOutput> {
  return analyzeLeaseAgreementFlow(input);
}

const analyzeLeaseAgreementPrompt = ai.definePrompt({
  name: 'analyzeLeaseAgreementPrompt',
  input: {schema: AnalyzeLeaseAgreementInputSchema},
  output: {schema: AnalyzeLeaseAgreementOutputSchema},
  prompt: `You are an experienced legal expert specializing in lease agreements.

  Analyze the following lease agreement to identify any clauses that are potentially unfair, illegal, or not legally sound for the tenant under applicable law.

  Lease Agreement:
  {{media url=leaseAgreementDataUri}}

  Focus on clauses that violate tenant rights, shift undue responsibility to the tenant, or contradict standard legal practices.

  Return the output in simplified, actionable terms that the user can easily understand.

  Make sure to provide a summary of the lease agreement and list out the unfair clauses with explanation.`,
});

const analyzeLeaseAgreementFlow = ai.defineFlow(
  {
    name: 'analyzeLeaseAgreementFlow',
    inputSchema: AnalyzeLeaseAgreementInputSchema,
    outputSchema: AnalyzeLeaseAgreementOutputSchema,
  },
  async input => {
    const {output} = await analyzeLeaseAgreementPrompt(input);
    return output!;
  }
);
