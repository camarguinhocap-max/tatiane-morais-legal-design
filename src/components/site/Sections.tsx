import { useState } from "react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/contact";
import sobreImg from "@/assets/tatiane-sobre.jpg";

export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="eyebrow inline-flex items-center gap-3 text-gold">
      <span className="inline-block h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

/* ---------------------------------- Sobre --------------------------------- */

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-5 -left-5 h-32 w-32 border-t border-l border-gold/50" />
            <img
              src={sobreImg}
              alt="Tatiane Morais, advogada"
              width={941}
              height={1244}
              loading="lazy"
              className="relative w-full object-cover"
            />
            <div className="absolute -right-4 -bottom-6 bg-ink px-6 py-5 text-ivory sm:-right-8">
              <p className="font-display text-3xl text-gold">OAB/PR</p>
              <p className="text-[0.7rem] tracking-[0.28em]">129.197</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel>Sobre a advogada</SectionLabel>
          <h2 className="mt-6 text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
            Uma advocacia que <em className="text-gold-gradient not-italic">escuta</em> antes de
            agir.
          </h2>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Sou <strong className="font-medium text-ink">Tatiane Morais</strong>, advogada inscrita
              na OAB/PR sob o nº 129.197. Atuo em Direito Cível, Criminal, de Família e
              Previdenciário, conduzindo cada caso com estratégia, discrição e responsabilidade.
            </p>
            <p>
              Acredito que uma boa defesa começa por entender a história de quem está por trás do
              processo. Por isso, meu atendimento é próximo e humano: explico cada etapa em
              linguagem clara, aponto riscos com honestidade e construo caminhos jurídicos possíveis
              — não promessas.
            </p>
            <p>
              Momentos decisivos pedem firmeza e serenidade. Meu compromisso é oferecer as duas
              coisas, com a mesma seriedade em cada processo, seja no atendimento presencial ou
              online.
            </p>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {[
              ["Atuação", "Cível, Criminal, Família e Previdenciário"],
              ["Atendimento", "Presencial e online, em todo o Brasil"],
              ["Postura", "Estratégica, ética e transparente"],
            ].map(([t, d]) => (
              <li key={t} className="bg-ivory p-6">
                <p className="eyebrow text-gold">{t}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Áreas --------------------------------- */

const AREAS = [
  {
    n: "01",
    title: "Direito Cível",
    desc: "Contratos, cobranças, indenizações e conflitos patrimoniais conduzidos com análise de risco e solução objetiva — pelo acordo quando é vantajoso, pela via judicial quando é necessário.",
  },
  {
    n: "02",
    title: "Direito Criminal",
    desc: "Defesa técnica em inquéritos, audiências e processos criminais, com atuação imediata, sigilo absoluto e acompanhamento próximo do investigado e da família.",
  },
  {
    n: "03",
    title: "Direito de Família",
    desc: "Divórcio, guarda, pensão alimentícia, inventário e medidas protetivas tratados com sensibilidade e firmeza, priorizando a proteção de quem está mais vulnerável.",
  },
  {
    n: "04",
    title: "Direito Previdenciário",
    desc: "Aposentadorias, auxílios, benefícios negados pelo INSS e revisões: análise completa do seu histórico para identificar o melhor caminho antes de qualquer pedido.",
  },
];

export function Areas() {
  return (
    <section id="areas" className="bg-ink py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Áreas de atuação</SectionLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] sm:text-5xl">
              Quatro frentes, um mesmo padrão de cuidado.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-ivory/12">
          {AREAS.map((a, i) => (
            <Reveal key={a.n} delay={i * 90}>
              <article className="group grid gap-4 border-b border-ivory/12 py-9 transition-colors duration-700 hover:bg-ivory/[0.04] md:grid-cols-[auto_1fr_1.3fr] md:items-baseline md:gap-10 md:px-4">
                <span className="font-display text-2xl text-gold/70">{a.n}</span>
                <h3 className="font-display text-3xl leading-tight text-ivory transition-colors duration-500 group-hover:text-gold sm:text-4xl">
                  {a.title}
                </h3>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-ivory/60">{a.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-ivory/55">
              Não encontrou sua situação? Descreva o seu caso e receba uma orientação inicial.
            </p>
            <a
              href={whatsappLink("Olá, Dra. Tatiane. Gostaria de tirar uma dúvida sobre o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gold px-8 py-4 text-center text-[0.74rem] tracking-[0.2em] text-ink uppercase transition-transform duration-500 hover:-translate-y-0.5 sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Diferenciais ------------------------------ */

const DIFERENCIAIS = [
  ["Atendimento presencial e online", "Você escolhe o formato. A mesma atenção nos dois."],
  ["Atendimento humanizado", "Escuta real, sem pressa e sem julgamento sobre a sua história."],
  ["Estratégia personalizada", "Nenhum caso é tratado como modelo pronto. Cada tese é construída."],
  ["Clareza e transparência", "Explicações em linguagem simples, com riscos e prazos ditos na hora certa."],
  ["Agilidade e responsabilidade", "Prazos acompanhados de perto e retorno sobre o andamento do processo."],
  ["Postura firme e ética", "Defesa técnica combativa dentro dos limites da lei e da boa-fé."],
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-sand/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] text-ink sm:text-5xl">
              O que muda ao ter alguém que realmente conduz o seu caso.
            </h2>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-px bg-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 70} className="bg-sand/60">
              <div className="group h-full bg-ivory/70 p-8 transition-colors duration-700 hover:bg-ivory">
                <span className="font-display text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-5 h-px w-10 bg-gold/50 transition-all duration-700 group-hover:w-20" />
                <h3 className="mt-5 font-display text-2xl leading-snug text-ink">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- Situações -------------------------------- */

const SITUACOES = [
  {
    q: "Recebeu uma intimação?",
    a: "Não responda sozinha ou sozinho. Cada prazo conta, e a forma como o caso começa influencia todo o resto.",
    msg: "Olá, Dra. Tatiane. Recebi uma intimação e gostaria de orientação.",
  },
  {
    q: "Está com pensão atrasada?",
    a: "Existem medidas rápidas e legais para cobrar o que é devido — inclusive para garantir o básico da criança agora.",
    msg: "Olá, Dra. Tatiane. Estou com problemas relacionados a pensão alimentícia.",
  },
  {
    q: "Precisa de medida protetiva?",
    a: "Segurança vem primeiro. O pedido pode ser feito com urgência e com total sigilo sobre a sua situação.",
    msg: "Olá, Dra. Tatiane. Preciso de orientação sobre medida protetiva.",
  },
  {
    q: "Benefício do INSS negado?",
    a: "Negativa não é ponto final. Uma análise técnica do seu histórico mostra se cabe recurso ou nova via.",
    msg: "Olá, Dra. Tatiane. Tive um problema com um benefício previdenciário.",
  },
];

export function Situacoes() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Situações comuns</SectionLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] sm:text-5xl">
              Se você está passando por isso agora, existe caminho.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SITUACOES.map((s, i) => (
            <Reveal key={s.q} delay={i * 90}>
              <div className="group flex h-full flex-col border border-ivory/12 p-8 transition-all duration-700 hover:border-gold/50 sm:p-10">
                <h3 className="font-display text-[1.7rem] leading-snug text-ivory sm:text-3xl">
                  {s.q}
                </h3>
                <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-ivory/60">{s.a}</p>
                <a
                  href={whatsappLink(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-7 self-start text-[0.72rem] tracking-[0.2em] text-gold uppercase"
                >
                  Conversar sobre isso →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Credibilidade ------------------------------ */

const PILARES = [
  ["Discrição", "Sigilo profissional rigoroso em cada conversa, documento e processo."],
  ["Acolhimento", "Um espaço seguro para falar do que é difícil, sem constrangimento."],
  ["Seriedade", "Compromissos assumidos com clareza e cumpridos com responsabilidade."],
];

export function Credibilidade() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Credibilidade</SectionLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] text-ink sm:text-5xl">
              Confiança se constrói no detalhe.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div className="space-y-10">
            {PILARES.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="border-l border-gold/50 pl-6">
                  <h3 className="font-display text-2xl text-ink">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <figure className="relative bg-ink p-10 text-ivory sm:p-14">
              <span
                aria-hidden
                className="absolute top-6 left-8 font-display text-7xl text-gold/25 select-none"
              >
                “
              </span>
              <blockquote className="relative font-display text-2xl leading-snug sm:text-3xl">
                Meu trabalho não termina na petição. Termina quando você entende o que está
                acontecendo com a sua vida e sente que não está sozinho nisso.
              </blockquote>
              <figcaption className="mt-8 text-[0.72rem] tracking-[0.24em] text-gold uppercase">
                Tatiane Morais — OAB/PR 129.197
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

const FAQ = [
  [
    "Como funciona o atendimento online?",
    "A primeira conversa acontece por WhatsApp ou videochamada, no horário combinado. Documentos são enviados digitalmente e o acompanhamento do processo continua pelo mesmo canal, com retornos periódicos.",
  ],
  [
    "A primeira conversa tem custo?",
    "O primeiro contato serve para entender a sua situação e verificar se há como ajudar. Valores e formas de pagamento são apresentados de forma clara antes de qualquer contratação.",
  ],
  [
    "Você atende fora do Paraná?",
    "Sim. O atendimento online permite acompanhar casos de clientes em outros estados, respeitando as particularidades de cada processo.",
  ],
  [
    "Quanto tempo demora um processo?",
    "Depende da área, da comarca e da complexidade do caso. O que garanto é uma estimativa honesta desde o início e informação sempre que houver movimentação relevante.",
  ],
  [
    "Minhas informações ficam protegidas?",
    "Sim. Tudo o que é dito está protegido pelo sigilo profissional, previsto no Estatuto da Advocacia, inclusive antes de qualquer contratação.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <h2 className="mt-6 text-4xl leading-[1.1] text-ink sm:text-5xl">
            Respostas diretas, sem juridiquês.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="border-t border-ink/15">
            {FAQ.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-b border-ink/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl leading-snug text-ink sm:text-2xl">
                      {q}
                    </span>
                    <span
                      className={`mt-1 shrink-0 text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-600 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-[0.97rem] leading-relaxed text-muted-foreground">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
