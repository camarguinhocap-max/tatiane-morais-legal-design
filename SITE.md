# Site da Tatiane Morais — Documentação

Este arquivo explica **o que é o site, como foi feito e como mexer nele**. Serve como referência
para qualquer atualização futura (por mim ou por outra pessoa/IA).

## 1. O que é

Site institucional *one-page* para a advogada **Tatiane Morais** (OAB/PR 129.197), atuando em
Direito Cível, Criminal, Família e Previdenciário. Objetivo: passar autoridade e confiança e gerar
contato via WhatsApp. O brief original (tom, referências, o que evitar) está em `README.md`.

## 2. Como foi feito (stack)

O projeto foi **gerado e é editado pelo Lovable** (lovable.dev) — por isso existe a pasta
`.lovable/` e o aviso em `AGENTS.md` sobre não reescrever o histórico do git (nada de
`force push` / `rebase` / `amend` em commits já publicados, senão o Lovable perde o histórico).

- **Framework:** React 19 + [TanStack Start](https://tanstack.com/start) (Router + SSR)
- **Build tool:** Vite 8 (com Rolldown) + Nitro (empacota para deploy)
- **Estilo:** Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com/) (componentes em
  `src/components/ui/`, não mexer a menos que seja para trocar um componente de base)
- **Gerenciador de pacotes:** [Bun](https://bun.sh) (`bun.lock`, `bunfig.toml`)
- **Deploy alvo:** preset `cloudflare-module` do Nitro (roda como Cloudflare Worker). Nome do
  worker gerado automaticamente: `camarguinhocap-max-tatiane-morais-legal-design`.
- **Fontes:** Cormorant Garamond (display/títulos) + Jost (texto), via Google Fonts.
- **Paleta:** definida em `src/styles.css` como tokens OKLCH — `--ink` (quase preto,
  `oklch(0.17 0.006 60)`) e `--gold` (dourado, `oklch(0.78 0.075 82)`).

## 3. Estrutura de pastas

```
src/
├── routes/
│   ├── __root.tsx        # <head> do site: título, meta tags, favicon, og:image, fontes
│   └── index.tsx          # Página única — monta todas as seções na ordem em que aparecem
├── components/
│   ├── site/               # Componentes específicos deste site
│   │   ├── Header.tsx       # Menu fixo no topo (logo + navegação + botão WhatsApp)
│   │   ├── Hero.tsx         # Seção inicial (banner com foto grande + chamada principal)
│   │   ├── Sections.tsx     # Sobre, Áreas de Atuação, Diferenciais, Situações, Credibilidade, FAQ
│   │   ├── Contato.tsx      # CTA final + Rodapé (Footer)
│   │   ├── FloatingWhatsApp.tsx  # Botão flutuante de WhatsApp
│   │   └── Reveal.tsx       # Animação de "aparecer" ao rolar a página
│   └── ui/                 # Componentes genéricos do shadcn/ui (botões, dialogs, etc.)
├── assets/                # Imagens importadas pelo código (viram parte do bundle)
│   ├── tatiane-hero.jpg    # Foto grande da seção inicial (Hero)
│   └── tatiane-sobre.jpg   # Foto da seção "Sobre"
├── lib/
│   └── contact.ts          # Número de WhatsApp e link do Instagram (ver seção 6 — PENDÊNCIA)
└── styles.css              # Tokens de cor, tipografia, animações globais

public/                   # Arquivos servidos "como estão", sem passar pelo bundler
├── favicon.ico
├── logo-monograma.png      # Monograma "TM" (fundo transparente) — usado no Header e como favicon
└── logo-dark.png           # Logo horizontal completo (fundo escuro) — usado no Footer e no og:image
```

## 4. Seções da página (na ordem em que aparecem)

1. **Header** — fixo no topo, com o monograma + "Tatiane Morais / Advocacia", menu e botão WhatsApp.
2. **Hero** — foto grande + frase de posicionamento + botões (WhatsApp / Ver áreas de atuação).
3. **Sobre** — foto + texto de apresentação da advogada + selo "OAB/PR 129.197".
4. **Áreas de atuação** — Cível, Criminal, Família, Previdenciário.
5. **Diferenciais** — 6 pontos (atendimento humanizado, estratégia personalizada, etc.).
6. **Situações comuns** — 4 cards de "dor" do cliente com link direto pro WhatsApp já com a
   mensagem preenchida.
7. **Credibilidade** — 3 pilares + citação em destaque.
8. **FAQ** — 5 perguntas frequentes (acordeão).
9. **CTA final + Footer** — chamada final para contato e rodapé com logo, links e áreas de atuação.
10. **Botão flutuante de WhatsApp** — aparece sobre toda a página.

## 5. Imagens e logo — o que foi feito hoje (02/09/2026)

- As fotos da seção **Hero** e **Sobre** foram substituídas pelas fotos novas fornecidas
  (`fot1.jpg` → Hero, `fot2.jpg` → Sobre), mantendo os nomes de arquivo originais
  (`src/assets/tatiane-hero.jpg` e `tatiane-sobre.jpg`) para não precisar tocar em mais nada no
  código. As dimensões (`width`/`height`) no HTML foram ajustadas para a proporção real das novas
  fotos, pra evitar corte estranho.
- Dois logos novos foram adicionados e usados onde fazem mais sentido visualmente:
  - **`logo-monograma.png`** (o "TM" com fundo transparente) → colocado no **Header**, ao lado do
    nome, e também definido como **favicon** do site (ícone da aba do navegador).
  - **`logo-dark.png`** (logo horizontal completo, fundo escuro que já é a mesma cor do site) →
    colocado no **Footer**, no lugar do texto "TATIANE MORAIS / Advogada / OAB/PR 129.197", e
    também usado como imagem de compartilhamento (`og:image`) quando o link do site é enviado no
    WhatsApp/redes sociais.
  - O logo antigo (`logo.jpeg`) **não foi usado** — ainda não estava em uso em nenhum lugar do
    código antes desta atualização.

## 6. ⚠️ Pendência importante antes de publicar

Em `src/lib/contact.ts` o número de WhatsApp e o link do Instagram ainda estão com **valores de
exemplo**, não os reais:

```ts
export const WHATSAPP_NUMBER = "5541999999999"; // ← número de placeholder
export const INSTAGRAM_URL = "https://instagram.com/"; // ← sem o @ da conta
```

Todo o site (Header, Hero, botão flutuante, CTA final, Footer, cards de "Situações") usa esses dois
valores. **Antes de o site ir ao ar, é preciso trocar esses dois dados pelos reais** — é só me
passar o número (DDI+DDD+número, sem espaços/traços) e o @ do Instagram que eu atualizo.

## 7. Como rodar o site localmente

```bash
bun install     # instala as dependências (só precisa na primeira vez / quando mudarem)
bun run dev     # sobe o site em modo desenvolvimento (com recarregamento automático)
bun run build   # gera a versão de produção em .output/
bun run preview # serve a versão de produção localmente, pra conferir antes de publicar
```

## 8. Como fazer alterações comuns

- **Trocar um texto:** os textos ficam direto no JSX de `src/components/site/*.tsx` (não há CMS
  nem arquivo de conteúdo separado — é tudo código).
- **Trocar uma foto:** substituir o arquivo em `src/assets/` mantendo o mesmo nome (mais simples),
  ou trocar o nome e ajustar o `import` no componente correspondente.
- **Trocar o logo:** os arquivos ficam em `public/` (`logo-monograma.png`, `logo-dark.png`) e são
  referenciados por caminho direto (`/logo-monograma.png`) no `Header.tsx`, `Contato.tsx` (Footer)
  e `__root.tsx` (favicon/og:image) — basta sobrescrever o arquivo mantendo o mesmo nome.
- **Trocar WhatsApp/Instagram:** editar `src/lib/contact.ts` (ver seção 6).

## 9. Publicação / deploy

O projeto está conectado ao **Lovable** — o fluxo normal é: eu (ou você) faço o commit e dá `git
push` na branch conectada, e o Lovable sincroniza e publica a partir daí. Por isso, nunca se deve
reescrever o histórico do git já publicado (sem `force push`, sem `rebase`/`amend` em commits
antigos) — isso quebraria a sincronização do editor Lovable.
