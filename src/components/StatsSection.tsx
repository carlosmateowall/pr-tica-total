import { motion } from "framer-motion";

const stats = [
  { value: "+1.500", label: "Alunos Formados" },
  { value: "20+", label: "Anos de Experiência" },
  { value: "500km+", label: "em Ultramaratonas" },
  { value: "100%", label: "Baseado em Evidências" },
];

const StatsSection = () => (
  <section className="py-16">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-center p-6"
          >
            <p className="font-display text-4xl md:text-5xl text-primary tabular-nums">
              {stat.value}
            </p>
            <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
