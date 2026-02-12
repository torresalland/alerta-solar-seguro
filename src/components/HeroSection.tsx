import { AlertTriangle, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-50 opacity-50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span className="text-sm font-bold uppercase tracking-wider text-warning">
              Alerta Técnico ABNT NBR 17.193:2025
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-primary mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Seu sistema solar pode estar em <span className="text-warning">desconformidade</span> com a norma de segurança desde 2025.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            A nova norma estabelece requisitos rígidos de <strong>desligamento rápido (RSD)</strong>. Mesmo gerando energia normalmente, instalações fora do padrão apresentam riscos ocultos irreparáveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-in fade-in slide-in-from-bottom-7 duration-700 delay-450">
            <a 
              href="#formulario"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-warning hover:bg-warning/90 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide shadow-lg transition-all transform hover:-translate-y-1"
            >
              <ShieldCheck className="w-5 h-5" />
              Verificar Conformidade (Grátis)
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            Diagnóstico técnico gratuito baseado estritamente na norma vigente. Não vendemos ações judiciais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
