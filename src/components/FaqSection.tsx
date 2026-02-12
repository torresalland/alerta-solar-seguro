import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o RSD e por que ele é obrigatório?",
    answer:
      "RSD (Rapid Shutdown) é o dispositivo de desligamento rápido exigido pela ABNT NBR 17.193:2025. Sua função é reduzir automaticamente a tensão dos painéis para níveis seguros (abaixo de 30V) em caso de emergência, protegendo sua família e profissionais de manutenção contra choques elétricos de alta voltagem.",
  },
  {
    question: "Como funciona o Diagnóstico Técnico Gratuito?",
    answer:
      "Nossa equipe de engenharia analisa as especificações do seu sistema (inversor e ano de instalação) para identificar se ele possui a proteção RSD obrigatória. O processo é 100% online e você recebe um parecer técnico preliminar via WhatsApp.",
  },
  {
    question: "Meu instalador disse que está tudo certo. Devo me preocupar?",
    answer:
      "Muitas instalações antigas ou de baixo custo utilizam inversores de parede (string) sem o dispositivo RSD adicional, ignorando a norma vigente. O funcionamento normal do sistema (geração de energia) não indica que ele é seguro. Nossa análise técnica verifica especificamente os critérios de segurança elétrica.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-card py-16 md:py-20 border-y border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-black text-center text-foreground mb-10">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-5 md:px-6 bg-background shadow-sm"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
