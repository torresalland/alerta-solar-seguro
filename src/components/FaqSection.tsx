import React from "react";

export const FaqSection = () => {
  return (
    <section className="py-40 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-midnight">Dúvidas Técnicas Frequentes</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          <div className="faq-item group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <input className="hidden" id="faq-1" type="checkbox" />
            <label className="flex items-center justify-between p-6 cursor-pointer select-none" htmlFor="faq-1">
              <span className="text-lg font-semibold text-midnight group-hover:text-primary transition-colors pr-8 font-body">
                O que é a norma NBR 17.193:2025?
              </span>
              <div className="faq-icon flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-midnight">
                <span className="material-symbols-outlined">add</span>
              </div>
            </label>
            <div className="faq-content px-6">
              <p className="text-slate-500 leading-relaxed font-body">É a nova norma técnica da ABNT que estabelece requisitos rigorosos de segurança contra incêndio e proteção para sistemas fotovoltaicos, tornando obrigatórios dispositivos como o RSD em certas configurações.</p>
            </div>
          </div>
          <div className="faq-item group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <input className="hidden" id="faq-2" type="checkbox" />
            <label className="flex items-center justify-between p-6 cursor-pointer select-none" htmlFor="faq-2">
              <span className="text-lg font-semibold text-midnight group-hover:text-primary transition-colors pr-8 font-body">
                Por que o inversor String sem RSD é um problema?
              </span>
              <div className="faq-icon flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-midnight">
                <span className="material-symbols-outlined">add</span>
              </div>
            </label>
            <div className="faq-content px-6">
              <p className="text-slate-500 leading-relaxed font-body">Sem o RSD (Rapid Shutdown), os cabos de corrente contínua que descem do telhado permanecem energizados mesmo com o inversor desligado, oferecendo alto risco em caso de manutenção ou emergência.</p>
            </div>
          </div>
          <div className="faq-item group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <input className="hidden" id="faq-3" type="checkbox" />
            <label className="flex items-center justify-between p-6 cursor-pointer select-none" htmlFor="faq-3">
              <span className="text-lg font-semibold text-midnight group-hover:text-primary transition-colors pr-8 font-body">
                Como funciona o diagnóstico jurídico?
              </span>
              <div className="faq-icon flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-midnight">
                <span className="material-symbols-outlined">add</span>
              </div>
            </label>
            <div className="faq-content px-6">
              <p className="text-slate-500 leading-relaxed font-body">Avaliamos se a sua instalação cumpre as normas vigentes na data da entrega. Se houver desconformidade técnica, existe base legal para exigir a adequação ou indenização do fornecedor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
