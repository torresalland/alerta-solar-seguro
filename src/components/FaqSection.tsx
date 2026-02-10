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
      "RSD (Rapid Shutdown) é o desligamento rápido. A norma ABNT NBR 17.193 exige que, ao desligar a energia da casa, os painéis solares parem de enviar alta voltagem instantaneamente para evitar eletrocussão e permitir combate a incêndios.",
  },
  {
    question: "Isso vai custar dinheiro para mim?",
    answer:
      "A verificação inicial é totalmente gratuita. Se identificarmos irregularidade, buscaremos que a(s) empresa(s) responsáveis arquem com a adequação e eventuais indenizações.",
  },
  {
    question: "Meu instalador disse que está tudo certo. Devo confiar?",
    answer:
      "Muitas empresas economizaram não instalando o RSD para baratear custos, ignorando a norma técnica. Nossa análise jurídica é independente e baseada exclusivamente na legislação vigente e laudos técnicos.",
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
