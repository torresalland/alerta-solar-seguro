import React from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-midnight p-2 rounded-lg">
                        <span className="material-symbols-outlined text-white">wb_sunny</span>
                    </div>
                    <span className="font-display font-bold text-2xl text-midnight tracking-tight">
                        SOLAR<span style={{ color: "#ea580c" }}><i>SEMRISCO</i></span>
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#como-funciona">Conformidade</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#problema">Riscos Técnicos</a>
                    <a className="cta-gradient text-white font-bold py-3 px-8 rounded-full shadow-cta-glow hover:scale-105 transition-all text-sm tracking-wide uppercase" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                        Diagnóstico <span className="underline decoration-white/30">Técnico</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
