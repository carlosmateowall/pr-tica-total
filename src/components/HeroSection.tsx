import { motion } from "framer-motion";

const tags = ["Prescrição Clínica", "Performance Elite", "Metabolismo", "Corrida"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 pb-16">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className="max-w-4xl"
      >
        <span className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-8">
          Inscrições Abertas
        </span>

        <h1
          className="font-display uppercase tracking-wider leading-[0.95] mb-8"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          Ciência na prática:
          <br />
          do ambulatório às
          <br />
          <span className="text-primary">ultramaratonas.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          A especialização que conecta prescrição clínica baseada em evidências
          com protocolos de alta performance para educadores físicos.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href="#preco"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-button font-bold uppercase tracking-tight text-lg glow-primary transition-all duration-300"
        >
          Garantir minha vaga
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
