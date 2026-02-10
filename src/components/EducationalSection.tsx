import { ShieldCheck, Zap, AlertTriangle } from "lucide-react";

const EducationalSection = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black text-center text-foreground mb-4">
          Entenda a Diferença Crítica
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Nem todo sistema solar oferece o mesmo nível de segurança. Veja qual tipo pode estar colocando você em perigo.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Safe Column */}
          <div className="rounded-2xl border-2 border-success/40 bg-success/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Microinversores (Mais Seguros)
              </h3>
            </div>

            {/* Icon illustration */}
            <div className="bg-background rounded-xl p-4 mb-5 flex items-center justify-center">
              <svg viewBox="0 0 160 80" className="w-full max-w-[200px] h-auto" fill="none">
                {/* Panel */}
                <rect x="30" y="5" width="100" height="35" rx="3" fill="hsl(146 52% 36% / 0.15)" stroke="hsl(146 52% 36%)" strokeWidth="2" />
                <line x1="55" y1="5" x2="55" y2="40" stroke="hsl(146 52% 36% / 0.4)" strokeWidth="1" />
                <line x1="80" y1="5" x2="80" y2="40" stroke="hsl(146 52% 36% / 0.4)" strokeWidth="1" />
                <line x1="105" y1="5" x2="105" y2="40" stroke="hsl(146 52% 36% / 0.4)" strokeWidth="1" />
                {/* Small boxes under panel */}
                <rect x="40" y="43" width="16" height="10" rx="2" fill="hsl(146 52% 36%)" opacity="0.7" />
                <rect x="72" y="43" width="16" height="10" rx="2" fill="hsl(146 52% 36%)" opacity="0.7" />
                <rect x="104" y="43" width="16" height="10" rx="2" fill="hsl(146 52% 36%)" opacity="0.7" />
                {/* Low voltage line */}
                <path d="M80 53 L80 72" stroke="hsl(146 52% 36%)" strokeWidth="2" strokeDasharray="4 2" />
                <text x="80" y="78" textAnchor="middle" fontSize="7" fill="hsl(146 52% 36%)">Baixa Voltagem</text>
              </svg>
            </div>

            <p className="text-foreground leading-relaxed">
              A conversão de energia ocorre no telhado. Baixa voltagem descendo para sua casa.{" "}
              <strong>Menor risco de arco elétrico.</strong>
            </p>
          </div>

          {/* Danger Column */}
          <div className="rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-6 md:p-8 relative">
            <div className="absolute -top-3 right-4 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Foco da Nossa Ação
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-destructive/15 flex items-center justify-center">
                <Zap className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Inversor de Parede "String" (Risco Elevado)
              </h3>
            </div>

            {/* Icon illustration */}
            <div className="bg-background rounded-xl p-4 mb-5 flex items-center justify-center">
              <svg viewBox="0 0 160 80" className="w-full max-w-[200px] h-auto" fill="none">
                {/* Panel */}
                <rect x="30" y="5" width="100" height="35" rx="3" fill="hsl(0 100% 50% / 0.1)" stroke="hsl(0 100% 50%)" strokeWidth="2" />
                <line x1="55" y1="5" x2="55" y2="40" stroke="hsl(0 100% 50% / 0.3)" strokeWidth="1" />
                <line x1="80" y1="5" x2="80" y2="40" stroke="hsl(0 100% 50% / 0.3)" strokeWidth="1" />
                <line x1="105" y1="5" x2="105" y2="40" stroke="hsl(0 100% 50% / 0.3)" strokeWidth="1" />
                {/* High voltage cables */}
                <path d="M80 40 L80 55" stroke="hsl(0 100% 50%)" strokeWidth="3" />
                {/* Lightning bolts */}
                <path d="M72 46 L76 42 L74 46 L78 42" stroke="hsl(51 100% 50%)" strokeWidth="1.5" />
                <path d="M86 46 L90 42 L88 46 L92 42" stroke="hsl(51 100% 50%)" strokeWidth="1.5" />
                {/* Big inverter box */}
                <rect x="60" y="56" width="40" height="20" rx="3" fill="hsl(0 100% 50% / 0.2)" stroke="hsl(0 100% 50%)" strokeWidth="2" />
                <text x="80" y="69" textAnchor="middle" fontSize="6" fill="hsl(0 100% 50%)" fontWeight="bold">1000V</text>
              </svg>
            </div>

            <p className="text-foreground leading-relaxed">
              Gera até <strong className="text-destructive">1000V de corrente contínua</strong>. Se não tiver o dispositivo RSD, os cabos continuam
              energizados mesmo se você desligar o disjuntor.{" "}
              <strong className="text-destructive">Os bombeiros não podem apagar o fogo sem risco de choque letal.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
