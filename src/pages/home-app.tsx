import { Button } from "@/components/animate-ui/components/buttons/button";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

export default function HomeApp() {
    return (
        <div className={cn("w-full max-w-5xl px-4 py-8 mx-auto flex flex-col gap-6")}>
            <div>
                <Badge variant="outline" className={cn("animate-in zoom-in duration-500 px-4 py-1 text-sm")}>
                    🎉 Por Avianca Evolutivos Team
                </Badge>
            </div>
            <TextAnimate
                animation='blurInUp'
                duration={0.4}
                className={cn("text-3xl md:text-5xl font-bold mb-1 md:mb-4 text-center")}>
                Menos vacíos. Menos bugs. Mejores historias
            </TextAnimate>
            <p className={cn("text-md md:text-xl max-w-5xl md:max-w-3xl m-auto text-gray-500 text-center animate-in zoom-in duration-500 delay-100")}>
                Agente de IA que analiza Historias de Usuario para detectar vacíos, ambigüedades
                y riesgos técnicos antes del desarrollo.
            </p>
            <div className={cn("w-full md:flex md:justify-center mt-4")}>
                <AnimateIcon
                    animateOnHover
                    className={cn("w-full md:w-auto")}
                >
                    <Button
                        size="lg"
                        className={
                            cn(`w-full md:w-auto mt-6 
                                delay-200 !bg-black 
                                !text-white hover:!bg-gray-900
                                dark:!bg-white 
                                dark:!text-black 
                                dark:hover:!bg-gray-200`)
                        }
                    >
                        Comenzar
                        <ArrowRight />
                    </Button>
                </AnimateIcon>
            </div>
        </div>
    )
}