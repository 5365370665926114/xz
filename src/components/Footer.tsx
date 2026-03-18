import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5554984150368&text=Ol%C3%A1%2C+tenho+algumas+d%C3%BAvidas+sobre+a+Prota+Community%2C+poderia+me+ajudar%3F&type=phone_number&app_absent=0";

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

        <div className="mx-auto mt-10 max-w-xl glass-card bg-black/50 border border-white/10 p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground text-center mb-3">
            Ficou com alguma dúvida?
          </h3>
          <p className="text-muted-foreground text-base text-center leading-relaxed mb-7">
            Fale diretamente com a nossa equipe pelo WhatsApp. Estamos prontos para te ajudar!
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-[0_0_30px_-10px_rgba(37,211,102,0.9)] hover:brightness-110 transition-all duration-300"
          >
            <span className="inline-flex items-center justify-center w-6 h-6">
              <MessageCircle className="w-6 h-6" strokeWidth={2} />
            </span>
            CHAMAR NO WHATSAPP
          </a>
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
