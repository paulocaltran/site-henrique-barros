import {
  IconFactory,
  IconCap,
  IconClock,
  IconUsers,
  IconTrending,
  IconScale,
} from "@/components/icons";

// Bandeiras / propostas principais
export const bandeiras = [
  {
    icon: IconFactory,
    title: "Trabalho e emprego",
    text: "Valorização de quem trabalha, geração de empregos e uma indústria forte, aliada à inovação tecnológica, para um São Paulo cada vez mais desenvolvido.",
  },
  {
    icon: IconCap,
    title: "Ensino técnico e educação pública",
    text: "Fortalecer o ensino técnico e a educação pública como ferramentas para ampliar oportunidades e transformar vidas — o mesmo caminho que mudou a minha.",
  },
  {
    icon: IconClock,
    title: "Fim da Escala 6x1",
    text: "Mais qualidade de vida para a classe trabalhadora. Menos exploração, mais tempo com a família e mais dignidade para quem sustenta a economia.",
  },
  {
    icon: IconUsers,
    title: "Juventude na política",
    text: "Mais participação dos jovens nas decisões do Estado. Renovação de verdade: gente nova, preparada e comprometida com o futuro de São Paulo.",
  },
  {
    icon: IconTrending,
    title: "Economia que inclui",
    text: "Fortalecimento da economia com crescimento e inclusão, para um Estado capaz de acolher melhor os seus cidadãos e cidadãs.",
  },
  {
    icon: IconScale,
    title: "Justiça social",
    text: "Políticas públicas que promovam justiça social, valorizem as famílias e reconheçam quem move a economia todos os dias.",
  },
] as const;

// Linha do tempo / trajetória
export const trajetoria = [
  {
    marker: "Raízes",
    title: "Filho de nordestinos, criado em Guarulhos",
    text: "Uma história marcada pelo trabalho, pela superação e pela fé na educação como caminho para mudar de vida.",
  },
  {
    marker: "Formação",
    title: "Formado pelo SENAI",
    text: "A qualificação técnica abriu as primeiras portas e deu a base para tudo o que veio depois.",
  },
  {
    marker: "Chão de fábrica",
    title: "Metalúrgico",
    text: "Começou a vida profissional no chão de fábrica, vivendo de perto a realidade da classe trabalhadora.",
  },
  {
    marker: "Conquista",
    title: "Formou-se engenheiro",
    text: "Estudando e trabalhando, tornou-se engenheiro — sem nunca perder a conexão com quem trabalha.",
  },
  {
    marker: "2026",
    title: "Candidato a Deputado Estadual",
    text: "Coloca sua determinação e entusiasmo a serviço de Guarulhos e de todo o Estado de São Paulo.",
  },
] as const;

// Destaques (números/fatos) exibidos no bloco "Sobre"
export const destaques = [
  { value: "31", label: "anos, guarulhense" },
  { value: "SENAI", label: "formação técnica" },
  { value: "Eng.", label: "do chão de fábrica à engenharia" },
  { value: "PDT", label: "renovação trabalhista" },
] as const;
