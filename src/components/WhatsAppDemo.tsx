'use client'
import { useEffect, useRef, useState } from 'react'

const messages = [
  { from: 'client', text: 'Oi! Gostaria de agendar um horário 😊', delay: 0 },
  {
    from: 'bot',
    text: `Olá! Seja bem-vindo à Barbearia do Carlos 💈\n\nComo posso ajudá-lo hoje?\n\n1️⃣  Agendar horário\n2️⃣  Meus agendamentos\n3️⃣  Horário de funcionamento\n4️⃣  Cancelar agendamento`,
    delay: 900,
  },
  { from: 'client', text: '1', delay: 1900 },
  {
    from: 'bot',
    text: `Qual serviço você deseja?\n\n1️⃣  Corte de cabelo\n2️⃣  Barba\n3️⃣  Corte completo`,
    delay: 2700,
  },
  { from: 'client', text: '1', delay: 3600 },
  { from: 'bot', text: 'Para qual data você gostaria de agendar?\n_Ex: 25/07_', delay: 4400 },
  { from: 'client', text: '25/07', delay: 5200 },
  {
    from: 'bot',
    text: `Horários disponíveis em *25/07*:\n\n1️⃣  09:00\n2️⃣  10:00\n3️⃣  14:00\n4️⃣  15:30`,
    delay: 6100,
  },
  { from: 'client', text: '2', delay: 7000 },
  {
    from: 'bot',
    text: `Confirmar agendamento?\n\n📋 *Corte de cabelo*\n📅 25/07 às 10:00\n\nResponda *sim* para confirmar.`,
    delay: 7800,
  },
  { from: 'client', text: 'sim', delay: 8700 },
  {
    from: 'bot',
    text: `✅ *Agendamento confirmado!*\n\nVocê receberá um lembrete uma hora antes.\nAté lá! 👋`,
    delay: 9500,
  },
]

function parseText(text: string) {
  const parts = text.split(/(\*[^*]+\*|_[^_]+_)/g)
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*'))
      return <strong key={i} className="font-semibold">{part.slice(1, -1)}</strong>
    if (part.startsWith('_') && part.endsWith('_'))
      return <em key={i} className="not-italic opacity-60">{part.slice(1, -1)}</em>
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>{line}{j < arr.length - 1 && <br />}</span>
    ))
  })
}

const features = [
  { icon: '🌙', title: 'Disponível 24/7', desc: 'Madrugada, fins de semana e feriados. O assistente nunca fica offline.' },
  { icon: '📅', title: 'Agendamento sem atrito', desc: 'O cliente conduz o próprio agendamento — sem depender de ninguém para confirmar.' },
  { icon: '🔔', title: 'Lembretes automáticos', desc: 'O sistema notifica o cliente automaticamente antes do horário marcado, reduzindo ausências.' },
  { icon: '📆', title: 'Sync Google Calendar', desc: 'Cada agendamento reflete em tempo real na agenda do estabelecimento.' },
  { icon: '❌', title: 'Cancelamento pelo cliente', desc: 'O cliente cancela diretamente pelo WhatsApp, sem necessidade de contato humano.' },
  { icon: '💬', title: 'Memória de conversa', desc: 'O assistente mantém o contexto da conversa entre mensagens, sem perder o fio.' },
]

export default function WhatsAppDemo() {
  const [visible, setVisible] = useState<number[]>([])
  const [typing, setTyping]   = useState(false)
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const chatRef    = useRef<HTMLDivElement>(null)
  const timerRef   = useRef<ReturnType<typeof setTimeout>[]>([])

  function startAnimation() {
    setVisible([]); setTyping(false)
    timerRef.current.forEach(clearTimeout); timerRef.current = []
    messages.forEach((msg, i) => {
      const t1 = setTimeout(() => { if (msg.from === 'bot') setTyping(true) }, msg.delay)
      const t2 = setTimeout(() => {
        setTyping(false)
        setVisible((prev) => [...prev, i])
      }, msg.delay + (msg.from === 'bot' ? 600 : 200))
      timerRef.current.push(t1, t2)
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) { setStarted(true); startAnimation() } },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { observer.disconnect(); timerRef.current.forEach(clearTimeout) }
  }, [started])

  useEffect(() => {
    const el = chatRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [visible, typing])

  return (
    <section
      id="automacao"
      ref={sectionRef}
      className="relative bg-dark2"
      aria-labelledby="whatsapp-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Assistente inteligente
          </p>
          <h2
            id="whatsapp-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Atendimento autônomo,<br />
            <span className="gradient-text">sem interrupção</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Enquanto você descansa, o assistente responde, agenda e confirma.
            Cada interação é conduzida com precisão — como se fosse você mesmo atendendo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Phone mockup */}
          <div className="flex-shrink-0 w-72 reveal">
            <div
              className="rounded-[36px] overflow-hidden shadow-2xl"
              style={{ background: '#111B21', border: '1px solid rgba(255,255,255,0.08)' }}
              role="img"
              aria-label="Demonstração de conversa WhatsApp com agendamento automático"
            >
              {/* Header */}
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ background: '#1F2C34' }}
              >
                <div className="w-9 h-9 rounded-full bg-green/20 border border-green/30
                                flex items-center justify-center text-sm flex-shrink-0"
                     aria-hidden="true">✂️</div>
                <div>
                  <p className="text-white text-xs font-medium leading-tight">Barbearia do Carlos</p>
                  <p className="text-green text-[10px] mt-0.5">● online agora</p>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={chatRef}
                className="h-[420px] overflow-y-auto px-3 py-3 space-y-2"
                style={{ scrollbarWidth: 'none' }}
                aria-live="polite"
                aria-label="Conversa de WhatsApp"
              >
                {messages.map((msg, i) =>
                  visible.includes(i) ? (
                    <div
                      key={i}
                      className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}
                      style={{ animation: 'fadeIn .2s ease' }}
                    >
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-lg text-[11px] leading-relaxed
                          ${msg.from === 'client'
                            ? 'rounded-br-sm text-[#e0ffe8]'
                            : 'rounded-bl-sm text-[#d1d7db]'}`}
                        style={{
                          background: msg.from === 'client' ? '#005C4B' : '#1F2C34',
                        }}
                      >
                        {parseText(msg.text)}
                      </div>
                    </div>
                  ) : null
                )}
                {typing && (
                  <div className="flex justify-start" aria-label="Digitando...">
                    <div
                      className="px-4 py-3 rounded-lg rounded-bl-sm flex gap-1 items-center"
                      style={{ background: '#1F2C34' }}
                    >
                      {[0, 150, 300].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.4)',
                            animation: `bounce 1s ease infinite ${d}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={startAnimation}
              className="mt-3 w-full py-2.5 rounded-xl border border-white/10 text-muted2 text-xs
                         hover:text-cream hover:border-green/30 transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label="Reiniciar demonstração da conversa"
            >
              ↺ Ver novamente
            </button>
          </div>

          {/* Features grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-5 rounded-2xl bg-dark3 border border-white/[0.07]
                           card-hover reveal"
              >
                <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{f.icon}</span>
                <div>
                  <h4 className="text-sm font-medium text-cream mb-1 leading-snug">{f.title}</h4>
                  <p className="text-xs text-muted2 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)} }
      `}</style>
    </section>
  )
}
