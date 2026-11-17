# Cuidado em Movimento — vitrine (layout)

Espelho estático da landing page do **Cuidado em Movimento** (transporte e companhia para idosos), publicado no GitHub Pages:

**https://romavitordev.github.io/layout_cuidadoemmovimento/**

Next.js 16 (App Router) + React 19 + TypeScript, CSS com tokens da marca (azul-marinho, dourado e creme), mobile first.

## Sobre esta versão

- É a **vitrine** para apresentar o layout. Fotos da equipe, contatos e dados legais ainda aparecem como espaços marcados `[INSERIR …]`, porque o negócio está em fase inicial e nada foi inventado.
- A página não é indexada pelo Google (`noindex`), para não competir com o domínio oficial quando ele existir.

## Repositórios

- **Repo principal (dev, flyer, marca e documentação):** `CuidadoEmMovimento`.
- **Vitrine GitHub Pages:** `layout_cuidadoemmovimento`. Difere do principal só no `next.config.ts` (`output: 'export'`, `basePath`, imagens sem otimizador). O push na `main` dispara o deploy via GitHub Actions.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3010/layout_cuidadoemmovimento
npm run build    # gera a versão estática em out/
```

Conteúdo da marca e contatos: `lib/marca.ts`. Textos das seções: `lib/conteudo.ts`.

---

Desenvolvido por [romavitordev](https://github.com/romavitordev).
