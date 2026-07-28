// Ponto único de configuração das imagens do site.
// Para trocar qualquer imagem, substitua o arquivo em /public/images
// mantendo o mesmo nome — nada mais precisa mudar.

export const images = {
  // Headshot usado como avatar no cabeçalho e no rodapé
  avatar: {
    src: "/images/avatar.jpg",
    alt: "Henrique Barros",
  },
  // Foto de fundo do topo (Hero)
  hero: {
    src: "/images/hero.jpg",
    alt: "Henrique Barros conversando com trabalhadores no chão de fábrica",
  },
  // Foto vertical da seção "Quem é o Henrique"
  retrato: {
    src: "/images/retrato.jpg",
    alt: "Henrique Barros discursando para trabalhadores",
  },
  // Foto de fundo da seção "Apoie"
  brasilia: {
    src: "/images/brasilia.jpg",
    alt: "Henrique Barros com apoiadores em frente ao Congresso Nacional",
  },
} as const;
