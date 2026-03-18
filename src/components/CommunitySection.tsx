import { motion } from "framer-motion";
import { MessageCircle, Users, BadgeCheck } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 items-center"
        >
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-3">Comunidade</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Você não compra só conteúdo. Você entra num ambiente.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Mais de 9.000 membros ativos, trocando ideia, testando coisas novas e andando mais rápido.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Users, label: "9.000+", text: "membros" },
              { icon: MessageCircle, label: "Suporte", text: "dedicado" },
              { icon: BadgeCheck, label: "Ativa", text: "todos os dias" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="glass-card p-5 text-center">
                  <Icon className="mx-auto mb-4 text-primary" />
                  <p className="text-2xl font-black mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
