

## Plano: Atualizar Landing Page com novo conteúdo do curso "Entre Planilhas"

O documento fornecido traz uma reestruturação completa do curso. A landing page precisa ser atualizada para refletir o novo nome, módulos, estratégia de venda e posicionamento.

---

### Resumo das mudanças

O curso agora se chama **"Entre Planilhas"**, tem **6 módulos + 1 bônus (HIIT)**, foco em prescrição cardiorrespiratória do atleta ao cardiopata, acesso por **1 ano** (não mais vitalício), e uma estratégia de venda centrada na dor: "formado mas inseguro para prescrever".

---

### Alterações por componente

**1. Navbar** — Trocar logo "MG × IF" por "ENTRE PLANILHAS"

**2. HeroSection** — Atualizar:
- Badge: "Formação Profissional · Prescrição Cardiorrespiratória"
- Headline: manter estilo, ajustar copy para refletir a dor ("Você é formado mas não se sente seguro para prescrever?")
- Subtítulo: "O curso que a sua faculdade não te deu. Aprenda a prescrever do cardiopata ao atleta de forma prática e objetiva."
- Tags: Diabetes, Hipertensão, Obesidade, Idosos, Atletas, Maratona, HIIT, Periodização, Fartlek

**3. MarqueeSection** — Atualizar keywords com os novos temas (Fisiologia, Testes, Prescrição, Grupos Especiais, Atletas, Métodos de Treino, HIIT, Fartlek)

**4. StatsSection** — Ajustar dados para refletir novo conteúdo:
- 6 módulos + bônus, 30-60 vídeos, 2 professores, acesso 1 ano

**5. ProfessorsSection** — Atualizar tags dos módulos:
- Marcus Gabriel: Módulos 1–6 + Bônus (apresentação, fisiologia, testes, prescrição clínica, prescrição atletas, métodos de treino, HIIT)
- Israel Felipe: Módulo 5 (Performance para atletas amadores e profissionais) — *verificar com o documento se Israel continua apenas no módulo 5 de performance ou se a divisão muda*

> Nota: O documento lista todos os módulos sem atribuir professor específico, mas pelo contexto do projeto original, Marcus ministra os módulos clínicos e Israel o de performance/corrida. Manterei essa divisão, ajustando: Marcus (Módulos 1-4, 6, Bônus HIIT), Israel (Módulo 5).

**6. ModulesSection** — Reestruturar completamente para 6 módulos + bônus:
- 01: Apresentação (objetivo, público, erros frequentes)
- 02: Fisiologia do Exercício (sistema energético, cardio, muscular, fadiga, adaptação, princípios)
- 03: Testes e Avaliações (por que avaliar, principais testes, como realizar, interpretar)
- 04: Prescrição para Grupos Especiais (diabetes, hipertensão, obesidade, idosos, diretrizes)
- 05: Prescrição para Atletas (amador vs profissional, variáveis, recomendações)
- 06: Métodos de Treino Cardio (contínuo, intervalado, fartlek, contínuo vs variado)
- Bônus: HIIT (o que é, erros, tipos RST/curto/longo/SIT, como prescrever)

Cada card com número, título, lista de tópicos resumida, badge do professor e badge de aulas.

**7. TargetSection** — Ajustar público-alvo conforme estratégia:
- Estudantes de Ed. Física que querem sair na frente
- Profissionais formados inseguros para prescrever
- Personal Trainers que atendem grupos especiais
- Treinadores de corrida/performance
- Entusiastas que querem entender a ciência

**8. PricingSection** — Atualizar:
- Nome: "Curso Entre Planilhas"
- 6 módulos + 1 bônus
- Acesso por 1 ano (não vitalício)
- Incluir: modelos de planilhas de treino cardio
- Mencionar possibilidade de comunidade ("Comunidade para dúvidas")
- Manter preço R$97 ou ajustar se indicado (documento sugere avaliar low cost ~R$69,90 + subprodutos)

**9. FAQSection** — Atualizar perguntas:
- Trocar "acesso vitalício" por "acesso por 1 ano"
- Adicionar pergunta sobre planilhas de treino incluídas
- Adicionar pergunta sobre comunidade

**10. FinalCTASection** — Atualizar copy com a provocação do documento:
- "Sua insegurança em prescrever exercício cardio está deixando dinheiro na mesa!"
- Watermark: "ENTRE PLANILHAS"

**11. FooterSection** — Atualizar nome para "ENTRE PLANILHAS" e manter crédito dos professores

---

### Detalhes técnicos

- Todos os componentes existentes serão editados in-place, sem criar novos arquivos
- O array de módulos no `ModulesSection.tsx` passa de 5 para 7 itens (6 + bônus)
- O bônus HIIT terá estilo visual diferenciado (destaque especial, badge "BÔNUS")
- Cores: módulos do Marcus em verde (#b5f23d), módulo do Israel em azul (#64b4ff), bônus com destaque especial
- Nenhuma mudança estrutural no roteamento ou Supabase

