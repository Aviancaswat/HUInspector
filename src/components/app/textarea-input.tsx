import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import TextArea from "antd/es/input/TextArea";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { IconButton } from "../animate-ui/components/buttons/icon";

interface TextareaInputProps {
    onSubmit: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export default function TextareaInput({
    onSubmit,
    placeholder = "Describe tu historia de usuario aquí...",
    disabled = false
}: TextareaInputProps) {

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if (!value.trim()) return;
        onSubmit(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit();
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto p-0 shadow-none bg-transparent gap-1 rounded-4xl shadow-md border border-gray-300">
            <div className="p-1 m-0">
                <TextArea
                    className={cn("!rounded-t-4xl")}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoSize={{ minRows: 2, maxRows: 5 }}
                    style={{
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        fontSize: "1rem",
                    }}
                />
            </div>
            <div className="flex justify-end p-3">
                <div className="flex gap-2">
                    <IconButton
                        onClick={handleSubmit}
                        variant="accent"
                        className={cn("!bg-black text-white hover:!bg-gray-800", disabled && "opacity-50 cursor-not-allowed", "!rounded-full")}
                    >
                        <ArrowUp />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}