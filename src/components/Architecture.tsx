"use client";
import { useState } from "react";

const nodes = [
  {
    id: "client",
    label: "Cliente",
    sub: "WhatsApp",
    dotColor: "#00C47A",
    detail: {
      title: "Cliente via WhatsApp",
      desc: "O ponto de contato é o próprio WhatsApp. Qualquer mensagem — texto livre, número ou palavra-chave — é processada pelo sistema.",
      tech: ["WhatsApp App", "Número Business"],
    },
  },
  {
    id: "meta",
    label: "Meta API",
    sub: "Webhook",
    dotColor: "#3B82F6",
    detail: {
      title: "Meta Cloud API",
      desc: "A infraestrutura da Meta entrega cada mensagem via POST ao nosso servidor. O sistema responde imediatamente garantindo confiabilidade.",
      tech: ["WhatsApp Business API", "Webhook POST", "HTTPS"],
    },
  },
  {
    id: "backend",
    label: "Backend",
    sub: "Node.js",
    dotColor: "#A855F7",
    detail: {
      title: "Backend — Node.js + Express",
      desc: "Recebe a mensagem, recupera o estado da conversa, determina a intenção do cliente e coordena os serviços necessários para a resposta.",
      tech: ["Node.js", "Express", "Máquina de estados", "Railway"],
    },
  },
  {
    id: "db",
    label: "Banco",
    sub: "PostgreSQL",
    dotColor: "#F59E0B",
    detail: {
      title: "PostgreSQL — Supabase",
      desc: "Armazena com segurança dados de clientes, agendamentos, estados de conversa e credenciais. Cada instância opera com banco exclusivo e isolado.",
      tech: ["PostgreSQL", "Supabase", "Índices otimizados", "ACID"],
    },
  },
  {
    id: "calendar",
    label: "Calendar",
    sub: "Google API",
    dotColor: "#14B8A6",
    detail: {
      title: "Google Calendar API",
      desc: "A agenda é consultada em tempo real para exibir apenas horários genuinamente disponíveis. Cada confirmação gera um evento automaticamente.",
      tech: [
        "Google Calendar API",
        "OAuth 2.0",
        "Refresh Token",
        "Sync bidirecional",
      ],
    },
  },
];

export default function Architecture() {
  const [active, setActive] = useState<string | null>("backend");
  const node = nodes.find((n) => n.id === active);

  return (
    <section className="relative" style={{ background: "var(--bg-surface)" }}>
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4 reveal"
            style={{ color: "var(--green)" }}
          >
            Arquitetura da plataforma
          </p>
          <h2
            className="font-display font-bold leading-tight mb-4 reveal"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(30px,4.5vw,52px)",
            }}
          >
            Engenharia pensada
            <br />
            <span className="gradient-text">para escalar</span>
          </h2>
          <p
            className="font-light leading-relaxed max-w-lg mx-auto reveal"
            style={{ color: "var(--text-secondary)", fontSize: 16 }}
          >
            Selecione um componente para compreender seu papel na arquitetura.
          </p>
        </div>

        {/* Pipeline */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-0 mb-10 reveal"
          role="tablist"
        >
          {nodes.map((n, i) => (
            <div key={n.id} className="flex flex-col md:flex-row items-center">
              <button
                role="tab"
                aria-selected={active === n.id}
                onClick={() => setActive(n.id === active ? null : n.id)}
                className="relative flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-200 cursor-pointer min-w-[112px] focus-visible:outline-none focus-visible:ring-2"
                style={{
                  background:
                    active === n.id ? "var(--bg-base)" : "var(--bg-card)",
                  border:
                    active === n.id
                      ? `1.5px solid rgba(0,196,122,0.4)`
                      : "1px solid var(--border-md)",
                  transform: active === n.id ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    active === n.id
                      ? "0 4px 20px rgba(0,196,122,0.12)"
                      : "none",
                  opacity: active === n.id ? 1 : 0.75,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: n.dotColor,
                    animation: active === n.id ? "pulse-dot 2s infinite" : "",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {n.label}
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {n.sub}
                </span>
                {active === n.id && (
                  <span
                    className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                    style={{
                      background: "var(--bg-base)",
                      border: "0 0 1px 1px solid rgba(0,196,122,0.3)",
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
              {i < nodes.length - 1 && (
                <div
                  className="flex items-center mx-2 my-2 md:my-0"
                  aria-hidden="true"
                >
                  <svg className="hidden md:block w-8 h-3" viewBox="0 0 32 3">
                    <line
                      x1="0"
                      y1="1.5"
                      x2="24"
                      y2="1.5"
                      stroke="var(--border-dark)"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M22 0L26 1.5L22 3"
                      fill="none"
                      stroke="var(--border-dark)"
                      strokeWidth="1"
                    />
                  </svg>
                  <svg className="md:hidden w-3 h-8" viewBox="0 0 3 32">
                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="24"
                      stroke="var(--border-dark)"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M0 22L1.5 26L3 22"
                      fill="none"
                      stroke="var(--border-dark)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail */}
        <div
          className="max-w-2xl mx-auto min-h-[148px]"
          id="arch-detail"
          role="tabpanel"
        >
          {node && (
            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-md)",
                animation: "fadeUp .25s ease",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: node.dotColor }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {node.detail.title}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {node.detail.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {node.detail.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Flow steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {[
            {
              n: "01",
              title: "Recepção da mensagem",
              desc: "A Meta entrega via webhook. O servidor responde imediatamente e processa de forma assíncrona.",
            },
            {
              n: "02",
              title: "Processamento de estado",
              desc: "O banco retorna o contexto. O sistema identifica a intenção e determina o caminho correto.",
            },
            {
              n: "03",
              title: "Resposta ao cliente",
              desc: "Os serviços são acionados, a resposta composta e enviada via Meta API em frações de segundo.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                className="text-xs font-bold tracking-widest font-display"
                style={{ color: "var(--text-muted)" }}
              >
                {s.n}
              </span>
              <h4
                className="text-sm font-medium mt-2 mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {s.title}
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
