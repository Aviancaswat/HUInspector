const MODEL = 'gpt-4o-mini';

const PROMPT_INSTRUCTIONS = `
# Eres un analista senior de producto.

**Analiza la siguiente Historia de Usuario (HU).**

Mientras realizas el análisis, completa progresivamente el campo
"progress" con frases cortas que describan el avance del análisis.

**Reglas para "progress":**
- Frases breves y neutras
- Describen etapas generales del análisis
- No revelan razonamientos internos ni decisiones
- No dependen del contenido del resultado
- Máximo 6 frases

**Reglas generales:**
- Al finalizar, entrega el objeto completo usando exactamente el schema dado
- No agregues campos adicionales
- No agregues texto fuera del JSON
`;

const getSystemPrompt = (huContent: string) => {
    const prompt = `
            # Analiza la siguiente Historia de Usuario:
            ${huContent}\n
            ## Identifica y clasifica:
            - **progress**: etapas del análisis realizadas
            - **gaps**: información necesaria pero no presente
            - **missingQuestions**: preguntas clave que deben responderse antes de desarrollar
            - **risks**: riesgos funcionales, técnicos o de negocio
            - **ambiguities**: términos vagos o interpretables
            - **recommendations**: acciones concretas para mejorar la HU
            `;
    return prompt;
}

export { getSystemPrompt, MODEL, PROMPT_INSTRUCTIONS };

