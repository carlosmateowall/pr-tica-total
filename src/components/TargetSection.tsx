import { motion } from "framer-motion";

const targets = [
  { icon: "🎓", title: "Estudantes de Ed. Física", desc: "Que querem sair na frente com o conhecimento prático que a faculdade não oferece." },
  { icon: "😰", title: "Formados inseguros", desc: "Profissionais que não se sentem seguros para prescrever exercício cardio com competência." },
  { icon: "🏥", title: "Personal Trainers", desc: "Que atendem grupos especiais (diabéticos, hipertensos, obesos, idosos) e precisam de protocolos." },
  { icon: "🏃", title: "Treinadores de corrida", desc: "Que trabalham com atletas amadores e profissionais e buscam performance com ciência." },
  { icon: "🔬", title: "Entusiastas da ciência", desc: "Que querem entender a fisiologia por trás da prescrição e aplicar com embasamento." },
  { icon: "💰", title: "Quem quer cobrar mais", desc: "Profissionais que querem entregar mais resultado e aumentar o valor da sessão de treinamento." },
];

const TargetSection = () => (
  <section id="para-quem" className="py-24 px-[5%] bg-secondary border-y border-border">
    <div className="max-w-[1200px] mx-auto">
      <p className="text-primary text-[0.72rem] font-medium tracking-[3px] uppercase mb-3">Para quem é</p>
      <h2 className="font-display text-foreground tracking-wider leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
        FEITO PRO PROFISSIONAL,<br />NÃO PRO LEIGO
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {targets.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="bg-background border border-border rounded-xl p-8 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="text-[2rem] block mb-4">{t.icon}</span>
            <h4 className="font-display text-[1.2rem] tracking-wider mb-2">{t.title}</h4>
            <p className="text-muted-foreground text-[0.82rem] leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetSection;
