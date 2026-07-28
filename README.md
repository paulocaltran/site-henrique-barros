# Henrique Barros — Site Oficial

Site oficial e institucional de **Henrique Barros** (engenheiro mecânico, Guarulhos-SP).
Estruturado também para atender aos requisitos de **verificação de anúncios políticos da Meta**
(comprovação de identidade, domínio, e-mail e telefone), além da home de apresentação.

🔗 **Produção:** [enghenriquebarros.com.br](https://www.enghenriquebarros.com.br)

---

## ✨ Destaques técnicos

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** com tema de design tokens (cores da marca, tipografia)
- Tipografia com `next/font` (Barlow + Inter) — auto-hospedada, sem requisições externas
- **100% estático** (SSG) — carregamento instantâneo e ótimo para SEO
- SEO completo: Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`, metadados em pt-BR
- **Schema.org** (Person) para identidade estruturada
- **LGPD**: banner de consentimento de cookies; Analytics só carrega após o "Aceitar"
- Google Analytics e verificações (Search Console / Meta) via variáveis de ambiente
- Totalmente **responsivo** (mobile-first) e acessível (HTML semântico, navegação por teclado)
- Conteúdo centralizado e fácil de editar (sem mexer no layout)

## 🧭 Páginas

- **Início** (`/`) — apresentação: hero, bandeiras, trajetória, apoie
- **Quem Sou** (`/quem-sou`) — biografia, foto, trajetória e valores
- **Contato** (`/contato`) — formulário (via WhatsApp), canais e mapa
- **Política de Privacidade** (`/politica-de-privacidade`) — LGPD
- **Termos de Uso** (`/termos-de-uso`)

Nome, e-mail e telefone de Henrique Barros aparecem no rodapé de **todas** as páginas.

## 🔐 Variáveis de ambiente

Copie `.env.local.example` para `.env.local` e preencha quando tiver os IDs:

```
NEXT_PUBLIC_GA_ID=                    # Google Analytics 4 (G-XXXX) — carrega só após consentimento
NEXT_PUBLIC_GSC_VERIFICATION=         # Google Search Console
NEXT_PUBLIC_FB_DOMAIN_VERIFICATION=   # Verificação de domínio da Meta
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # análise estática
```

## ✏️ Como editar o conteúdo

Quase tudo é editável em poucos arquivos, sem tocar no layout:

| O quê | Arquivo |
| --- | --- |
| Nome, número, slogan, contatos, links, menu | `src/lib/site.ts` |
| Bandeiras, trajetória e números de destaque | `src/lib/content.ts` |
| Caminhos das imagens (placeholder → foto real) | `src/lib/images.ts` |
| Fotos e imagens | `public/images/` |

### Trocar as fotos

As imagens atuais são **placeholders** (`.svg`). Para usar as fotos reais, veja
[`public/images/README.md`](public/images/README.md).

### Definir o número de urna

Em `src/lib/site.ts`, preencha `ballotNumber` com os 5 dígitos oficiais
(ex.: `"12345"`). Enquanto estiver vazio, o site exibe `PDT 12`.

## ☁️ Deploy na Vercel

1. Suba este repositório para o GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
3. A Vercel detecta o Next.js automaticamente — basta **Deploy**.
4. Em **Settings → Domains**, adicione `enghenriquebarros.com.br` e configure o DNS
   conforme as instruções da Vercel.

A cada `git push` na branch principal, a Vercel publica automaticamente.

---

Desenvolvido com Next.js.
