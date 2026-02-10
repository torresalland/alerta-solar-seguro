import { AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Subtle warning stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-warning via-destructive to-warning" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Warning badge */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-warning/30 bg-warning/10 px-4 py-2 mb-8">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span className="text-sm font-bold uppercase tracking-wider text-warning">
              Alerta de Segurança
            </span>
          </div>

          {/* House icon with warning */}
          <div className="relative mb-8">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-muted flex items-center justify-center relative">
              <svg viewBox="0 0 80 80" className="w-20 h-20 md:w-24 md:h-24" fill="none">
                {/* House */}
                <path d="M40 10L10 35V70H30V50H50V70H70V35L40 10Z" fill="hsl(var(--primary))" opacity="0.15" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                {/* Solar panels */}
                <rect x="22" y="18" width="12" height="8" rx="1" fill="hsl(var(--primary))" opacity="0.6" transform="rotate(-25 28 22)" />
                <rect x="38" y="12" width="12" height="8" rx="1" fill="hsl(var(--primary))" opacity="0.6" transform="rotate(-25 44 16)" />
                <rect x="46" y="18" width="12" height="8" rx="1" fill="hsl(var(--primary))" opacity="0.6" transform="rotate(-25 52 22)" />
              </svg>
              {/* Warning overlay */}
              <div className="absolute -top-3 -right-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-warning flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-warning-foreground" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-foreground mb-6">
            Seu sistema solar pode colocar sua família em{" "}
            <span className="text-destructive">risco letal</span>{" "}
            em caso de incêndio.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A norma ABNT NBR 17.193 exige dispositivos de segurança que{" "}
            <strong className="text-foreground">90% das instalações ignoraram</strong>. Sem isso, desligar o disjuntor{" "}
            <strong className="text-destructive">NÃO desliga os painéis</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
