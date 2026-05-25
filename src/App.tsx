import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SiteFooter } from "@/components/site/SiteFooter";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { SiteHeader } from "@/components/site/SiteHeader";
import { About } from "@/routes/about";
import { Academics } from "@/routes/academics";
import { Admissions } from "@/routes/admissions";
import { Contact } from "@/routes/contact";
import { Gallery } from "@/routes/gallery";
import { Home } from "@/routes/index";
import { News } from "@/routes/news";
import { StudentLife } from "@/routes/student-life";

export default function App() {
    const reduceMotion = useReducedMotion();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const startedAt = performance.now();
        const minVisibleMs = reduceMotion ? 300 : 2200;
        let completionTimer: number | undefined;

        const completeWithMinimum = () => {
            const elapsed = performance.now() - startedAt;
            const remaining = Math.max(0, minVisibleMs - elapsed);
            completionTimer = window.setTimeout(() => setIsLoading(false), remaining);
        };

        if (document.readyState === "complete") {
            completeWithMinimum();
        } else {
            window.addEventListener("load", completeWithMinimum, { once: true });
        }

        const safetyTimer = window.setTimeout(completeWithMinimum, 4500);

        return () => {
            window.clearTimeout(completionTimer);
            window.clearTimeout(safetyTimer);
            window.removeEventListener("load", completeWithMinimum);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <LoadingScreen key="loading" />
            ) : (
                <motion.div
                    key="app"
                    className="min-h-dvh bg-background text-foreground"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                >
                    <SiteHeader />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/academics" element={<Academics />} />
                            <Route path="/admissions" element={<Admissions />} />
                            <Route path="/student-life" element={<StudentLife />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                    <SiteFooter />
                </motion.div>
            )}
        </AnimatePresence>
    );
}