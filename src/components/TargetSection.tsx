import { motion } from "framer-motion";

const targets = [
  { icon: "🎓", title: "Estudantes de Ed. Física", desc: "Que querem sair na frente com o conhecimento prático que a faculdade não oferece." },
  { icon: "💼", title: "Profissionais formados", desc: "Que querem se atualizar e prescrever com mais segurança e embasamento científico." },
  { icon: "🏥", title: "Personal Trainers", desc: "Que atendem populações especiais e precisam de protocolos específicos por condição clínica." },
  { icon: "🏃", title: "Treinadores de corrida", desc: "Que trabalham com atletas, maratonistas e ultramaratonistas e buscam performance com ciência." },
  { icon: "🔬", title: "Pesquisadores", desc: "Que precisam de base prática sólida em prescrição para integrar com a pesquisa científica." },
  { icon: "🌍", title: "Todo o Brasil", desc: "Conteúdo de qualidade acessível para qualquer profissional do país, com preço low cost." },
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
