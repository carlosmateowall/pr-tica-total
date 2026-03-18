const keywords = [
  "DIABETES", "HIPERTENSÃO", "VO2 MAX", "ECONOMIA DE CORRIDA",
  "PERIODIZAÇÃO", "BIOMECÂNICA", "PRESCRIÇÃO", "ENDURANCE",
];

const MarqueeSection = () => (
  <section className="py-12 overflow-hidden border-y border-border">
    <div className="animate-marquee flex gap-8 whitespace-nowrap">
      {[...keywords, ...keywords].map((word, i) => (
        <span
          key={i}
          className={`font-display text-5xl md:text-7xl ${
            i % 2 === 0 ? "text-outline" : "text-outline-solid opacity-20"
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  </section>
);

export default MarqueeSection;
