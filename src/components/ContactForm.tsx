"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconWhatsApp } from "@/components/icons";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = [
      `Olá, Henrique! Meu nome é ${nome || "(não informado)"}.`,
      telefone ? `Telefone: ${telefone}.` : "",
      "",
      mensagem,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="text-sm font-semibold text-ink">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="telefone" className="text-sm font-semibold text-ink">
          Telefone / WhatsApp{" "}
          <span className="font-normal text-ink-soft">(opcional)</span>
        </label>
        <input
          id="telefone"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(11) 90000-0000"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="text-sm font-semibold text-ink">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          required
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Escreva sua mensagem"
          className={`${field} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
      >
        <IconWhatsApp className="h-5 w-5" />
        Enviar pelo WhatsApp
      </button>
      <p className="text-xs text-ink-soft">
        Ao enviar, abriremos o WhatsApp com a sua mensagem pronta para
        {" "}{site.contact.phoneDisplay}.
      </p>
    </form>
  );
}
