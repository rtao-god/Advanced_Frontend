import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimateOpacityProps {
    children: ReactNode;
    initialOpacity?: number;
    animateOpacity?: number;
    exitOpacity?: number;
    duration?: number;
}

export default function AnimateOpacity({ children,
    initialOpacity = 0,
    animateOpacity = 1,
    exitOpacity = 0,
    duration = 0.5
}: AnimateOpacityProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: initialOpacity }}
                animate={{ opacity: animateOpacity }}
                exit={{ opacity: exitOpacity }}
                transition={{ duration }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}