import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, HelpCircle, Lightbulb, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface AnalysisCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    features: string[];
}

const analysisCards: AnalysisCard[] = [
    {
        title: "Vacíos detectados",
        description: "Identifica elementos faltantes o incompletos en tu historia de usuario",
        icon: <Search className="w-6 h-6" />,
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-950/30",
        features: [
            "Criterios de aceptación faltantes",
            "Información técnica incompleta",
            "Requisitos no especificados"
        ]
    },
    {
        title: "Preguntas faltantes",
        description: "Genera preguntas clave que deben aclararse antes del desarrollo",
        icon: <HelpCircle className="w-6 h-6" />,
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-50 dark:bg-orange-950/30",
        features: [
            "Dudas sobre requisitos",
            "Casos de uso no cubiertos",
            "Dependencias por confirmar"
        ]
    },
    {
        title: "Riesgos",
        description: "Detecta posibles problemas técnicos o de implementación",
        icon: <AlertTriangle className="w-6 h-6" />,
        color: "text-yellow-600 dark:text-yellow-400",
        bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
        features: [
            "Complejidad técnica alta",
            "Dependencias externas",
            "Posibles blockers"
        ]
    },
    {
        title: "Ambigüedades",
        description: "Señala puntos poco claros que pueden generar diferentes interpretaciones",
        icon: <CheckCircle className="w-6 h-6" />,
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-950/30",
        features: [
            "Descripciones vagas",
            "Términos sin definir",
            "Lógica de negocio confusa"
        ]
    },
    {
        title: "Recomendaciones técnicas",
        description: "Proporciona sugerencias de mejora y mejores prácticas",
        icon: <Lightbulb className="w-6 h-6" />,
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-950/30",
        features: [
            "Patrones de diseño sugeridos",
            "Optimizaciones posibles",
            "Consideraciones de seguridad"
        ]
    }
];

export default function CardHome() {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full")}>
            {analysisCards.map((card, index) => (
                <Card
                    key={index}
                    className={cn(
                        "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                        "animate-in zoom-in duration-700",
                        "border-2"
                    )}
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <CardHeader>
                        <div className={cn("flex items-center gap-3 mb-2")}>
                            <div className={cn("p-2 rounded-lg", card.bgColor, card.color)}>
                                {card.icon}
                            </div>
                        </div>
                        <CardTitle className={cn("text-xl font-bold")}>
                            {card.title}
                        </CardTitle>
                        <CardDescription className={cn("text-sm mt-2")}>
                            {card.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className={cn("space-y-2 text-sm text-gray-600 dark:text-gray-400")}>
                            {card.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className={cn("flex items-start gap-2")}>
                                    <span className={cn("mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0", card.color.replace('text-', 'bg-'))} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}