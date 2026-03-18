import { motion } from "framer-motion";

const features = [
  "5 módulos com 5–10 aulas cada",
  "Marcus: Testes, Prescrição Clínica, Periodização e HIIT",
  "Israel: Performance para corredores e ultramaratonistas",
  "Material de apoio em PDF",
  "Certificado de conclusão",
  "Acesso vitalício com atualizações futuras",
];

const PricingSection = () => (
  <section id="preco" className="py-24 px-[5%] text-center">
    <div className="max-w-[1200px] mx-auto">
      <p className="text-primary text-[0.72rem] font-medium tracking-[3px] uppercase mb-3">Investimento</p>
      <h2 className="font-display text-foreground tracking-wider leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
        ACESSO COMPLETO,<br />PREÇO ACESSÍVEL
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        className="relative max-w-[540px] mx-auto mt-12 bg-secondary border border-border rounded-[20px] p-12 text-left overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(181,242,61,0.07)_0%,transparent_70%)] pointer-events-none" />

        <span className="inline-block bg-primary text-primary-foreground font-display text-[0.85rem] tracking-[2px] px-4 py-1 rounded-sm mb-6">
          Oferta de lançamento
        </span>

        <h3 className="font-display text-[1.8rem] tracking-[2px] mb-1">Curso Completo de Cardiorrespiratório</h3>
        <p className="text-muted-foreground text-[0.82rem] mb-8">5 módulos · 25–50 aulas · 2 professores · Acesso vitalício</p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-accent border border-border rounded-lg p-4">
            <div className="font-display text-base tracking-wider mb-0.5">MARCUS GABRIEL</div>
            <div className="text-muted-foreground text-[0.68rem] leading-snug">Clínico · Doenças metabólicas · Prescrição</div>
          </div>
          <div className="bg-accent border border-border rounded-lg p-4">
            <div className="font-display text-base tracking-wider mb-0.5">ISRAEL FELIPE</div>
            <div className="text-muted-foreground text-[0.68rem] leading-snug">Performance · Corrida · Maratona · Ultra</div>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-muted-foreground text-[0.68rem] tracking-[2px] uppercase mb-1">por apenas</div>
          <div className="font-display text-primary text-[5rem] leading-none tracking-tighter">R$97</div>
          <div className="text-muted-foreground text-[0.8rem] mt-1">pagamento único · acesso imediato</div>
        </div>

        <ul className="flex flex-col gap-3 mb-8">
          {features.map((f) => (
            <li key={f} className="text-[#bbb] text-[0.85rem] flex items-start gap-3">
              <span className="text-primary font-bold shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <a href="#" className="block w-full bg-primary text-primary-foreground font-bold text-[0.85rem] tracking-[1.5px] uppercase py-4 rounded-sm text-center hover:brightness-90 hover:-translate-y-0.5 transition-all">
          Quero me inscrever agora →
        </a>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
