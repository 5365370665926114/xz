import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[90px]" />

      <motion.div
        className="absolute top-32 left-[10%] w-20 h-20 glass-card flex items-center justify-center animate-float opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
      >
        <Zap className="text-primary" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[15%] w-16 h-16 glass-card flex items-center justify-center animate-float-delayed opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
      >
        <Shield className="text-accent" strokeWidth={1.5} />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 text-center pt-28">
        {/* Logo centralizada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <img
            src="/prota-community-logo.png"
            alt="Prota Community"
            className="w-[260px] max-w-full drop-shadow-[0_18px_45px_rgba(168,85,247,0.45)]"
          />
        </motion.div>

        {/* Badge social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <Users size={14} className="text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            <span className="text-foreground font-bold">9.000+</span> membros ativos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]"
        >
          <span className="block text-foreground">Centralize seus conteúdos,</span>
          <span className="block text-gradient-purple">ferramentas e comunidade</span>
          <span className="block text-foreground">em um só lugar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Pare de juntar peças soltas. Aqui você entra em uma estrutura pronta para acelerar aprendizado, execução e resultado.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Acesso vitalício, checkout próprio, comunidade exclusiva e ferramentas de IA para você começar sem travas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="#preco"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg glow-purple hover:glow-purple-intense transition-all duration-300 btn-shimmer"
            style={{ backgroundSize: "200% 100%" }}
          >
            Quero garantir meu acesso
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {["Acesso vitalício", "Pagamento único", "Suporte dedicado"].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full glass-card text-xs sm:text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
