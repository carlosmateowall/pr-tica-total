import { motion } from "framer-motion";

const targets = [
  { title: "Para quem quer sair do básico", desc: "Personal trainers que querem ir além da musculação e entender fisiologia aplicada." },
  { title: "Para quem busca o alto rendimento", desc: "Treinadores de corrida que querem dominar periodização e economia de movimento." },
  { title: "Para quem atende grupos especiais", desc: "Profissionais que prescrevem exercícios para hipertensos, diabéticos e obesos." },
  { title: "Para quem quer se diferenciar", desc: "Educadores físicos que querem construir uma carreira premium baseada em evidências." },
];

const TargetSection = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl uppercase tracking-wider text-center mb-16"
      >
        Para quem é <span className="text-primary">esse curso?</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-4">
        {targets.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="bg-card rounded-card card-shadow p-8"
          >
            <h3 className="font-display text-2xl uppercase tracking-wider mb-3">
              {t.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetSection;
