import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const modules = [
  { num: "01", title: "Fisiologia do Exercício Aplicada" },
  { num: "02", title: "Avaliação e Prescrição para Grupos Especiais" },
  { num: "03", title: "Biomecânica e Economia de Movimento" },
  { num: "04", title: "Periodização de Treinamento de Endurance" },
  { num: "05", title: "Gestão de Carreira e Atendimento Premium" },
];

const ModulesSection = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl uppercase tracking-wider text-center mb-16"
      >
        O que você vai <span className="text-primary">dominar</span>
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-1">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="group flex items-center justify-between p-5 rounded-button hover:bg-secondary transition-colors duration-300 cursor-default"
          >
            <div className="flex items-center gap-6">
              <span className="font-display text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                {mod.num}
              </span>
              <span className="text-lg font-medium">{mod.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
