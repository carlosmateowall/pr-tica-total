import { motion } from "framer-motion";

const FinalCTASection = () => (
  <section className="py-24">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      >
        <h2
          className="font-display uppercase tracking-wider mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Pare de adivinhar.
          <br />
          <span className="text-primary">Comece a prescrever.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Domine protocolos baseados em evidência e transforme sua carreira como educador físico.
        </p>
        <motion.a
          href="#preco"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-button font-bold uppercase tracking-tight text-lg glow-primary transition-all duration-300"
        >
          Garantir minha vaga — R$ 97
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
