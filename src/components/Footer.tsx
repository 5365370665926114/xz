const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="/prota-community-logo.png"
              alt="Prota Community"
              className="h-14 w-auto max-w-[220px] object-contain drop-shadow-[0_12px_32px_rgba(168,85,247,0.32)]"
            />
            <p className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
              Tudo o que você precisa para centralizar, aprender e vender em um só lugar.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-foreground transition-colors">Início</a>
            <a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a>
            <a href="#preco" className="hover:text-foreground transition-colors">Preço</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Prota Community. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
