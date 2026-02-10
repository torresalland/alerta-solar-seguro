import { ShieldCheck, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const conformeItems = [
  {
    title: "Microinversores",
    text: "Cada módulo fotovoltaico opera de forma independente, com tensão CC limitada, reduzindo riscos elétricos em situações de emergência.",
  },
  {
    title: "Desligamento rápido intrínseco",
    text: "A arquitetura do sistema permite a redução imediata da tensão no telhado quando o sistema é desligado.",
  },
  {
    title: "Atendimento aos requisitos da ABNT NBR 17.193:2025",
    text: "Configuração compatível com os critérios atuais de segurança elétrica.",
  },
  {
    title: "Maior previsibilidade em seguros e vistorias",
    text: "Sistemas em conformidade tendem a atender exigências técnicas de seguradoras e órgãos fiscalizadores.",
  },
];

const adequacaoItems = [
  {
    title: "Inversor fotovoltaico do tipo string sem RSD",
    text: "Pode manter tensão CC elevada nos condutores mesmo após o desligamento do inversor.",
  },
  {
    title: "Exposição elétrica em emergências",
    text: "Em situações de manutenção, falha ou incêndio, a presença de alta tensão contínua exige medidas adicionais de segurança.",
  },
  {
    title: "Não atendimento integral à ABNT NBR 17.193:2025",
    text: "Sem a função de desligamento rápido, o sistema não cumpre todos os requisitos normativos vigentes.",
  },
  {
    title: "Possíveis impactos contratuais e regulatórios",
    text: "A não conformidade pode gerar exigências de adequação, restrições técnicas ou questionamentos em seguros e responsabilidades.",
  },
];

const EducationalSection = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-black text-center text-foreground mb-4">
          Comparativo de Sistemas Fotovoltaicos
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Entenda as diferenças em relação à conformidade com a norma de segurança vigente.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Conforme */}
          <div className="rounded-2xl border-2 border-success/40 bg-success/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Sistema em Conformidade com a Norma
              </h3>
            </div>

            <ul className="space-y-4">
              {conformeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Requer adequação */}
          <div className="rounded-2xl border-2 border-warning/40 bg-warning/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-warning/15 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Sistema que Requer Adequação Técnica
              </h3>
            </div>

            <ul className="space-y-4">
              {adequacaoItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
