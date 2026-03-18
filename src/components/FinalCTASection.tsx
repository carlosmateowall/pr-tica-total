import { motion } from "framer-motion";

const FinalCTASection = () => (
  <section className="relative py-32 px-[5%] text-center overflow-hidden">
    {/* Watermark */}
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[22vw] text-primary/[0.03] pointer-events-none tracking-tighter whitespace-nowrap select-none">
      MG × IF
    </span>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
    >
      <h2 className="font-display tracking-wider leading-[0.95] mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
        CHEGA DE LACUNA<br /><span className="text-primary">NA FORMAÇÃO</span>
      </h2>
      <p className="text-[#888] text-[0.95rem] max-w-[500px] mx-auto mb-10 leading-[1.7]">
        Dois especialistas, um curso, formação completa. Do sedentário ao ultramaratonista.
      </p>
      <a href="#preco" className="inline-block bg-primary text-primary-foreground font-bold text-[0.9rem] tracking-[1.5px] uppercase px-12 py-4 rounded-sm hover:brightness-90 hover:-translate-y-0.5 transition-all">
        Quero me inscrever →
      </a>
    </motion.div>
  </section>
);

export default FinalCTASection;
