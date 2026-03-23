'use client'
import { useState } from 'react'

const nodes = [
  {
    id: 'client', label: 'Cliente', sub: 'WhatsApp',
    dot: 'bg-green', dotHex: '#00E5A0',
    detail: {
      title: 'Cliente via WhatsApp',
      desc: 'O ponto de contato é o próprio WhatsApp do cliente. Qualquer mensagem — texto livre, número de opção ou palavra-chave — é processada e compreendida pelo sistema.',
      tech: ['WhatsApp App', 'Número Business'],
    },
  },
  {
    id: 'meta', label: 'Meta API', sub: 'Webhook',
    dot: 'bg-blue-400', dotHex: '#60A5FA',
    detail: {
      title: 'Meta Cloud API',
      desc: 'A infraestrutura da Meta entrega cada mensagem via requisição POST ao nosso servidor. O sistema responde imediatamente para garantir a confiabilidade da entrega.',
      tech: ['WhatsApp Business API', 'Webhook POST', 'HTTPS'],
    },
  },
  {
    id: 'backend', label: 'Backend', sub: 'Node.js',
    dot: 'bg-purple-400', dotHex: '#C084FC',
    detail: {
      title: 'Backend — Node.js + Express',
      desc: 'O núcleo da plataforma. Recebe a mensagem, recupera o estado da conversa, determina a intenção do cliente e coordena os serviços necessários para compor a resposta.',
      tech: ['Node.js', 'Express', 'Máquina de estados', 'Railway'],
    },
  },
  {
    id: 'db', label: 'Banco', sub: 'PostgreSQL',
    dot: 'bg-amber-400', dotHex: '#FBBF24',
    detail: {
      title: 'PostgreSQL — Supabase',
      desc: 'Armazena com segurança os dados de clientes, agendamentos, estados de conversa e credenciais de integração. Cada instância opera com banco exclusivo e isolado.',
      tech: ['PostgreSQL', 'Supabase', 'Índices otimizados', 'Transações ACID'],
    },
  },
  {
    id: 'calendar', label: 'Calendar', sub: 'Google API',
    dot: 'bg-teal-400', dotHex: '#2DD4BF',
    detail: {
      title: 'Google Calendar API',
      desc: 'A agenda do estabelecimento é consultada em tempo real para exibir apenas os horários genuinamente disponíveis. Cada confirmação gera um evento automaticamente.',
      tech: ['Google Calendar API', 'OAuth 2.0', 'Refresh Token', 'Sync bidirecional'],
    },
  },
]

export default function Architecture() {
  const [active, setActive] = useState<string | null>('backend')
  const activeNode = nodes.find((n) => n.id === active)

  return (
    <section className="relative bg-dark3" aria-labelledby="arch-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Arquitetura da plataforma
          </p>
          <h2
            id="arch-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Engenharia pensada<br />
            <span className="gradient-text">para escalar</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Cada camada da plataforma foi projetada com propósito.
            Selecione um componente para compreender seu papel na arquitetura.
          </p>
        </div>

        {/* Pipeline */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-0 mb-10 reveal"
          role="tablist"
          aria-label="Componentes da arquitetura"
        >
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col md:flex-row items-center">
              <button
                role="tab"
                aria-selected={active === node.id}
                aria-controls="arch-detail"
                onClick={() => setActive(node.id === active ? null : node.id)}
                className={`relative flex flex-col items-center gap-2 px-6 py-5 rounded-2xl
                             border transition-all duration-200 cursor-pointer min-w-[120px]
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green
                             ${active === node.id
                               ? 'bg-dark2 border-green/30 scale-105 shadow-lg shadow-black/40'
                               : 'bg-surface/50 border-white/[0.07] hover:border-white/15 hover:bg-surface opacity-70 hover:opacity-100'
                             }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${node.dot}
                    ${active === node.id ? 'animate-pulse' : ''}`}
                  aria-hidden="true"
                />
                <span className="text-cream text-sm font-medium whitespace-nowrap">{node.label}</span>
                <span className="text-muted text-[10px] whitespace-nowrap">{node.sub}</span>

                {/* Tooltip arrow */}
                {active === node.id && (
                  <span
                    className="absolute -bottom-[9px] left-1/2 -translate-x-1/2
                                w-4 h-4 rotate-45 bg-dark2 border-b border-r border-green/25"
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Connector */}
              {i < nodes.length - 1 && (
                <div className="flex items-center mx-2 my-2 md:my-0" aria-hidden="true">
                  <svg className="hidden md:block w-10 h-4" viewBox="0 0 40 4">
                    <line
                      x1="0" y1="2" x2="32" y2="2"
                      stroke="rgba(0,229,160,0.25)" strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <path d="M30 0L34 2L30 4" fill="none" stroke="rgba(0,229,160,0.4)" strokeWidth="1"/>
                  </svg>
                  <svg className="md:hidden w-4 h-8 rotate-90" viewBox="0 0 4 32">
                    <line x1="2" y1="0" x2="2" y2="24" stroke="rgba(0,229,160,0.25)" strokeWidth="1" strokeDasharray="4 4"/>
                    <path d="M0 22L2 26L4 22" fill="none" stroke="rgba(0,229,160,0.4)" strokeWidth="1"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <div id="arch-detail" role="tabpanel" className="max-w-2xl mx-auto min-h-[160px]">
          {activeNode && (
            <div
              className="bg-dark2 border border-white/[0.08] rounded-2xl p-8"
              style={{ animation: 'fadeUp .25s ease' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${activeNode.dot} flex-shrink-0`} aria-hidden="true"/>
                <h3 className="font-display font-bold text-lg text-cream">{activeNode.detail.title}</h3>
              </div>
              <p className="text-muted2 text-sm leading-relaxed mb-6">{activeNode.detail.desc}</p>
              <div className="flex flex-wrap gap-2">
                {activeNode.detail.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Flow steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {[
            { n:'01', title: 'Recepção da mensagem', desc: 'A Meta entrega a mensagem via webhook. O servidor responde imediatamente e processa de forma assíncrona, garantindo performance.' },
            { n:'02', title: 'Processamento de estado', desc: 'O banco retorna o contexto da conversa. O sistema identifica a intenção e determina o caminho correto para a resposta.' },
            { n:'03', title: 'Resposta ao cliente', desc: 'Os serviços são acionados, a resposta é composta e enviada via Meta API — encerrando o ciclo em frações de segundo.' },
          ].map((s) => (
            <div key={s.n} className="p-6 rounded-2xl bg-dark2 border border-white/[0.07]">
              <span className="text-xs font-bold text-muted tracking-widest font-display">{s.n}</span>
              <h4 className="text-sm font-medium text-cream mt-2 mb-2">{s.title}</h4>
              <p className="text-xs text-muted2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      `}</style>
    </section>
  )
}
