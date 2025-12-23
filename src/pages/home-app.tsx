import { Button } from "@/components/animate-ui/components/buttons/button";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Space } from "antd";

export default function HomeApp() {
    return (
        <Space direction="vertical" size="large" className={cn("w-full max-w-5xl px-4 py-8 mx-auto")}>
            <TextAnimate
                animation='blurIn'
                className={cn("text-4xl md:text-5xl font-bold mb-4 text-center")}>
                Menos vacíos. Menos bugs. Mejores historias
            </TextAnimate>
            <p className={cn("text-lg md:text-xl max-w-5xl md:max-w-3xl m-auto text-gray-500 text-center animate-in zoom-in duration-500 delay-100")}>
                Agente de IA que analiza Historias de Usuario para detectar vacíos, ambigüedades
                y riesgos técnicos antes del desarrollo.
            </p>
            <AnimateIcon animateOnHover>
                <Button
                    size="lg"
                    className={cn("mx-auto mt-6 animate-in zoom-in duration-500 delay-200 !bg-black !text-white hover:!bg-gray-900")}
                >
                    Comenzar
                    <ArrowRight />
                </Button>
            </AnimateIcon>
        </Space>
    )
}