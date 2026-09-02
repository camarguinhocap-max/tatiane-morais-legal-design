import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/contact";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,padding] duration-700 ${
        scrolled || open
          ? "bg-ink/95 py-3 backdrop-blur-md shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_25%,transparent)]"
          : "py-5"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 leading-none"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo-monograma.png"
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block font-display text-xl tracking-[0.14em] text-ivory sm:text-2xl">
              TATIANE MORAIS
            </span>
            <span className="eyebrow mt-1 block text-gold-soft/70">Advocacia</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.8rem] tracking-[0.12em] text-ivory/70 uppercase transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/60 px-6 py-3 text-[0.72rem] tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-ink"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] border border-ivory/20 lg:hidden"
        >
          <span
            className={`block h-px w-5 bg-ivory transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ivory transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-ink/98 transition-[max-height,opacity] duration-700 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pt-6 pb-8 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/10 py-4 font-display text-2xl text-ivory/90"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 bg-gold px-6 py-4 text-center text-[0.78rem] tracking-[0.2em] text-ink uppercase"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
