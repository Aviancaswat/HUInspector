import { Button } from "@/components/animate-ui/components/buttons/button";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import CardHome from "@/components/home/card-home";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HomeAppProps {
    startAnimations?: boolean;
}

export default function HomeApp({ startAnimations = false }: HomeAppProps) {
    if (!startAnimations) {
        return <div className={cn("w-full max-w-5xl px-4 py-8 mx-auto flex flex-col gap-8 opacity-0")} />;
    }

    return (
        <div className={cn("w-full max-w-5xl px-4 py-8 mx-auto flex flex-col gap-8")}>
            <div className={cn("animate-in fade-in zoom-in duration-700")}>
                <Badge variant="outline" className={cn("px-4 py-1 text-sm")}>
                    🎉 Por Avianca Evolutivos Team
                </Badge>
            </div>
            <TextAnimate
                animation='blurInUp'
                duration={0.6}
                by="word"
                className={cn("text-3xl md:text-5xl font-bold mb-1 md:mb-4 text-center")}>
                Menos vacíos. Menos bugs. Mejores historias
            </TextAnimate>
            <p className={cn("text-md md:text-xl max-w-5xl md:max-w-3xl m-auto text-gray-500 text-center animate-in fade-in zoom-in duration-700 delay-300")}>
                Agente de IA que analiza Historias de Usuario para detectar vacíos, ambigüedades
                y riesgos técnicos antes del desarrollo.
            </p>
            <div className={cn("w-full md:flex md:justify-center mt-4 animate-in fade-in zoom-in duration-700 delay-500")}>
                <Link to="/app">
                    <AnimateIcon
                        animateOnHover
                        className={cn("w-full md:w-auto")}
                    >
                        <Button
                            size="lg"
                            className={
                                cn(`w-full md:w-auto
                                !bg-black 
                                !text-white hover:!bg-gray-900
                                dark:!bg-white 
                                dark:!text-black 
                                dark:hover:!bg-gray-200
                                hover:scale-105 transition-transform`)
                            }
                        >
                            Comenzar
                            <ArrowRight />
                        </Button>
                    </AnimateIcon></Link>
            </div>
            <div className={cn("mt-8 animate-in fade-in slide-in-from-bottom duration-1000")}>
                <CardHome />
            </div>
        </div>
    )
}