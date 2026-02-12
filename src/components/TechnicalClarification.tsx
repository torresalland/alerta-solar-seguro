import { Info } from "lucide-react";

const TechnicalClarification = () => {
  return (
    <section className="bg-card py-14 md:py-18 border-y border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="text-lg md:text-xl font-bold text-foreground">
              Esclarecimento Técnico Importante
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base mb-5">
            É importante esclarecer: A norma ABNT NBR 17.193:2025 <strong className="text-foreground">NÃO proíbe</strong> a utilização de inversores do tipo string (parede). O que a norma exige é que, quando utilizados, esses equipamentos operem em conjunto com dispositivos de desligamento rápido (RSD) nível módulo.
            <br /><br />
            Se você possui um inversor string instalado sem essa proteção adicional, seu sistema está em desconformidade e operando com riscos desnecessários.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 text-center">
            <p className="text-lg md:text-xl font-extrabold text-primary">
              Inversor string + RSD = sistema conforme à norma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalClarification;
