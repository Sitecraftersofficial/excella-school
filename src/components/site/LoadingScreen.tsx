import { motion } from "framer-motion";

import logo from "@/assets/Excella+Am-logo.jpeg";

export function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-ink text-ink-foreground"
            style={{ zIndex: 100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div className="flex flex-col items-center gap-6 px-6 text-center">
                <motion.img
                    src={logo}
                    alt="Excella School"
                    className="h-20 w-auto rounded-sm md:h-24"
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                />
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">Loading Excella</p>
                    <p className="mt-2 text-sm text-ink-foreground/70">Preparing the campus experience</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70 animate-pulse [animation-delay:150ms]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/40 animate-pulse [animation-delay:300ms]" />
                </div>
            </div>
        </motion.div>
    );
}