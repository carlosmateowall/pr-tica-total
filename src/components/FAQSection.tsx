import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Preciso ser formado em Educação Física?", a: "O curso é voltado para profissionais e estudantes de Educação Física. Se você está em formação, o conteúdo vai acelerar seu aprendizado prático." },
  { q: "Como funciona o acesso?", a: "Após o pagamento, você recebe acesso imediato a todos os módulos. O acesso é vitalício — estude no seu ritmo." },
  { q: "Tem certificado?", a: "Sim! Ao concluir todos os módulos, você recebe um certificado de conclusão digital." },
  { q: "O conteúdo é baseado em evidências?", a: "100%. Todo o material é fundamentado em artigos científicos e protocolos validados na prática clínica e esportiva." },
  { q: "Posso tirar dúvidas com os professores?", a: "Sim. Você terá acesso a uma comunidade exclusiva onde pode interagir diretamente com Marcus e Israel." },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-2xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl uppercase tracking-wider text-center mb-12"
      >
        Perguntas <span className="text-primary">Frequentes</span>
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-button card-shadow border-none px-6"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
