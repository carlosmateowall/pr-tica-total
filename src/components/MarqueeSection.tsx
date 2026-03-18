const keywords = [
  "PRESCRIÇÃO CLÍNICA", "TESTES DE ESFORÇO", "HIIT",
  "PERIODIZAÇÃO", "MARATONA", "ULTRAMARATONA",
  "DIABETES", "HIPERTENSÃO", "VO2 MAX", "CORRIDA",
];

const MarqueeSection = () => (
  <section className="bg-secondary border-y border-border py-3.5 overflow-hidden whitespace-nowrap">
    <div className="inline-flex animate-marquee">
      {[...keywords, ...keywords].map((word, i) => (
        <span
          key={i}
          className={`font-display text-[0.85rem] tracking-[3px] px-8 ${
            i % 3 === 0 ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  </section>
);

export default MarqueeSection;
