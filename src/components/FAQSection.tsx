import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    { q: "Tem suporte?", a: "Sim, temos suporte dedicado e uma comunidade ativa com mais de 9.000 membros para trocar experiências." },
    { q: "O acesso é vitalício?", a: "Sim. É pagamento único, sem mensalidade escondida." },
    { q: "Como recebo?", a: "Você entra pelo checkout e recebe o acesso direto na sequência." },
    { q: "Posso comprar agora?", a: "Sim. A página foi feita para empurrar a decisão sem distração." },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            O básico que todo mundo pergunta.
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5"
            >
              <summary className="cursor-pointer list-none font-semibold">{faq.q}</summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
