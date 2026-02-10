import { BookOpen } from "lucide-react";

const NormContextSection = () => {
  return (
    <section className="bg-card py-14 md:py-18 border-y border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4 bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
              Contexto da Norma ABNT NBR 17.193:2025
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              A ABNT NBR 17.193:2025 define requisitos obrigatórios de segurança para sistemas fotovoltaicos conectados à rede elétrica, incluindo a necessidade de desligamento rápido (RSD – Rapid Shutdown Device) em sistemas que operam com altas tensões em corrente contínua (CC).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NormContextSection;
