import { motion } from "framer-motion";
import marcusImg from "@/assets/professor-marcus.jpg";
import israelImg from "@/assets/professor-israel.jpg";

const tags = [
  "Diabetes", "Hipertensão", "Obesidade", "Idosos",
  "Atletas", "Maratona", "HIIT", "Fartlek", "Periodização",
];

const HeroSection = () => (
  <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[5%] pt-20 gap-16 overflow-hidden">
    {/* Glow */}
    <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(181,242,61,0.07)_0%,transparent_70%)] pointer-events-none" />

    {/* Left */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-[0.72rem] font-medium tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Formação Profissional · Prescrição Cardiorrespiratória
      </span>

      <h1 className="font-display leading-[0.95] tracking-wider mb-6" style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}>
        FORMADO MAS<br />
        <span className="text-primary">INSEGURO</span><br />
        <span className="text-outline">PRA PRESCREVER?</span>
      </h1>

      <p className="text-muted-foreground text-base leading-[1.75] max-w-[480px] mb-8">
        O curso que a sua faculdade não te deu. Aprenda a prescrever do cardiopata ao atleta de forma prática e objetiva — com quem faz isso todos os dias.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag) => (
          <span key={tag} className="bg-primary/[0.07] border border-primary/15 text-primary/60 text-[0.7rem] font-medium tracking-wider px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6 pb-16">
        <a href="#preco" className="bg-primary text-primary-foreground font-bold text-[0.85rem] tracking-wider uppercase px-9 py-4 rounded-sm hover:brightness-90 transition-all inline-block">
          Quero me inscrever →
        </a>
        <a href="#modulos" className="text-foreground text-[0.85rem] opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2">
          Ver os módulos ↓
        </a>
      </div>
    </motion.div>

    {/* Right — Duo Photos */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
      className="relative hidden md:grid grid-cols-2 gap-3 self-end pt-20"
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display text-[0.85rem] tracking-[2px] px-4 py-1 rounded-full whitespace-nowrap z-10">
        2 professores · 6 módulos + bônus
      </div>

      {/* Marcus */}
      <div className="relative rounded-t-[14px] overflow-hidden">
        <div className="relative w-full aspect-[2/3]">
          <img src={marcusImg} alt="Prof. Marcus Gabriel" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="font-display text-[1.2rem] tracking-[1.5px] text-foreground">MARCUS GABRIEL</div>
          <div className="text-primary text-[0.65rem] font-medium tracking-wider uppercase mt-0.5">Prescrição Clínica</div>
        </div>
      </div>

      {/* Israel */}
      <div className="relative rounded-t-[14px] overflow-hidden">
        <div className="relative w-full aspect-[2/3]">
          <img src={israelImg} alt="Prof. Israel Felipe" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="font-display text-[1.2rem] tracking-[1.5px] text-foreground">ISRAEL FELIPE</div>
          <div className="text-primary text-[0.65rem] font-medium tracking-wider uppercase mt-0.5">Performance & Corrida</div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
