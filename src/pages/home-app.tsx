import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Space, Typography } from "antd";

const { Text } = Typography;

export default function HomeApp() {
    return (
        <Space direction="vertical" size="large" className={cn("w-full max-w-3xl px-4 py-8 mx-auto")}>
            <TextAnimate
                animation='blurIn'
                className={cn("text-4xl md:text-5xl font-bold mb-4 text-center")}>
                Menos vacíos. Menos bugs. Mejores historias
            </TextAnimate>
            <Text className="animate-bounce">
                Agente de IA que analiza Historias de Usuario para detectar vacíos, ambigüedades
                y riesgos técnicos antes del desarrollo.
            </Text>
        </Space>
    )
}