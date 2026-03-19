import { motion } from "framer-motion";

const modules = [
  {
    num: "01",
    title: "Apresentação",
    description: "Objetivo do curso, público-alvo, erros mais frequentes dos profissionais e o que você vai encontrar aqui.",
    professor: "Marcus Gabriel",
    type: "mg" as const,
  },
  {
    num: "02",
    title: "Fisiologia do Exercício",
    description: "Sistema energético, cardiorrespiratório, muscular e nervoso. Fadiga, adaptação ao treinamento e princípios fundamentais.",
    professor: "Marcus Gabriel",
    type: "mg" as const,
  },
  {
    num: "03",
    title: "Testes e Avaliações",
    description: "Por que avaliar? Quais os principais testes, qual o ideal para cada perfil, como realizar e o que fazer com os resultados.",
    professor: "Marcus Gabriel",
    type: "mg" as const,
  },
  {
    num: "04",
    title: "Prescrição — Grupos Especiais",
    description: "Diabetes, hipertensão, obesidade e idosos. Diretrizes, recomendações e organização de treinamento para cada subgrupo.",
    professor: "Marcus Gabriel",
    type: "mg" as const,
  },
  {
    num: "05",
    title: "Prescrição — Atletas",
    description: "Classificação de atleta profissional e amador. Variáveis de treinamento, recomendações e organização prática.",
    professor: "Israel Felipe",
    type: "if" as const,
  },
  {
    num: "06",
    title: "Métodos de Treino Cardio",
    description: "Contínuo, intervalado, fartlek, contínuo vs variado. Quando usar cada método e como aplicar na prática.",
    professor: "Marcus Gabriel",
    type: "mg" as const,
  },
  {
    num: "★",
    title: "BÔNUS — HIIT",
    description: "O que é e o que NÃO é. Principais erros. Tipos: RST, curto, longo, SIT. Como prescrever com segurança e eficiência.",
    professor: "Marcus Gabriel",
    type: "bonus" as const,
  },
];

const styles = {
  mg: {
    num: "rgba(181,242,61,0.25)",
    prof: "bg-primary/10 text-primary",
  },
  if: {
    num: "rgba(100,180,255,0.25)",
    prof: "bg-[rgba(100,180,255,0.1)] text-[#64b4ff]",
  },
  bonus: {
    num: "rgba(255,200,60,0.35)",
    prof: "bg-[rgba(255,200,60,0.1)] text-[#ffc83c]",
  },
};

const ModulesSection = () => (
  <section id="modulos" className="py-24 px-[5%]">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
        <div>
          <p className="text-primary text-[0.72rem] font-medium tracking-[3px] uppercase mb-3">Conteúdo do curso</p>
          <h2 className="font-display text-foreground tracking-wider leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            6 MÓDULOS + BÔNUS,<br />DO ZERO AO AVANÇADO
          </h2>
        </div>
        <span className="text-muted-foreground text-[0.78rem]">5–10 aulas por módulo</span>
      </div>

      <div className="flex flex-col border border-border rounded-xl overflow-hidden" style={{ gap: "1px", backgroundColor: "rgba(255,255,255,0.07)" }}>
        {modules.map((mod, i) => {
          const s = styles[mod.type];
          const isBonus = mod.type === "bonus";
          return (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className={`bg-background grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto_auto] items-center gap-4 md:gap-8 px-6 md:px-10 py-7 hover:bg-secondary transition-colors ${isBonus ? "border-t-2 border-t-[#ffc83c]/30" : ""}`}
            >
              <span className="font-display text-[2.8rem] leading-none tracking-tighter" style={{ color: s.num }}>
                {mod.num}
              </span>
              <div>
                <h3 className={`font-display text-[1.3rem] tracking-wider mb-1 ${isBonus ? "text-[#ffc83c]" : ""}`}>{mod.title}</h3>
                <p className="text-muted-foreground text-[0.82rem] leading-relaxed">{mod.description}</p>
              </div>
              <span className={`hidden md:inline-block text-[0.65rem] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap ${s.prof}`}>
                {isBonus ? "Bônus" : mod.professor}
              </span>
              <span className="hidden md:inline-block text-[0.65rem] font-medium tracking-wider uppercase text-muted-foreground bg-accent px-3 py-1.5 rounded-full whitespace-nowrap">
                5–10 aulas
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ModulesSection;
