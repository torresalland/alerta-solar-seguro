import React from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const HeroSection = () => {
  return (
    <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/50 dark:bg-blue-950/10 rounded-full blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-slate-100 dark:bg-slate-900 text-midnight dark:text-slate-200 border border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-base mr-2 text-primary">gavel</span>
              Estratégia Técnico-Legal ABNT
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Em <span className="text-highlight">30 minutos</span> você vai descobrir se sua instalação
              solar está irregular e se tem direito à <span className="text-highlight">indenização</span> conforme a norma vigente.
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-display font-normal">
              Agende agora uma sessão <span className="text-green-600 dark:text-green-400 font-bold">GRATUITA</span> com um especialista e
              identifique o risco técnico por <strong>ausência de dispositivo RSD</strong> em inversores
              String e sua oportunidade de <strong>reparação jurídica</strong>.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a className="cta-gradient inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 bg-primary text-white font-black text-sm sm:text-lg md:text-xl rounded-xl shadow-cta-glow hover:-translate-y-1 transition-all uppercase tracking-tight text-center" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                DIAGNÓSTICO <span className="mx-1.5 underline decoration-white/40">TÉCNICO</span> ESPECIALIZADO
                <span className="material-symbols-outlined ml-3">engineering</span>
              </a>
            </div>
            <div className="pt-12 border-t border-slate-100">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-6">Autoridade Técnica e Normativa</p>
              <div className="flex flex-wrap items-center gap-10 opacity-40 grayscale">
                <img alt="Logo OAB" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNGOnLGE3d8KLJ-KMfWzu9MLiPI_J2iKwq16IgnTB37raWzRzKl6VjrHcmCmF0vtvpdVBwPiU89FfwjZ_jvg4shR97Q_nozxgg2c4KUtbRJ90N-XVZmv_z_QE2hOa3NTDoxNo5nMh-O-KdP0FkaGdFc7bAi1MLuUZdATWFaZf0FOWbjL3DRCUmCEauN2XxLwlp00CZ4Jrgrzx7IpHAv2MYcmceEPKfOOijTMkgdcfSdM7d3XBvhfE2YjPNIwqrda4Poifl6dZT0M" />
                <span className="font-display font-bold text-xl tracking-tighter text-midnight dark:text-slate-200">ABNT NBR 17.193</span>
                <div className="flex items-center gap-1 text-midnight dark:text-slate-200">
                  <span className="material-symbols-outlined text-xl">verified</span>
                  <span className="font-bold text-sm">PROTESTO TÉCNICO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 translate-x-4 translate-y-4 rounded-[2.5rem]"></div>
            <img alt="Análise de Conformidade Solar" className="relative z-10 w-full h-[400px] lg:h-[650px] object-cover rounded-[2.5rem] shadow-premium ring-1 ring-black/5" src="/mulher-corporativa.png" />
            <div className="absolute -bottom-8 -left-8 z-20 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-premium border border-slate-100 dark:border-slate-800 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-midnight dark:text-slate-200 uppercase tracking-wider text-xs">Agenda de Auditoria</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Vagas para análise de conformidade <span className="text-primary dark:text-orange-500 font-bold italic">GRATUITA</span> esta semana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
