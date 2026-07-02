import React from "react";

export const ProblemSection = () => {
  return (
    <section className="py-40 bg-background text-foreground transition-colors duration-300" id="problema">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight dark:text-slate-200 mb-6 leading-[1.2] tracking-tight">
              O problema invisível que pode custar mais de <span className="text-primary dark:text-orange-500 font-extrabold">R$ 50.000</span> ao longo dos anos
            </h2>
            <span className="block text-2xl text-slate-400 dark:text-slate-500 font-medium mb-10">(Não conformidade técnica)</span>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-red-100 flex items-center justify-center text-red-500 bg-red-50/50 group-hover:bg-red-50 transition-colors">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-midnight dark:text-slate-200">Desconformidade Generalizada</h4>
                  <p className="text-slate-500 dark:text-slate-400">A realidade é alarmante: a grande maioria das instalações fotovoltaicas no Brasil não cumpre a <b>NBR 17.193:2025</b>. Sem o dispositivo de <b>Desligamento Rápido (RSD)</b>, os painéis no seu telhado continuam energizados com alta voltagem mesmo após você desligar o disjuntor. Isso impede o combate ao fogo pelo Corpo de Bombeiros e coloca sua estrutura em risco total.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-red-100 flex items-center justify-center text-red-500 bg-red-50/50 group-hover:bg-red-50 transition-colors">
                  <span className="material-symbols-outlined">fire_extinguisher</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-midnight dark:text-slate-200">Risco Crítico: Inversores String</h4>
                  <p className="text-slate-500 dark:text-slate-400">O uso de inversores String <span className="text-primary dark:text-orange-500 font-bold">sem o dispositivo de desligamento rápido (RSD)</span> representa um risco grave à segurança, deixando você <span className="text-midnight dark:text-slate-200 font-semibold italic underline decoration-red-200 dark:decoration-red-900/60">vulnerável e sem buscar um direito que é seu</span> por uma instalação segura.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-red-100 flex items-center justify-center text-red-500 bg-red-50/50 group-hover:bg-red-50 transition-colors">
                  <span className="material-symbols-outlined">security_update_warning</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-midnight dark:text-slate-200">Insegurança Jurídica</h4>
                  <p className="text-slate-500 dark:text-slate-400">Sistemas fora da norma perdem garantia de fábrica e podem ter a cobertura de seguro negada em caso de sinistro, gerando prejuízo total ao proprietário.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-midnight dark:bg-slate-900 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-premium border border-transparent dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 transition-transform group-hover:scale-125">
              <span className="material-symbols-outlined text-[120px] text-white">engineering</span>
            </div>
            <p className="font-display italic text-2xl lg:text-3xl text-white leading-relaxed mb-10 relative z-10">
              "Ignorar uma instalação mal feita não é apenas um problema técnico, é um ralo de dinheiro que consome seu investimento dia após dia."
            </p>
            <div className="flex items-center gap-5 relative z-10 border-t border-white/10 pt-10">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shadow-cta-glow">
                <span className="material-symbols-outlined font-bold">description</span>
              </div>
              <div>
                <p className="font-bold text-white tracking-wide uppercase text-sm">Parecer Técnico-Legal</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Conformidade NBR 17.193</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
