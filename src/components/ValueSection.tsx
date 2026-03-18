import { motion } from "framer-motion";
import { FolderOpen, Sparkles, Rocket } from "lucide-react";

const items = [
  {
    icon: FolderOpen,
    title: "+10.000 materiais",
    text: "Cursos, templates e ferramentas prontos para usar.",
  },
  {
    icon: Sparkles,
    title: "Tudo organizado",
    text: "Menos caça, mais execução.",
  },
  {
    icon: Rocket,
    title: "Foco em resultado",
    text: "Acesso direto ao que você realmente vai usar.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">Por que entra</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Um acervo grande, sem parecer bagunçado.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <Icon className="text-primary mb-5" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
