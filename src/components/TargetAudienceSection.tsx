import React from "react";

export const TargetAudienceSection = () => {
    return (
        <section className="py-40 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-px bg-slate-200 rounded-[3rem] overflow-hidden shadow-premium border border-slate-200">
                    <div className="bg-white p-8 md:p-12 lg:p-24">
                        <h3 className="text-3xl font-bold text-green-700 mb-12 flex items-center gap-4">
                            <span className="material-symbols-outlined text-4xl">task_alt</span>
                            Para Quem É
                        </h3>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-5">
                                <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                                <span className="text-lg text-slate-600 font-medium">Para você que <span className="text-midnight font-extrabold underline decoration-green-200">já tem energia solar</span> com inversores String.</span>
                            </li>
                            <li className="flex items-start gap-5">
                                <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                                <span className="text-lg text-slate-600">Para você que <span className="text-midnight font-bold">ouviu alertas</span> sobre a obrigatoriedade do RSD e quer saber se o seu sistema é seguro.</span>
                            </li>
                            <li className="flex items-start gap-5">
                                <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                                <span className="text-lg text-slate-600">Para proprietários que buscam conformidade com a nova <span className="text-midnight font-bold">NBR 17.193:2025</span>.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 md:p-12 lg:p-24">
                        <h3 className="text-3xl font-bold text-slate-400 mb-12 flex items-center gap-4">
                            <span className="material-symbols-outlined text-4xl">cancel</span>
                            Para Quem NÃO É
                        </h3>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-5">
                                <span className="material-symbols-outlined text-slate-300 text-2xl">block</span>
                                <span className="text-lg text-slate-400 font-medium">Sistemas que já possuem Microinversores (que têm RSD nativo).</span>
                            </li>
                            <li className="flex items-start gap-5">
                                <span className="material-symbols-outlined text-slate-300 text-2xl">block</span>
                                <span className="text-lg text-slate-400">Pessoas que ainda não realizaram a instalação.</span>
                            </li>
                            <li className="flex items-start gap-5">
                                <span className="material-symbols-outlined text-slate-300 text-2xl">block</span>
                                <span className="text-lg text-slate-400">Instalações Off-grid de pequeno porte sem conexão com a rede.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
