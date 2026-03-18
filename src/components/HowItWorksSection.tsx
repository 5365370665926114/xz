import { motion } from "framer-motion";
import { CircleDashed, WandSparkles, CheckCircle2 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    { icon: CircleDashed, title: "1. Entra", text: "Você faz o acesso e libera a comunidade." },
    { icon: WandSparkles, title: "2. Explora", text: "Abre os materiais e pega o que fizer sentido." },
    { icon: CheckCircle2, title: "3. Usa", text: "Aplica de verdade sem ficar montando do zero." },
  ];

  return (
    <section id="como-funciona" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">Como funciona</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            O caminho é curto de propósito.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <Icon className="text-primary mb-5" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
