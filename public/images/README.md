# Imagens do site

As imagens atuais (`.svg`) são **placeholders**. Para publicar com as fotos reais,
substitua cada arquivo abaixo e ajuste a extensão em `src/lib/images.ts`.

## Arquivos esperados

| Arquivo | Onde aparece | Proporção sugerida | Observações |
| --- | --- | --- | --- |
| `hero.jpg` | Fundo do topo (Hero) | paisagem, ~1920×1080 | A foto do Henrique com os trabalhadores fica ótima aqui. Fica escurecida sob o texto. |
| `retrato.jpg` | Seção "Quem é o Henrique" | retrato, ~4:5 (ex.: 800×1000) | Foto individual, boa iluminação. |
| `brasilia.jpg` | Fundo da seção "Apoie" | paisagem, ~1600×900 | A foto com apoiadores/bandeira funciona bem. |
| `og.jpg` | Prévia ao compartilhar (WhatsApp, redes) | exatamente 1200×630 | Use `.jpg` ou `.png` — redes sociais não aceitam SVG. |

## Passo a passo

1. Salve as fotos nesta pasta (`public/images/`) com os nomes acima, em `.jpg`.
2. Em [`src/lib/images.ts`](../../src/lib/images.ts), troque `.svg` por `.jpg`
   em cada caminho (`hero`, `retrato`, `brasilia`).
3. Em [`src/app/layout.tsx`](../../src/app/layout.tsx), troque `/images/og.svg`
   por `/images/og.jpg` (duas ocorrências).
4. (Opcional) apague os placeholders `.svg` que não forem mais usados.

## Dicas

- Comprima as fotos antes (ex.: [squoosh.app](https://squoosh.app)) para o site
  carregar rápido. O `next/image` já otimiza, mas partir de arquivos menores ajuda.
- Use imagens com boa resolução, mas evite arquivos acima de ~500 KB quando possível.
