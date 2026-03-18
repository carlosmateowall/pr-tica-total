import { motion } from "framer-motion";

const PricingSection = () => (
  <section id="preco" className="py-20">
    <div className="container mx-auto flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="bg-primary rounded-card p-10 md:p-14 text-center max-w-lg w-full"
      >
        <span className="text-primary-foreground/70 text-sm uppercase tracking-widest font-medium">
          Acesso Completo
        </span>
        <p className="font-display text-7xl md:text-8xl text-primary-foreground mt-4 mb-2">
          R$ 97
        </p>
        <p className="text-primary-foreground/70 text-lg mb-8">
          Pagamento único. Acesso vitalício.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-button font-bold uppercase tracking-tight text-lg w-full transition-all duration-300"
        >
          Quero me inscrever agora
        </motion.a>
        <p className="text-primary-foreground/50 text-xs mt-6">
          Garantia de 7 dias. Sem risco.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
