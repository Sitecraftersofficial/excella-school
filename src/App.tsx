import { Component, useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

import logo from "@/assets/Excella+Am-logo.jpeg";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { About } from "@/routes/about";
import { Academics } from "@/routes/academics";
import { Admissions } from "@/routes/admissions";
import { Contact } from "@/routes/contact";
import { Gallery } from "@/routes/gallery";
import { Home } from "@/routes/index";
import { News } from "@/routes/news";
import { StudentLife } from "@/routes/student-life";

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    return null;
}

class AppErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-dvh grid place-items-center bg-background text-foreground px-6 text-center">
                    <div className="max-w-lg space-y-5 flex flex-col items-center">
                        <img src={logo} alt="Excella School" className="h-14 w-auto rounded-sm shadow-elegant" />
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Excella School</p>
                        <h1 className="text-3xl md:text-5xl font-display">This page could not be loaded.</h1>
                        <p className="text-muted-foreground">
                            Please refresh the page. If the issue persists, contact the school admin and we will help you right away.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-accent transition"
                            >
                                Refresh page
                            </button>
                            <a
                                href="mailto:admissions@excella.school"
                                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
                            >
                                Email admin
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default function App() {
    return (
        <AppErrorBoundary>
            <div className="min-h-dvh bg-background text-foreground">
                <SiteHeader />
                <ScrollToTop />
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
            </div>
        </AppErrorBoundary>
    );
}