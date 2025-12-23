import { HuInspectorLogo } from "@/components/icons/hu-inspector-logo"
import { cn } from "@/lib/utils"
import { Space } from "antd"
import { ThemeTogglerButton } from "../animate-ui/components/buttons/theme-toggler"

export default function Navbar() {
    return (
        <Space
            className={cn("flex justify-between w-full mx-auto items-center")}
        >
            <Space className={cn("items-center")}>
                <HuInspectorLogo size={40} className="shrink-0" />
                <h3
                    className={cn("text-2xl md:text-3xl font-bold")}>
                    HuInspector
                </h3>
                <p className={cn("text-gray-500 text-sm")}>
                    Beta
                </p>
            </Space>
            <Space>
                <ThemeTogglerButton />
            </Space>
        </Space>
    )
}