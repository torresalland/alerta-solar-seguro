import { AlertTriangle, Sun, Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 mb-8">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Alerta de Segurança
            </span>
          </div>

          {/* Split visual */}
          <div className="flex items-center gap-6 md:gap-10 mb-10">
            {/* Peaceful side */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Sun className="w-10 h-10 md:w-14 md:h-14 text-accent" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-primary-foreground/60 uppercase tracking-wide">Energia Limpa</span>
            </div>

            {/* Divider */}
            <div className="h-20 md:h-28 w-px bg-primary-foreground/20" />

            {/* Danger side */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-destructive/20 flex items-center justify-center">
                <Flame className="w-10 h-10 md:w-14 md:h-14 text-destructive" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-destructive uppercase tracking-wide">Risco Real</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-primary-foreground mb-6">
            ALERTA AOS PROPRIETÁRIOS DE ENERGIA SOLAR.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            Seu sistema pode estar violando a norma{" "}
            <strong className="text-accent">ABNT NBR 17.193</strong> e colocando seu imóvel em risco de{" "}
            <strong className="text-destructive">incêndio incontrolável</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
