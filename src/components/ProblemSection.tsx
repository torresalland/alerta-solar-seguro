import { Zap, ShieldOff, FileWarning } from "lucide-react";

const risks = [
  {
    icon: Zap,
    text: "Risco de choque elétrico fatal.",
  },
  {
    icon: ShieldOff,
    text: "Bloqueio do seguro residencial.",
  },
  {
    icon: FileWarning,
    text: "Instalação fora da norma técnica obrigatória.",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-card py-16 md:py-20 border-y border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-lg p-6 md:p-8 mb-10">
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            Se houver um curto-circuito, os bombeiros{" "}
            <strong>não podem atuar</strong> se o sistema não tiver o{" "}
            <strong className="text-destructive">'Rapid Shutdown'</strong>. Seus painéis continuam gerando até{" "}
            <strong className="text-destructive">1000V</strong> mesmo com a casa desligada.
          </p>
        </div>

        <div className="space-y-4">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-background rounded-lg p-4 md:p-5 border border-border shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <risk.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-foreground font-semibold text-base md:text-lg">
                {risk.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
