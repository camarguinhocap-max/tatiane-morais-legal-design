import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre, Areas, Diferenciais, Situacoes, Credibilidade, Faq } from "@/components/site/Sections";
import { CtaFinal, Footer } from "@/components/site/Contato";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

const TITLE = "Tatiane Morais | Advogada OAB/PR 129.197";
const DESCRIPTION =
  "Advocacia estratégica e humanizada em Direito Cível, Criminal, Família e Previdenciário. Atendimento presencial e online. Fale pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Tatiane Morais",
          description: DESCRIPTION,
          areaServed: "BR",
          knowsAbout: [
            "Direito Cível",
            "Direito Criminal",
            "Direito de Família",
            "Direito Previdenciário",
          ],
          address: { "@type": "PostalAddress", addressRegion: "PR", addressCountry: "BR" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Areas />
        <Diferenciais />
        <Situacoes />
        <Credibilidade />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
