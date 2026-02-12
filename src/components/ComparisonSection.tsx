import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const ComparisonSection = () => {
    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-12">
                    Entenda a Diferença Técnica
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Cenário A: Conforme */}
                    <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-green-500 shadow-lg p-8 transform transition-all hover:scale-[1.01]">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Norma ABNT Atendida
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Microinversores <span className="text-sm font-normal text-muted-foreground block md:inline">OU</span> Inversor String + RSD
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                                <p className="font-semibold text-green-800 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" />
                                    Segurança Intrínseca
                                </p>
                                <p className="text-sm text-green-700 mt-1">
                                    Tensão reduzida automaticamente em situações de emergência. Risco de choque elétrico eliminado para bombeiros e mantenedores.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cenário B: Risco */}
                    <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-warning shadow-lg p-8 transform transition-all hover:scale-[1.01]">
                        <div className="absolute top-0 right-0 bg-warning text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Em Desconformidade
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="w-8 h-8 text-warning" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                    Inversor String <br />
                                    <span className="text-destructive font-black">SEM RSD (Rapid Shutdown)</span>
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                                <p className="font-semibold text-orange-800 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" />
                                    Risco de Alta Tensão
                                </p>
                                <p className="text-sm text-orange-700 mt-1">
                                    Alta tensão permanente no telhado mesmo com inversor desligado. Perigo letal em manutenções e combates a incêndio.
                                </p>
                            </div>

                            <div className="text-center mt-6">
                                <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-bold animate-pulse">
                                    REQUER ADEQUAÇÃO IMEDIATA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto italic">
                    * Nota: O funcionamento energético normal NÃO garante a segurança elétrica do sistema nem a conformidade com a ABNT NBR 17.193:2025.
                </p>
            </div>
        </section>
    );
};

export default ComparisonSection;
