import { motion } from "framer-motion";
import { Gift, Gem, ShieldCheck } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    { icon: Gift, title: "Bônus 1", text: "Bancos extras e materiais atualizados." },
    { icon: Gem, title: "Bônus 2", text: "Recursos premium para acelerar decisão." },
    { icon: ShieldCheck, title: "Bônus 3", text: "Suporte e comunidade com valor real." },
  ];

  return (
    <section id="bonus" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">Bônus</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sem complicar: só valor extra.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <motion.div
                key={bonus.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <Icon className="text-accent mb-5" />
                <h3 className="text-lg font-bold mb-2">{bonus.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{bonus.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
