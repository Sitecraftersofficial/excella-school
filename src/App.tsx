import { Navigate, Route, Routes } from "react-router-dom";

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

export default function App() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
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
        </div>
    );
}