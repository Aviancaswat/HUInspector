import { cn } from "@/lib/utils";

interface HuInspectorLogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    size?: number;
}

export const HuInspectorLogo: React.FC<HuInspectorLogoProps> = ({
    className,
    size = 32,
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("", className)}
            {...props}
        >
            <rect
                x="15"
                y="10"
                width="55"
                height="70"
                rx="4"
                className="fill-current text-gray-200 dark:text-gray-700"
            />

            <line
                x1="25"
                y1="25"
                x2="55"
                y2="25"
                className="stroke-current text-gray-400 dark:text-gray-500"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <line
                x1="25"
                y1="35"
                x2="60"
                y2="35"
                className="stroke-current text-gray-400 dark:text-gray-500"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <line
                x1="25"
                y1="45"
                x2="50"
                y2="45"
                className="stroke-current text-gray-400 dark:text-gray-500"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <line
                x1="72"
                y1="68"
                x2="85"
                y2="81"
                className="stroke-current text-gray-800 dark:text-gray-200"
                strokeWidth="6"
                strokeLinecap="round"
            />

            <circle
                cx="58"
                cy="54"
                r="20"
                className="fill-current text-blue-500 dark:text-blue-400"
                opacity="0.2"
            />
            <circle
                cx="58"
                cy="54"
                r="20"
                className="stroke-current text-blue-600 dark:text-blue-400"
                strokeWidth="4"
                fill="none"
            />

            <path
                d="M 50 54 L 55 59 L 66 48"
                className="stroke-current text-green-600 dark:text-green-400"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
};
