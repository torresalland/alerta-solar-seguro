import React from "react";

export const ProcessSection = () => {
    return (
        <section className="relative py-40 overflow-hidden" id="como-funciona">
            <div className="absolute inset-0 pattern-bg"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Como funciona o Processo de Diagnóstico</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Onde a <span className="text-midnight font-bold">conversa é direta e focada</span> no seu sistema. <span className="text-midnight font-bold">Sem termos técnicos complicados</span>, para você ter
                        <span className="text-highlight italic underline decoration-primary/20"> 100% clareza </span>
                        sobre a sua segurança.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] shadow-premium border border-white hover:border-primary/20 transition-all group">
                        <div className="w-14 h-14 bg-midnight text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl">inventory_2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Verificação de Equipamentos</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Analisamos se o seu inversor String possui o obrigatório Rapid Shutdown Device (RSD).</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] shadow-premium border border-white hover:border-primary/20 transition-all group">
                        <div className="w-14 h-14 bg-midnight text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl">rule</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Auditoria NBR 17.193:2025</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Confronto técnico rigoroso entre sua instalação e as novas exigências de segurança brasileiras.</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] shadow-premium border border-white hover:border-primary/20 transition-all group">
                        <div className="w-14 h-14 bg-midnight text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl">gavel</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Identificamos o Direito à Reparação</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Mapeamento jurídico de vícios de conformidade que geram responsabilidade do fornecedor.</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] shadow-premium border border-white hover:border-primary/20 transition-all group">
                        <div className="w-14 h-14 bg-midnight text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl">visibility</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Plano de Regularização</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Você sai com 100% de clareza sobre como tornar seu sistema seguro e legalmente regular.</p>
                    </div>
                </div>
                <div className="w-[92%] sm:w-auto mx-auto bg-midnight rounded-[2rem] sm:rounded-full py-6 sm:py-5 px-8 sm:px-10 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 sm:gap-10 text-xs font-bold tracking-widest text-white/80">
                    <div className="flex items-center gap-4 sm:gap-3">
                        <span className="material-symbols-outlined text-primary shrink-0">schedule</span>
                        <span className="leading-relaxed text-left">30 MINUTOS PARA DIAGNÓSTICO</span>
                    </div>
                    <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
                    <div className="flex items-center gap-4 sm:gap-3">
                        <span className="material-symbols-outlined text-primary shrink-0">verified_user</span>
                        <span className="leading-relaxed text-left">SESSÃO <span className="text-primary italic">GRATUITA</span> DE CONFORMIDADE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
