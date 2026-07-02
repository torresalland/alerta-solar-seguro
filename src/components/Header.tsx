import React, { useState, useEffect } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { Sun, Moon } from "lucide-react";

export const Header = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <header className="fixed top-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-midnight dark:bg-primary p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-white">wb_sunny</span>
                    </div>
                    <span className="font-display font-bold text-2xl text-midnight dark:text-white tracking-tight transition-colors">
                        SOLAR<span style={{ color: "#ea580c" }}><i>SEMRISCO</i></span>
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary" href="#como-funciona">Conformidade</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary" href="#problema">Riscos Técnicos</a>
                    
                    <button 
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all focus:outline-none"
                        aria-label="Alternar tema"
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
                        ) : (
                            <Moon className="w-5 h-5 text-slate-700" />
                        )}
                    </button>

                    <a className="cta-gradient text-white font-bold py-3 px-8 rounded-full shadow-cta-glow hover:scale-105 transition-all text-sm tracking-wide uppercase" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                        Diagnóstico <span className="underline decoration-white/30">Técnico</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
