import TextareaInput from "@/components/app/textarea-input";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { HUInspectorService } from "@/service/huInspector.service";
import React, { useEffect, useState } from "react";

type AnalysisResult = {
    progress: string[];
    gaps: string[];
    missingQuestions: string[];
    risks: string[];
    ambiguities: string[];
    recommendations: string[];
};

export default function HUInspectorPage() {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [currentProgressIndex, setCurrentProgressIndex] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [analysisData, setAnalysisData] = useState<AnalysisResult | null>(null);

    const handleAnalyzeHU = async (huContent: string) => {
        try {
            setIsAnalyzing(true);
            setShowResults(false);
            setCurrentProgressIndex(0);
            setAnalysisData(null);

            const result = await HUInspectorService.analyzeHU(huContent);
            console.log("HU Analysis Result:", result);
            setAnalysisData(result);
        } catch (error) {
            console.error("Error analyzing HU:", error);
            setIsAnalyzing(false);
        }
    };

    useEffect(() => {
        if (analysisData && isAnalyzing) {
            if (currentProgressIndex < analysisData.progress.length) {
                const timer = setTimeout(() => {
                    setCurrentProgressIndex((prev) => prev + 1);
                }, 2000);
                return () => clearTimeout(timer);
            } else {
                const finalTimer = setTimeout(() => {
                    setIsAnalyzing(false);
                    setShowResults(true);
                }, 500);
                return () => clearTimeout(finalTimer);
            }
        }
    }, [analysisData, currentProgressIndex, isAnalyzing]);

    return (
        <div className="w-full mx-auto">
            {!isAnalyzing && !showResults && (
                <React.Fragment>
                    <TextAnimate
                        animation='scaleUp'
                        duration={0.6}
                        by="word"
                        className={cn("text-3xl md:text-5xl font-medium mb-8 text-center")}
                    >
                        ¿Qué HU analizamos hoy?
                    </TextAnimate>
                    <div className="animate-in fade-in duration-700 w-full">
                        <TextareaInput
                            onSubmit={handleAnalyzeHU}
                            disabled={isAnalyzing}
                        />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}