import { useState } from "react";

const faqs = [
  { q: "Preciso ter formação em Ed. Física?", a: "O curso foi feito para estudantes, profissionais e entusiastas. Conhecimento básico de fisiologia do exercício é recomendado, mas não obrigatório." },
  { q: "Tenho acesso por quanto tempo?", a: "Acesso por 1 ano completo. Tempo de sobra para assistir, revisar e aplicar todo o conteúdo na prática." },
  { q: "O curso tem certificado?", a: "Sim! Ao concluir todos os módulos você recebe certificado de conclusão para usar como hora complementar ou no currículo profissional." },
  { q: "Quais planilhas de treino estão incluídas?", a: "Você recebe modelos de planilhas de treinamento cardiorrespiratório prontos para usar e adaptar para seus alunos em diferentes contextos clínicos e de performance." },
  { q: "Consigo aplicar na prática imediatamente?", a: "Essa é a proposta. O foco é prático e objetivo — sempre atrelando teoria à prática. Cada módulo traz aplicações reais para o dia a dia do profissional." },
  { q: "Vai ter comunidade para tirar dúvidas?", a: "Estamos avaliando a criação de uma comunidade exclusiva para alunos tirarem dúvidas diretamente com os professores. Fique ligado nas novidades!" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-[5%] bg-secondary border-t border-border">
      <div className="max-w-[760px] mx-auto">
        <p className="text-primary text-[0.72rem] font-medium tracking-[3px] uppercase mb-3">Dúvidas</p>
        <h2 className="font-display text-foreground tracking-wider leading-none mb-12" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          PERGUNTAS FREQUENTES
        </h2>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center gap-4 py-6 text-left text-foreground text-[0.95rem] font-light hover:text-primary transition-colors"
                >
                  {faq.q}
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-base shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-primary text-primary-foreground border-primary rotate-45"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0", paddingBottom: isOpen ? "1.5rem" : "0" }}
                >
                  <p className="text-muted-foreground text-[0.88rem] leading-[1.7]">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
