import { z } from 'zod';

const HUAnalysisSchema = z.object({
    progress: z.array(z.string()),
    gaps: z.array(z.string()),
    missingQuestions: z.array(z.string()),
    risks: z.array(z.string()),
    ambiguities: z.array(z.string()),
    recommendations: z.array(z.string())
});

export { HUAnalysisSchema };
