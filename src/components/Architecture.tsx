'use client'
import { useState } from 'react'

const nodes = [
  {
    id: 'client', label: 'Cliente', sub: 'WhatsApp',
    color: 'border-green/40 bg-dark3', dot: 'bg-green',
    detail: {
      title: 'Cliente via WhatsApp',
      desc: 'O ponto de contato é o próprio WhatsApp do cliente. Qualquer mensagem — texto livre, número de opção ou palavra-chave — é processada e compreendida pelo sistema.',
      tech: ['WhatsApp App', 'Número Business'],
    },
  },
  {
    id: 'meta', label: 'Meta API', sub: 'Cloud Webhook',
    color: 'border-blue-500/40 bg-dark3', dot: 'bg-blue-400',
    detail: {
      title: 'Meta Cloud API',
      desc: 'A infraestrutura da Meta entrega cada mensagem via requisição POST ao nosso servidor. O sistema responde imediatamente para garantir a confiabilidade da entrega.',
      tech: ['WhatsApp Business API', 'Webhook POST', 'HTTPS'],
    },
  },
  {
    id: 'backend', label: 'Backend', sub: 'Node.js + Express',
    color: 'border-purple-500/40 bg-dark3', dot: 'bg-purple-400',
    detail: {
      title: 'Backend — Node.js + Express',
      desc: 'O núcleo da plataforma. Recebe a mensagem, recupera o estado da conversa, determina a intenção do cliente e coordena os serviços necessários para compor a resposta.',
      tech: ['Node.js', 'Express', 'Máquina de estados', 'Railway'],
    },
  },
  {
    id: 'db', label: 'Banco', sub: 'PostgreSQL',
    color: 'border-amber-500/40 bg-dark3', dot: 'bg-amber-400',
    detail: {
      title: 'PostgreSQL — Supabase',
      desc: 'Armazena com segurança os dados de clientes, agendamentos, estados de conversa e credenciais de integração. Cada instância opera com banco exclusivo e isolado.',
      tech: ['PostgreSQL', 'Supabase', 'Índices otimizados', 'Transações ACID'],
    },
  },
  {
    id: 'calendar', label: 'Calendar', sub: 'Google API',
    color: 'border-teal-500/40 bg-dark3', dot: 'bg-teal-400',
    detail: {
      title: 'Google Calendar API',
      desc: 'A agenda do estabelecimento é consultada em tempo real para exibir apenas os horários genuinamente disponíveis. Cada confirmação gera um evento automaticamente.',
      tech: ['Google Calendar API', 'OAuth 2.0', 'Refresh Token', 'Sincronização bidirecional'],
    },
  },
]

export default function Architecture() {
  const [active, setActive] = useState<string | null>('backend')
  const activeNode = nodes.find((n) => n.id === active)

  return (
    <section className="bg-black border-t border-green/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Arquitetura da plataforma
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Engenharia pensada<br /><span className="text-green">para escalar</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-16 reveal">
          Cada camada da plataforma foi projetada com propósito.
          Selecione um componente para compreender seu papel na arquitetura.
        </p>

        {/* Pipeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-12 reveal">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col md:flex-row items-center">
              <button
                onClick={() => setActive(node.id === active ? null : node.id)}
                className={`relative flex flex-col items-center gap-1.5 px-6 py-5 rounded-xl
                            border transition-all duration-200 cursor-pointer min-w-[110px]
                            ${node.color}
                            ${active === node.id
                              ? 'scale-105 shadow-lg shadow-black/40 brightness-125'
                              : 'hover:scale-102 hover:brightness-110 opacity-80 hover:opacity-100'}`}
              >
                <span className={`w-2 h-2 rounded-full ${node.dot}
                  ${active === node.id ? 'animate-pulse' : ''}`} />
                <span className="text-cream text-sm font-medium whitespace-nowrap">{node.label}</span>
                <span className="text-muted text-[10px] whitespace-nowrap">{node.sub}</span>
                {active === node.id && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2
                                   w-3 h-3 rotate-45 bg-dark2 border-b border-r border-green/30" />
                )}
              </button>
              {i < nodes.length - 1 && (
                <div className="flex items-center md:mx-1 my-1 md:my-0">
                  <div className="hidden md:block w-8 h-px bg-green/20 relative">
                    <div className="absolute inset-0 h-px bg-green/60"
                      style={{ animation: `flowRight 1.5s linear infinite ${i * 0.3}s` }} />
                  </div>
                  <span className="text-green/40 text-lg leading-none hidden md:block">›</span>
                  <span className="md:hidden text-green/40 text-xl rotate-90">›</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail */}
        {activeNode && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark2 border border-green/15 rounded-2xl p-8 animate-[fadeUp_.25s_ease]">
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${activeNode.dot}`} />
                <h3 className="font-display font-bold text-lg text-cream">{activeNode.detail.title}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">{activeNode.detail.desc}</p>
              <div className="flex flex-wrap gap-2">
                {activeNode.detail.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full
                                           bg-green/8 text-green border border-green/15">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Fluxo */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {[
            { title: 'Recepção da mensagem',  desc: 'A Meta entrega a mensagem via webhook. O servidor responde imediatamente e processa de forma assíncrona, garantindo performance.' },
            { title: 'Processamento de estado', desc: 'O banco retorna o contexto da conversa. O sistema identifica a intenção e determina o caminho correto para a resposta.' },
            { title: 'Resposta ao cliente',    desc: 'Os serviços são acionados, a resposta é composta e enviada via Meta API — encerrando o ciclo em frações de segundo.' },
          ].map((s) => (
            <div key={s.title} className="p-5 rounded-xl bg-dark2 border border-green/10">
              <h4 className="text-sm font-medium text-cream mb-2">{s.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes flowRight {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:none; }
        }
      `}</style>
    </section>
  )
}
