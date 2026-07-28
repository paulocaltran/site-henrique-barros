import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site oficial de Henrique Barros.",
  alternates: { canonical: "/termos-de-uso" },
};

const prose =
  "mx-auto max-w-3xl px-4 sm:px-6 py-16 text-ink-soft " +
  "[&_h2]:font-display [&_h2]:text-ink [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 " +
  "[&_p]:mt-3 [&_p]:leading-relaxed " +
  "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 " +
  "[&_a]:text-brand [&_a]:underline";

export default function Termos() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Termos de Uso" />

      <article className={prose}>
        <p className="text-sm">Última atualização: 28 de julho de 2026.</p>

        <p>
          Estes Termos de Uso regulam o acesso e a utilização do site oficial de{" "}
          <strong className="font-semibold text-ink">{site.candidate}</strong> (
          {site.url.replace("https://www.", "")}). Ao navegar neste site, você concorda
          com os termos abaixo.
        </p>

        <h2>1. Aceitação</h2>
        <p>
          O uso deste site implica a aceitação integral destes Termos de Uso e da nossa{" "}
          <a href="/politica-de-privacidade">Política de Privacidade</a>. Caso não
          concorde, pedimos que não utilize o site.
        </p>

        <h2>2. Objetivo do site</h2>
        <p>
          Este é um site institucional com o objetivo de apresentar informações sobre{" "}
          {site.candidate} e disponibilizar canais de contato. O conteúdo tem caráter
          informativo.
        </p>

        <h2>3. Uso permitido</h2>
        <p>
          Você se compromete a utilizar o site de forma lícita, não praticando atos que
          possam prejudicar seu funcionamento, sua segurança ou terceiros, nem tentando
          acessar áreas restritas sem autorização.
        </p>

        <h2>4. Propriedade intelectual</h2>
        <p>
          Os textos, imagens, logotipos e demais elementos do site são protegidos por
          direitos autorais e de propriedade intelectual. É vedada a reprodução sem
          autorização prévia, ressalvado o compartilhamento habitual de links.
        </p>

        <h2>5. Links para terceiros</h2>
        <p>
          O site pode conter links para páginas de terceiros (como redes sociais). Não
          nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses
          sites externos.
        </p>

        <h2>6. Limitação de responsabilidade</h2>
        <p>
          Empregamos esforços para manter as informações corretas e atualizadas, mas
          não garantimos a ausência de eventuais erros ou interrupções. O uso do site é
          de responsabilidade do usuário.
        </p>

        <h2>7. Alterações</h2>
        <p>
          Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará
          sempre disponível nesta página.
        </p>

        <h2>8. Legislação aplicável</h2>
        <p>
          Estes Termos são regidos pela legislação brasileira, ficando eleito o foro da
          comarca de {site.city} – SP para dirimir eventuais controvérsias.
        </p>

        <h2>9. Contato</h2>
        <p>
          Dúvidas sobre estes Termos podem ser enviadas para {site.candidate} pelo
          e-mail{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> ou telefone{" "}
          <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>.
        </p>
      </article>
    </>
  );
}
