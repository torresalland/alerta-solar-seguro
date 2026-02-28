import React from "react";

export const TestimonialSection = () => {
    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-midnight">O que dizem nossos clientes</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-premium border border-slate-50 flex flex-col justify-between h-full hover:-translate-y-2 transition-transform">
                        <div>
                            <div className="flex gap-1 mb-6">
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                            </div>
                            <p className="text-slate-600 text-lg italic leading-relaxed mb-10">"Descobri que meu sistema era uma bomba relógio. A SolarSEMRISCO me ajudou a exigir a adequação imediata sem custos."</p>
                        </div>
                        <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                <img alt="Roberto S." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUzzjpnLLoTyVItZ-kMKHz0yes3XUTRzIenxuI5Rqd-v5aVZ2k3Wjd6rbBQg568iH3z6n6c50KdvrzOVfVkeZ_3O72HAyfzJtjYf6PVDPWl_h1H-VNFuL7-VNppxvq1b32bJk7hPAjpWkCtXKcmxIV3D1DNK2cyNQgHGqtFcrWE1fX7q_hxJ74yjcgLaUlz6NM8IOIFBqcaNV8I1Q78rvxs6Hi57IRznI7GaIcrgtkarspPUU5p4zOeouKY3Kcn6f8LZjr1cZKNY4" />
                            </div>
                            <div>
                                <p className="font-bold text-midnight leading-none mb-1">Roberto S.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Engenheiro Civil</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-premium border border-slate-50 flex flex-col justify-between h-full hover:-translate-y-2 transition-transform">
                        <div>
                            <div className="flex gap-1 mb-6">
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                            </div>
                            <p className="text-slate-600 text-lg italic leading-relaxed mb-10">"Achei que o problema era meu, mas era erro da instaladora. Consegui a reparação total baseada na NBR 17.193."</p>
                        </div>
                        <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                <img alt="Mariana L." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlmWxwK5HoSshBDqn4QJKVLIegKxKBJsHybKN0BeZrzY7H7cgsHQGEEtp8Q5yVTbwX5xoEydIgVr3pkrJsWc3HI7yR2s0BEom4x2VQsxfDmjM_6R_DCVADCn_We2XxuTSsXD4Ha6wB-KC9_j8svB2ODbkdG4MVjosX-dorKcoAmuGyV7o3EFBk3geE6QDRkiB1f3bYKElHvAAXdmva6qZnlUPqntp65B6_LLFzF1GPOfbYS7VYFmDkDCTOxk58Q7Tn74OW71S8D0o" />
                            </div>
                            <div>
                                <p className="font-bold text-midnight leading-none mb-1">Mariana L.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Proprietária Rural</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-premium border border-slate-50 flex flex-col justify-between h-full hover:-translate-y-2 transition-transform">
                        <div>
                            <div className="flex gap-1 mb-6">
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                                <span className="material-symbols-outlined text-[#FFD700] fill-[1]">star</span>
                            </div>
                            <p className="text-slate-600 text-lg italic leading-relaxed mb-10">"Processo transparente e muito técnico. Em poucos dias meu caso já estava qualificado e em andamento."</p>
                        </div>
                        <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                <img alt="Carlos A." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqDoyT6zSj6vXrjOSyPp5l0TjA6MUdOLIgHFRmqWgTccljso32YfVtG44D4YXJAS4MBBe1bY7pULE0WQj7yjeWI42nPadKX_FAcxjFPXdB65zeRLlpbZ1rJkNANHlmOMCBej5ma5NN4cBAbA3dK6D3Vy3ZeJx1BsBkX1-Wd6vGa0WF6nMYAqB0daYfemf0JzTOKt7juT_5aE17A3kDQdmzMV8nw3fXvEM166Y0rsRPZYYCH5TuMomlXGRrnrhxRAEKPktg-UoxfFo" />
                            </div>
                            <div>
                                <p className="font-bold text-midnight leading-none mb-1">Carlos A.</p>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Empresário</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
