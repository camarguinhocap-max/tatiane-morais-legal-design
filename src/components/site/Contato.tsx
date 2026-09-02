import { Reveal } from "./Reveal";
import { whatsappLink, INSTAGRAM_URL } from "@/lib/contact";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-ink py-28 text-ivory sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <Reveal>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="eyebrow text-gold">Contato</span>
          <h2 className="mt-6 text-4xl leading-[1.08] sm:text-6xl">
            O primeiro passo é simples: <em className="text-gold-gradient not-italic">conversar</em>.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[1.02rem] leading-relaxed text-ivory/65">
            Conte o que está acontecendo. Você recebe uma orientação clara sobre os caminhos
            possíveis, com sigilo, respeito e sem compromisso.
          </p>
          <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gold px-10 py-5 text-[0.76rem] tracking-[0.2em] text-ink uppercase transition-transform duration-500 hover:-translate-y-0.5 sm:w-auto"
            >
              Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-ivory/25 px-10 py-5 text-[0.76rem] tracking-[0.2em] text-ivory/85 uppercase transition-colors duration-500 hover:border-gold/60 hover:text-gold sm:w-auto"
            >
              Instagram
            </a>
          </div>
          <p className="mt-8 text-[0.74rem] tracking-[0.14em] text-ivory/40 uppercase">
            Atendimento presencial e online
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl border-t border-ivory/10 px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/logo-dark.png"
              alt="Tatiane Morais Advocacia — OAB/PR 129.197"
              width={1187}
              height={304}
              className="h-auto w-48 sm:w-56"
            />
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Áreas de atuação</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/60">
              <li>Direito Cível</li>
              <li>Direito Criminal</li>
              <li>Direito de Família</li>
              <li>Direito Previdenciário</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Atendimento</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/60">
              <li>Presencial e online</li>
              <li>Horário comercial</li>
              <li>Sigilo profissional</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Contato</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ivory/60"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-[0.72rem] tracking-[0.1em] text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tatiane Morais · Advocacia. Todos os direitos reservados.</p>
          <p>Conteúdo meramente informativo, conforme o Provimento 205/2021 da OAB.</p>
        </div>
      </div>
    </footer>
  );
}
