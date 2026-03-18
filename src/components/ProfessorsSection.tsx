import { motion } from "framer-motion";
import marcusImg from "@/assets/professor-marcus.jpg";
import israelImg from "@/assets/professor-israel.jpg";

const professors = [
  {
    name: "Marcus Gabriel",
    title: "O Especialista Clínico",
    focus: "Hipertensão, Diabetes e Doenças Metabólicas",
    description: "Referência em prescrição de exercícios para populações clínicas com mais de uma década de experiência em ambulatórios e centros de reabilitação.",
    image: marcusImg,
  },
  {
    name: "Israel Felipe",
    title: "O Especialista em Performance",
    focus: "Corrida, Maratona e Ultramaratona",
    description: "Atleta e treinador com mais de 500km em ultramaratonas. Especialista em periodização e economia de corrida para atletas de endurance.",
    image: israelImg,
  },
];

const ProfessorsSection = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl uppercase tracking-wider text-center mb-16"
      >
        Seus <span className="text-primary">Professores</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {professors.map((prof, i) => (
          <motion.div
            key={prof.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="bg-card rounded-card card-shadow overflow-hidden"
          >
            <div className="relative h-72 md:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              <img
                src={prof.image}
                alt={prof.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                {prof.title}
              </span>
              <h3 className="font-display text-3xl uppercase tracking-wider mt-2 mb-1">
                {prof.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{prof.focus}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {prof.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProfessorsSection;
