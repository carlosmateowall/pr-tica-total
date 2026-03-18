import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    num: "01",
    title: "Testes de Esforço",
    description: "Aprenda a aplicar e interpretar testes ergoespirométricos, limiares ventilatórios e protocolos de avaliação cardiorrespiratória.",
    professor: "Marcus Gabriel",
    color: "marcus" as const,
  },
  {
    num: "02",
    title: "Prescrição Clínica",
    description: "Domine a prescrição de exercícios para hipertensão, diabetes, obesidade e outras doenças metabólicas com segurança.",
    professor: "Marcus Gabriel",
    color: "marcus" as const,
  },
  {
    num: "03",
    title: "Periodização",
    description: "Estruture macrociclos, mesociclos e microciclos para diferentes perfis de alunos e objetivos de saúde.",
    professor: "Marcus Gabriel",
    color: "marcus" as const,
  },
  {
    num: "04",
    title: "HIIT",
    description: "Protocolos de treino intervalado de alta intensidade baseados em evidências para máxima eficiência metabólica.",
    professor: "Marcus Gabriel",
    color: "marcus" as const,
  },
  {
    num: "05",
    title: "Performance — Corrida & Ultra",
    description: "Periodização para corrida de rua, meia maratona, maratona e ultramaratona com foco em performance e prevenção de lesões.",
    professor: "Israel Felipe",
    color: "israel" as const,
  },
];

const colorMap = {
  marcus: {
    accent: "hsl(75, 85%, 60%)",
    bg: "hsla(75, 85%, 60%, 0.08)",
    border: "hsla(75, 85%, 60%, 0.2)",
    badgeBg: "hsla(75, 85%, 60%, 0.15)",
    badgeText: "hsl(75, 85%, 60%)",
    numText: "hsla(75, 85%, 60%, 0.15)",
  },
  israel: {
    accent: "hsl(210, 100%, 70%)",
    bg: "hsla(210, 100%, 70%, 0.08)",
    border: "hsla(210, 100%, 70%, 0.2)",
    badgeBg: "hsla(210, 100%, 70%, 0.15)",
    badgeText: "hsl(210, 100%, 70%)",
    numText: "hsla(210, 100%, 70%, 0.15)",
  },
};

const ModulesSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl uppercase tracking-wider text-center mb-16"
      >
        O que você vai <span className="text-primary">dominar</span>
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {modules.map((mod, i) => {
          const c = colorMap[mod.color];
          return (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="relative rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: c.bg,
                border: `1px solid ${c.border}`,
              }}
            >
              <div className="flex gap-5">
                <span
                  className="font-display text-6xl md:text-7xl leading-none select-none"
                  style={{ color: c.numText }}
                >
                  {mod.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display text-xl md:text-2xl uppercase tracking-wide mb-2"
                    style={{ color: c.accent }}
                  >
                    {mod.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {mod.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className="text-xs font-medium border-0"
                      style={{ backgroundColor: c.badgeBg, color: c.badgeText }}
                    >
                      Prof. {mod.professor}
                    </Badge>
                    <Badge
                      className="text-xs font-medium border-0"
                      style={{ backgroundColor: c.badgeBg, color: c.badgeText }}
                    >
                      5–10 aulas
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ModulesSection;
