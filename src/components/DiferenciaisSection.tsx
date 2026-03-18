import { motion } from "framer-motion";
import { CheckCircle2, Layers3, Shield, ArrowUpRight } from "lucide-react";

const DiferenciaisSection = () => {
  const cards = [
    { icon: Layers3, title: "Centralizado", text: "Tudo em um só lugar, sem pular entre várias assinaturas." },
    { icon: CheckCircle2, title: "Direto ao ponto", text: "Sem excesso de bloco e sem enrolação de venda." },
    { icon: Shield, title: "Mais confiança", text: "Marca forte e acesso claro ajudam a converter melhor." },
    { icon: ArrowUpRight, title: "Escala fácil", text: "Estrutura pronta para crescer sem refazer o site inteiro." },
  ];

  return (
    <section id="diferenciais" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">Diferenciais</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            O que faz a Prota parecer mais séria.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <Icon className="text-primary mb-5" />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
