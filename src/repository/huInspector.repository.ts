import { HUAnalysisSchema } from '@/schemas/huinspect.schema';
import { getSystemPrompt, MODEL } from '@/utils/constants';
import { Agent, run, setDefaultOpenAIClient } from '@openai/agents';
import OpenAI from "openai";
import type z from 'zod';

export type HUAnalysisResult = z.infer<typeof HUAnalysisSchema>;

export class HUInspectorRepository {
    private static apiKey: string = import.meta.env.VITE_API_KEY_OPENAI;
    private static openAi: OpenAI | null = null;
    private static agent: Agent<unknown, typeof HUAnalysisSchema> | null = null;

    private static initialize() {
        if (!this.apiKey) {
            console.error('❌ API Key no encontrada. Asegúrate de tener VITE_API_KEY_OPENAI en tu archivo .env y reinicia el servidor.');
            throw new Error('API Key no configurada');
        }
        if (!this.openAi) {
            this.openAi = new OpenAI({
                apiKey: this.apiKey,
                dangerouslyAllowBrowser: true
            });
            setDefaultOpenAIClient(this.openAi);
        }

        if (!this.agent) {
            this.agent = new Agent({
                name: 'HU Inspector Assistant',
                instructions: `Eres un experto analista de Historias de Usuario (HU) en metodologías ágiles.
                               Tu tarea es analizar HU y detectar problemas de calidad, claridad y completitud.`,
                model: MODEL,
                outputType: HUAnalysisSchema
            });
        }
    }

    static async analyzeHURun(huContent: string): Promise<HUAnalysisResult> {

        this.initialize();

        try {

            if (huContent.trim().length === 0) throw new Error('El contenido de la HU está vacío.');
            console.log("Iniciando análisis de HU...");
            const prompt = getSystemPrompt(huContent);
            const result = await run(this.agent!, prompt);
            return result.finalOutput as HUAnalysisResult;

        } catch (error) {
            console.error('Error analyzing HU:', error);
            return {
                progress: [],
                gaps: [],
                missingQuestions: [],
                risks: [],
                ambiguities: [],
                recommendations: []
            };
        }
    }
} 