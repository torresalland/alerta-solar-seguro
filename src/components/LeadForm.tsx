import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ShieldCheck } from "lucide-react";

const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

const leadSchema = z.object({
  nome_completo: z.string().trim().min(3, "Informe seu nome completo.").max(100),
  whatsapp: z.string().regex(phoneRegex, "Formato: (XX) XXXXX-XXXX"),
  tipo_instalacao: z.string().min(1, "Selecione o tipo de instalação."),
  tempo_instalacao: z.string().min(1, "Selecione o tempo de instalação."),
});

type LeadData = z.infer<typeof leadSchema>;

const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number

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
    tipo_instalacao: "",
    tempo_instalacao: "",
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
      const { error } = await supabase.from("leads").insert({
        nome_completo: result.data.nome_completo,
        whatsapp: result.data.whatsapp,
        tipo_instalacao: result.data.tipo_instalacao,
        tempo_instalacao: result.data.tempo_instalacao,
      });

      if (error) throw error;

      // Show analyzing state
      setLoading(false);
      setAnalyzing(true);

      setTimeout(() => {
        const msg = encodeURIComponent(
          `Olá, me chamo ${result.data.nome_completo}. Fiz o cadastro no site sobre o risco do sistema solar. Minha instalação é ${result.data.tipo_instalacao} e tem ${result.data.tempo_instalacao}. Quero saber se tenho direito à indenização.`
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
      <section id="formulario" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-10 text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
            <p className="text-xl font-bold text-foreground">Analisando perfil...</p>
            <p className="text-muted-foreground mt-2">Aguarde enquanto verificamos sua elegibilidade.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-7 h-7 text-primary" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Verificar Elegibilidade e Risco Gratuitamente
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClasses}>Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome completo"
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

            <div>
              <label className={labelClasses}>Tipo de Instalação</label>
              <select
                value={form.tipo_instalacao}
                onChange={(e) => handleChange("tipo_instalacao", e.target.value)}
                className={selectClasses}
              >
                <option value="">Selecione...</option>
                <option value="Residencial">Residencial</option>
                <option value="Comercial">Comercial</option>
                <option value="Rural">Rural</option>
                <option value="Não sei dizer">Não sei dizer</option>
              </select>
              {errors.tipo_instalacao && <p className={errorClasses}>{errors.tipo_instalacao}</p>}
            </div>

            <div>
              <label className={labelClasses}>Tempo de Instalação</label>
              <select
                value={form.tempo_instalacao}
                onChange={(e) => handleChange("tempo_instalacao", e.target.value)}
                className={selectClasses}
              >
                <option value="">Selecione...</option>
                <option value="Menos de 1 ano">Menos de 1 ano</option>
                <option value="1 a 3 anos">1 a 3 anos</option>
                <option value="Mais de 4 anos">Mais de 4 anos</option>
              </select>
              {errors.tempo_instalacao && <p className={errorClasses}>{errors.tempo_instalacao}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary py-4 text-primary-foreground font-extrabold text-lg uppercase tracking-wide shadow-lg hover:opacity-90 transition-opacity disabled:opacity-60 animate-pulse-cta"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </span>
              ) : (
                "VERIFICAR MEU SISTEMA AGORA"
              )}
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Análise 100% gratuita e confidencial. Você será redirecionado para um especialista jurídico.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
