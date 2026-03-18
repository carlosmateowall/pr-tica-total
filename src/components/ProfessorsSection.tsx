import { motion } from "framer-motion";
import marcusImg from "@/assets/professor-marcus.jpg";
import israelImg from "@/assets/professor-israel.jpg";

const professors = [
  {
    name: "Marcus Gabriel",
    tag: "Módulos 1–4",
    title: "Especialista em Prescrição Clínica",
    description: "Referência em prescrição de exercícios para populações clínicas. Mais de uma década de experiência em ambulatórios, doenças metabólicas e reabilitação cardíaca.",
    topics: ["Testes de Esforço", "Prescrição Clínica", "Periodização", "HIIT", "Doenças Metabólicas"],
    image: marcusImg,
  },
  {
    name: "Israel Felipe",
    tag: "Módulo 5",
    title: "Especialista em Performance & Corrida",
    description: "Especialista em treinamento de alto rendimento para corredores, maratonistas e ultramaratonistas. Traz a ciência do esporte de elite para a formação do profissional de educação física.",
    topics: ["Corrida", "Maratona", "Ultra", "Performance", "Atletas"],
    image: israelImg,
  },
];

const ProfessorsSection = () => (
  <section id="professores" className="py-24 px-[5%] bg-secondary border-y border-border">
    <div className="max-w-[1200px] mx-auto">
      <p className="text-primary text-[0.72rem] font-medium tracking-[3px] uppercase mb-3">Professores</p>
      <h2 className="font-display text-foreground tracking-wider leading-none mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
        DOIS ESPECIALISTAS,<br />UMA FORMAÇÃO
      </h2>
      <p className="text-[#888] text-[0.95rem] leading-[1.7] max-w-[500px] mb-12">
        Cada professor domina uma metade do espectro — juntos, cobrem do sedentário ao ultramaratonista.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {professors.map((prof, i) => (
          <motion.div
            key={prof.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img src={prof.image} alt={prof.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-7">
              <span className="inline-block bg-primary/10 text-primary text-[0.65rem] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-full mb-3">
                {prof.tag}
              </span>
              <h3 className="font-display text-[1.8rem] tracking-[2px] mb-1">{prof.name}</h3>
              <p className="text-muted-foreground text-[0.78rem] tracking-wider mb-4">{prof.title}</p>
              <p className="text-[#999] text-[0.85rem] leading-[1.7] mb-5">{prof.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {prof.topics.map((topic) => (
                  <span key={topic} className="bg-accent border border-border text-[#888] text-[0.65rem] font-medium tracking-wider px-2.5 py-1 rounded-full">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProfessorsSection;
