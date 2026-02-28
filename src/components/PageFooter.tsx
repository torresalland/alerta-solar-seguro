import React from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const PageFooter = () => {
  return (
    <footer className="bg-midnight text-white pt-40 pb-20 relative overflow-hidden" id="agendar">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 text-[#FFFFFF]">
          Se existe a chance de você ter sido prejudicado, não espere a empresa desaparecer.
        </h2>
        <div className="inline-block w-full max-w-2xl">
          <a className="cta-gradient block w-full bg-primary text-white font-black text-lg md:text-xl lg:text-3xl py-6 md:py-8 px-6 md:px-12 rounded-2xl shadow-cta-glow hover:scale-[1.02] transition-all uppercase tracking-tighter" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <u>AGENDAR MINHA SESSÃO GRATUITA AGORA</u>
          </a>
          <p className="text-slate-400 mt-6 text-sm italic">
            *Sessão estratégica focada em conformidade normativa. Via Zoom e Meet.*
          </p>
          <div className="flex items-center justify-center gap-3 mt-10 text-slate-500 font-medium text-sm">
            <span className="material-symbols-outlined text-green-500 text-xl">verified_user</span>
            Consultoria Técnica em Conformidade com ABNT, OAB e LGPD
          </div>
        </div>
        <div className="mt-40 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">wb_sunny</span>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              SOLAR<span style={{ color: "#ea580c" }}><i>SEMRISCO</i></span>
            </span>
          </div>
          <nav className="flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
            <a className="hover:text-white transition-colors" href="#">Privacidade</a>
            <a className="hover:text-white transition-colors" href="#">Compliance</a>
          </nav>
          <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest text-left md:text-right">
            <b>© 2025 SolarSEMRISCO – Intelligence &amp; Legal Strategy</b><br />
            Auditoria Técnica de Sistemas Fotovoltaicos em conformidade com a <b>NBR 17.193:2025</b>.<br />
            <i>Gestão de riscos, perícia em segurança elétrica e proteção patrimonial solar.</i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
