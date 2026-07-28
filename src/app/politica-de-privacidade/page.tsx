import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do site oficial de Henrique Barros, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const prose =
  "mx-auto max-w-3xl px-4 sm:px-6 py-16 text-ink-soft " +
  "[&_h2]:font-display [&_h2]:text-ink [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 " +
  "[&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 " +
  "[&_p]:mt-3 [&_p]:leading-relaxed " +
  "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 " +
  "[&_a]:text-brand [&_a]:underline";

export default function Privacidade() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de Privacidade" />

      <article className={prose}>
        <p className="text-sm">Última atualização: 28 de julho de 2026.</p>

        <p>
          Esta Política de Privacidade descreve como o site oficial de{" "}
          <strong className="font-semibold text-ink">{site.candidate}</strong> (
          {site.url.replace("https://www.", "")}) coleta, utiliza e protege as
          informações dos visitantes, em conformidade com a Lei Geral de Proteção de
          Dados (Lei nº 13.709/2018 — LGPD).
        </p>

        <h2>1. Responsável pelos dados</h2>
        <p>
          O responsável pelo tratamento dos dados é {site.candidate}, com contato pelo
          e-mail{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> e telefone{" "}
          <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>, em{" "}
          {site.cityState}.
        </p>

        <h2>2. Dados que coletamos</h2>
        <h3>2.1. Dados fornecidos por você</h3>
        <p>
          Quando você entra em contato pelo formulário, WhatsApp ou e-mail, podemos
          coletar seu nome, telefone, e-mail e o conteúdo da mensagem.
        </p>
        <h3>2.2. Dados de navegação</h3>
        <p>
          Podemos coletar dados técnicos e de navegação por meio de cookies e
          ferramentas de análise (como o Google Analytics), tais como páginas
          visitadas, tempo de permanência, tipo de dispositivo e dados aproximados de
          localização. Esses dados são utilizados de forma agregada e anonimizada.
        </p>

        <h2>3. Finalidade do tratamento</h2>
        <ul>
          <li>Responder a mensagens e solicitações de contato;</li>
          <li>Melhorar a experiência de navegação e o conteúdo do site;</li>
          <li>Analisar métricas de acesso e desempenho;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h2>4. Base legal</h2>
        <p>
          O tratamento de dados fundamenta-se no consentimento do titular, no legítimo
          interesse e no cumprimento de obrigações legais, conforme a LGPD.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Utilizamos cookies essenciais para o funcionamento do site e cookies
          analíticos para entender como ele é utilizado. Os cookies analíticos só são
          ativados após o seu consentimento, que pode ser concedido ou recusado no
          aviso de cookies exibido ao acessar o site.
        </p>

        <h2>6. Compartilhamento de dados</h2>
        <p>
          Não vendemos seus dados pessoais. Podemos compartilhar dados com provedores
          que dão suporte à operação do site (por exemplo, hospedagem e ferramentas de
          análise, como Google e Meta), sempre nos limites desta Política e da
          legislação aplicável.
        </p>

        <h2>7. Direitos do titular</h2>
        <p>
          Nos termos da LGPD, você pode solicitar a confirmação da existência de
          tratamento, o acesso, a correção, a anonimização, a portabilidade e a
          exclusão dos seus dados, bem como revogar o consentimento. Para exercer seus
          direitos, entre em contato pelo e-mail{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
        </p>

        <h2>8. Segurança e retenção</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger os dados. As
          informações são mantidas apenas pelo tempo necessário às finalidades
          descritas ou por exigência legal.
        </p>

        <h2>9. Alterações desta Política</h2>
        <p>
          Esta Política pode ser atualizada periodicamente. A versão vigente estará
          sempre disponível nesta página, com a respectiva data de atualização.
        </p>

        <h2>10. Contato</h2>
        <p>
          Dúvidas sobre esta Política ou sobre o tratamento dos seus dados podem ser
          enviadas para {site.candidate} pelo e-mail{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> ou telefone{" "}
          <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>.
        </p>
      </article>
    </>
  );
}
