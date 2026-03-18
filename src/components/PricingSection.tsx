import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Shield } from "lucide-react";

const includes = [
  "+10.000 cursos e materiais",
  "+1 milhão de arquivos",
  "Ferramentas de IA incluídas",
  "Checkout próprio",
  "Afiliação liberada",
  "Comunidade exclusiva",
  "Atualizações vitalícias",
  "Suporte dedicado",
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preco" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-xs sm:text-sm text-primary font-semibold mb-5 uppercase tracking-[0.2em]">
            Oferta de acesso vitalício
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Quanto vale centralizar{" "}
            <span className="text-gradient-purple">tudo em um só lugar?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Você economiza tempo, evita assinaturas soltas e entra numa estrutura pronta para executar com mais velocidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto glass-card p-8 sm:p-10 border-primary/40 glow-purple-intense text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Conteúdos e recursos que facilmente ultrapassam</p>
          <p className="text-2xl font-bold text-muted-foreground line-through mb-6">R$ 7.000+</p>

          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">Hoje por apenas</p>
          <p className="text-6xl sm:text-7xl font-black text-foreground mb-1">
            R$ <span className="text-gradient-purple">19,90</span>
          </p>
          <p className="text-muted-foreground text-sm mb-8">à vista · pagamento único · acesso imediato</p>

          <div className="text-left space-y-3 mb-8">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <Check size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://pay.cakto.com.br/753sgq9_809979"
            className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg animate-pulse-glow hover:glow-purple-intense transition-all duration-300"
          >
            QUERO GARANTIR MEU ACESSO
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
            <Shield size={14} />
            <span>Pagamento 100% seguro</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
