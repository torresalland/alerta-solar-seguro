const PageFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          Operação baseada na ABNT NBR 17.193:2025 e Código de Defesa do Consumidor.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground underline transition-colors">
            Política de Privacidade
          </a>
          <span className="text-border">|</span>
          <a href="#" className="text-muted-foreground hover:text-foreground underline transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
