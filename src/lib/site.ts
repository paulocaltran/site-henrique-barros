// Configuração central do site. Edite aqui para atualizar dados de contato,
// links, navegação e redes sociais em um único lugar.

const whatsappNumber = "5511997974972"; // apenas dígitos, formato internacional
const whatsappMessage = "Olá, Henrique! Vim pelo site e gostaria de falar com você.";

export const site = {
  candidate: "Henrique Barros",
  role: "Deputado Estadual",
  // Linha de apresentação institucional (usada nas páginas e no SEO)
  descriptor: "Engenheiro Mecânico • Filho de Metalúrgico • Pai • Católico",
  state: "São Paulo",
  city: "Guarulhos",
  cityState: "Guarulhos – SP",
  party: "PDT",
  // Número de urna ainda NÃO divulgado. Enquanto `ballotNumber` estiver vazio,
  // nenhum número aparece no site (só o logo do PDT). Quando sair o número
  // oficial (5 dígitos), preencha `ballotNumber` — ele volta a aparecer no hero.
  partyNumber: "", // não exibido atualmente
  ballotNumber: "", // ex.: "12345" — deixe vazio até ter o número oficial
  slogan: "Trabalho, família e desenvolvimento!",
  description:
    "Site oficial de Henrique Barros — engenheiro mecânico, filho de metalúrgico, pai e morador de Guarulhos-SP. Defensor do desenvolvimento industrial, da geração de empregos e da valorização do trabalho.",
  url: "https://www.enghenriquebarros.com.br",

  contact: {
    email: "contato@enghenriquebarros.com.br",
    whatsappNumber,
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    whatsappDisplay: "+55 (11) 99797-4972",
    phoneDisplay: "(11) 99797-4972",
    phoneHref: "tel:+5511997974972",
    instagram: "https://www.instagram.com/eng.henrique.barros/",
    instagramHandle: "@eng.henrique.barros",
    // Deixe vazio para ocultar. Preencha quando tiver as URLs.
    facebook: "",
    youtube: "",
    linkedin: "",
    donate: "https://queroapoiar.com.br/henriquebarros",
  },

  // Navegação (âncoras da página única)
  nav: [
    { label: "Início", href: "/#topo" },
    { label: "O Henrique", href: "/#sobre" },
    { label: "Trajetória", href: "/#trajetoria" },
    { label: "Apoie", href: "/#apoie" },
    { label: "Contato", href: "/#contato" },
  ],

  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "/termos-de-uso" },
  ],
} as const;

export type Site = typeof site;
