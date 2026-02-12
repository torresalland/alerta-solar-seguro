import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ClipboardCheck } from "lucide-react";

const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

const leadSchema = z.object({
  nome_completo: z.string().trim().min(3, "Informe seu nome completo.").max(100),
  whatsapp: z.string().regex(phoneRegex, "Formato: (XX) XXXXX-XXXX"),
  tipo_inversor: z.string().min(1, "Selecione o tipo de inversor."),
  ano_instalacao: z.string().min(1, "Selecione o ano da instalação."),
  possui_projeto: z.string().min(1, "Informe se possui projeto/ART."),
});

type LeadData = z.infer<typeof leadSchema>;

const WHATSAPP_NUMBER = "5511936197888";

function formatPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const LeadForm = () => {
  const [form, setForm] = useState<LeadData>({
    nome_completo: "",
    whatsapp: "",
    tipo_inversor: "",
    ano_instalacao: "",
    possui_projeto: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleChange = (field: keyof LeadData, value: string) => {
    const newValue = field === "whatsapp" ? formatPhoneInput(value) : value;
    setForm((prev) => ({ ...prev, [field]: newValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof LeadData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Note: We are saving to the same 'leads' table. Ensure the columns exist or simply accept that we might be sending extra data if the table is unstructured (JSONB) or strict.
      // If strict, this might fail if columns don't exist. Assuming Supabase table is flexible or we just send what matches.
      // For safety in this "blind" edit, I will stick to sending the core fields and maybe putting the extra tech info in a 'metadata' or 'notes' column if available,
      // BUT the prompt implies I can just "Use" the supabase client. 
      // To be safe and avoid SQL errors if columns are missing, I'll map the new fields to the closest existing ones OR typical generic ones if I knew them.
      // Since I can't check the DB schema, I will try to insert the keys as they are. If it fails, the user will see an error, but usually these setups are flexible.
      // actually, let's map to the existing columns 'tipo_instalacao' and 'tempo_instalacao' where possible to minimize risk, 
      // or just send them if the user (developer) is expected to handle the DB side.
      // Given I am "Antigravity", I should probably try to be robust. 
      // Existing columns seen in code: nome_completo, whatsapp, tipo_instalacao, tempo_instalacao.
      // I will map: 
      // tipo_inversor -> tipo_instalacao
      // ano_instalacao -> tempo_instalacao
      // possui_projeto -> (concatenated into valid fields or just sent if flexible). 
      // Let's TRY to send strict fields first.

      const { error } = await supabase.from("leads").insert({
        nome_completo: result.data.nome_completo,
        whatsapp: result.data.whatsapp,
        // Mapping new concepts to existing DB columns to ensure stability without DB migration tools
        tipo_instalacao: `${result.data.tipo_inversor} (Projeto: ${result.data.possui_projeto})`,
        tempo_instalacao: `Instalado em: ${result.data.ano_instalacao}`,
      });

      if (error) throw error;

      setLoading(false);
      setAnalyzing(true);

      setTimeout(() => {
        const msg = encodeURIComponent(
          `*SOLICITAÇÃO DE DIAGNÓSTICO TÉCNICO*\n\n` +
          `👤 *Nome*: ${result.data.nome_completo}\n` +
          `🔌 *Inversor*: ${result.data.tipo_inversor}\n` +
          `📅 *Ano*: ${result.data.ano_instalacao}\n` +
          `📋 *Possui Projeto/ART*: ${result.data.possui_projeto}\n\n` +
          `Gostaria de verificar a conformidade do meu sistema com a NBR 17.193:2025.`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
        setAnalyzing(false);
      }, 1500);
    } catch {
      setLoading(false);
      setErrors({ nome_completo: "Erro ao enviar. Tente novamente." });
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-base";
  const selectClasses =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-base appearance-none";
  const labelClasses = "block text-sm font-semibold text-foreground mb-1.5";
  const errorClasses = "text-destructive text-sm mt-1";

  if (analyzing) {
    return (
      <section id="formulario" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-10 text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
            <p className="text-xl font-bold text-foreground">Processando triagem técnica...</p>
            <p className="text-muted-foreground mt-2">Você será redirecionado para o consultor técnico.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-3">
            Diagnóstico Técnico Gratuito
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Preencha a triagem abaixo para verificar se seu sistema atende aos requisitos de segurança da ABNT NBR 17.193:2025.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <ClipboardCheck className="w-7 h-7 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Dados da Instalação
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClasses}>Qual o tipo do seu inversor?</label>
              <select
                value={form.tipo_inversor}
                onChange={(e) => handleChange("tipo_inversor", e.target.value)}
                className={selectClasses}
              >
                <option value="">Selecione...</option>
                <option value="Microinversor">Microinversor</option>
                <option value="Inversor String (Parede)">Inversor String (Parede)</option>
                <option value="Não sei dizer">Não sei dizer</option>
              </select>
              {errors.tipo_inversor && <p className={errorClasses}>{errors.tipo_inversor}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Ano da Instalação</label>
                <select
                  value={form.ano_instalacao}
                  onChange={(e) => handleChange("ano_instalacao", e.target.value)}
                  className={selectClasses}
                >
                  <option value="">Ano...</option>
                  {[2025, 2024, 2023, 2022, 2021, 2020, "Antigo"].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                {errors.ano_instalacao && <p className={errorClasses}>{errors.ano_instalacao}</p>}
              </div>

              <div>
                <label className={labelClasses}>Possui Projeto/ART?</label>
                <select
                  value={form.possui_projeto}
                  onChange={(e) => handleChange("possui_projeto", e.target.value)}
                  className={selectClasses}
                >
                  <option value="">Selecione...</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value="Não sei">Não sei</option>
                </select>
                {errors.possui_projeto && <p className={errorClasses}>{errors.possui_projeto}</p>}
              </div>
            </div>

            <hr className="border-t border-border/50" />

            <div>
              <label className={labelClasses}>Seu Nome Completo</label>
              <input
                type="text"
                placeholder="Nome do titular"
                value={form.nome_completo}
                onChange={(e) => handleChange("nome_completo", e.target.value)}
                className={inputClasses}
                maxLength={100}
              />
              {errors.nome_completo && <p className={errorClasses}>{errors.nome_completo}</p>}
            </div>

            <div>
              <label className={labelClasses}>WhatsApp com DDD</label>
              <input
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                value={form.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                className={inputClasses}
                maxLength={16}
              />
              {errors.whatsapp && <p className={errorClasses}>{errors.whatsapp}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary py-4 text-white font-extrabold text-lg uppercase tracking-wide shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processando...
                </span>
              ) : (
                "SOLICITAR DIAGNÓSTICO TÉCNICO"
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Seus dados são utilizados estritamente para a análise técnica de conformidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
