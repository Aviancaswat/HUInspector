import { HuInspectorLogo } from "@/components/icons/hu-inspector-logo";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface SplashScreenProps {
    onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                onComplete?.();
            }, 600);
        }, 2200);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                    }}
                    exit={{ 
                        opacity: 0,
                        scale: 0.95,
                    }}
                    transition={{ 
                        duration: 0.6,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className={cn(
                        "fixed inset-0 z-50 flex items-center justify-center",
                        "bg-white dark:bg-black"
                    )}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                            scale: 1, 
                            opacity: 1,
                        }}
                        transition={{ 
                            delay: 0.2,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className={cn("flex flex-col items-center gap-4")}
                    >
                        <motion.div
                            animate={{ 
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: 1,
                                ease: "easeInOut"
                            }}
                        >
                            <HuInspectorLogo size={120} />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className={cn("flex flex-col items-center gap-2")}
                        >
                            <h1 className={cn("text-4xl font-bold")}>
                                HuInspector
                            </h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className={cn("h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full")}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
