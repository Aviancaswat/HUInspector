import { Agent, run, setDefaultOpenAIClient } from '@openai/agents';
import OpenAI from "openai";
import { z } from 'zod';

const HUAnalysisSchema = z.object({
    vacios: z.array(z.string()), // Array de vacíos detectados
    preguntasFaltantes: z.array(z.string()), // Array de preguntas faltantes
    riesgos: z.array(z.string()), // Array de riesgos
    ambiguedades: z.array(z.string()), // Array de ambigüedades
    recomendaciones: z.array(z.string()), // Array de recomendaciones técnicas
});

export type HUAnalysisResult = z.infer<typeof HUAnalysisSchema>;

export class HUInspectorRepository {
    private static apiKey: string = import.meta.env.VITE_API_KEY_OPENAI;
    private static openAi: OpenAI | null = null;
    private static agent: Agent<unknown, typeof HUAnalysisSchema> | null = null;

    private static initialize() {
        // Verificar que la API key esté cargada
        if (!this.apiKey) {
            console.error('❌ API Key no encontrada. Asegúrate de tener VITE_API_KEY_OPENAI en tu archivo .env y reinicia el servidor.');
            throw new Error('API Key no configurada');
        }
        console.log('✅ API Key cargada:', this.apiKey.substring(0, 10) + '...');
        
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
                model: 'gpt-4o-mini',
                outputType: HUAnalysisSchema
            });
        }
    }

    static async analyzeHURun(huContent: string): Promise<HUAnalysisResult> {
        this.initialize();
        
        try {
            const prompt = `Analiza la siguiente Historia de Usuario:
            ${huContent}
            Identifica y clasifica:
            1. Vacíos: Información faltante o incompleta
            2. Preguntas faltantes: Aspectos que requieren clarificación
            3. Riesgos: Riesgos técnicos, de negocio o de implementación
            4. Ambigüedades: Partes poco claras o que pueden interpretarse de múltiples formas
            5. Recomendaciones: Mejoras técnicas, mejores prácticas y sugerencias`;

            const result = await run(this.agent!, prompt);

            // Con outputType, finalOutput ya viene parseado y validado por el schema
            return result.finalOutput as HUAnalysisResult;
        } catch (error) {
            console.error('Error analyzing HU:', error);
            // Retornar estructura vacía en caso de error
            return {
                vacios: [],
                preguntasFaltantes: [],
                riesgos: [],
                ambiguedades: [],
                recomendaciones: []
            };
        }
    }
} 