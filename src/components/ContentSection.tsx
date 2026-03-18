import { motion } from "framer-motion";
import { FolderOpen, Bot, Presentation, FileText } from "lucide-react";

const ContentSection = () => {
  const items = [
    { icon: FolderOpen, title: "Materiais", text: "Cursos, templates e arquivos úteis já separados." },
    { icon: Bot, title: "IA", text: "Ferramentas e recursos para acelerar execução." },
    { icon: Presentation, title: "Estratégia", text: "Conteúdo pra vender, posicionar e crescer." },
    { icon: FileText, title: "Scripts", text: "Copys e modelos para não começar do zero." },
  ];

  return (
    <section id="conteudo" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">O que você recebe</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Menos promessa, mais biblioteca útil.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
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
                <Icon className="text-accent mb-5" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
