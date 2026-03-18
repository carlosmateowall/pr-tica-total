import { motion } from "framer-motion";

const stats = [
  { value: "+1.500", label: "Alunos Formados" },
  { value: "20+", label: "Anos de Experiência" },
  { value: "500km+", label: "em Ultramaratonas" },
  { value: "100%", label: "Baseado em Evidências" },
];

const StatsSection = () => (
  <section className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="text-center py-10 px-[5%] border-r border-border last:border-r-0"
      >
        <span className="font-display text-5xl text-primary block leading-none">{stat.value}</span>
        <span className="text-muted-foreground text-[0.75rem] tracking-wider uppercase mt-1.5 block">{stat.label}</span>
      </motion.div>
    ))}
  </section>
);

export default StatsSection;
