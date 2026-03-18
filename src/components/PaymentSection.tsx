import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Clock3 } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { icon: CreditCard, title: "Pagamento único", text: "Você paga uma vez e entra." },
            { icon: Clock3, title: "Acesso vitalício", text: "Sem mensalidade, sem enrolação." },
            { icon: ShieldCheck, title: "Checkout próprio", text: "Fluxo simples e mais confiável." },
          ].map((item, index) => {
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

export default PaymentSection;
