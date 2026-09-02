import { whatsappLink } from "@/lib/contact";
import heroImg from "@/assets/tatiane-hero.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[38rem] w-[38rem] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-44 lg:pb-24">
        <div className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-3 border border-gold/40 px-4 py-2 text-gold">
            OAB/PR 129.197
          </span>

          <h1 className="mt-8 text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[4.1rem]">
            Defesa jurídica estratégica com{" "}
            <em className="text-gold-gradient not-italic">seriedade, clareza</em> e atendimento
            humanizado.
          </h1>

          <div className="hairline mt-8 max-w-xs" />

          <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-ivory/65">
            Atuação em Direito Cível, Criminal, Família e Previdenciário, com atendimento presencial
            e online para quem precisa de orientação segura em momentos decisivos.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gold px-9 py-5 text-center text-[0.76rem] tracking-[0.2em] text-ink uppercase transition-transform duration-500 hover:-translate-y-0.5"
            >
              <span className="relative">Falar no WhatsApp</span>
            </a>
            <a
              href="#areas"
              className="border border-ivory/25 px-9 py-5 text-center text-[0.76rem] tracking-[0.2em] text-ivory/85 uppercase transition-colors duration-500 hover:border-gold/60 hover:text-gold"
            >
              Ver áreas de atuação
            </a>
          </div>

          <p className="mt-8 text-[0.78rem] tracking-[0.12em] text-ivory/40 uppercase">
            Atendimento presencial e online · Sigilo absoluto
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-6 -left-6 h-40 w-40 border-t border-l border-gold/40 lg:-top-10 lg:-left-10"
          />
          <img
            src={heroImg}
            alt="Tatiane Morais, advogada inscrita na OAB/PR 129.197"
            width={941}
            height={1253}
            fetchPriority="high"
            className="relative w-full object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent"
          />
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 divide-ivory/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-x">
          {["Direito Cível", "Direito Criminal", "Direito de Família", "Direito Previdenciário"].map(
            (a) => (
              <li
                key={a}
                className="border-b border-ivory/10 py-5 text-[0.72rem] tracking-[0.18em] text-ivory/55 uppercase lg:border-b-0 lg:px-6 lg:text-center"
              >
                {a}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
