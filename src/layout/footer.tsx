import { cn } from "@/lib/utils";

export default function Footer() {
    return (
        <div className={cn("w-full py-4 flex justify-center items-center border-t mt-8")}>
            <p className={cn("text-sm text-gray-500")}>
                &copy; {new Date().getFullYear()} HuInspector. Todos los derechos reservados.
            </p>
        </div>
    )
}