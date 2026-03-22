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
      return <em key={i} className="not-italic text-white/60">{part.slice(1, -1)}</em>
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>{line}{j < arr.length - 1 && <br />}</span>
    ))
  })
}

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
    <section ref={sectionRef} className="bg-dark border-t border-green/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Assistente inteligente
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Atendimento autônomo,<br />
          <span className="text-green">sem interrupção</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-16 reveal">
          Enquanto você descansa, o assistente responde, agenda e confirma.
          Cada interação é conduzida com precisão — como se fosse você mesmo atendendo.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Phone mockup */}
          <div className="flex-shrink-0 w-72 reveal">
            <div className="bg-[#111B21] rounded-[36px] border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-[#1F2C34] px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green/20 border border-green/30
                                flex items-center justify-center text-sm">✂️</div>
                <div>
                  <p className="text-white text-xs font-medium">Barbearia do Carlos</p>
                  <p className="text-green text-[10px]">● online agora</p>
                </div>
              </div>
              <div ref={chatRef} className="h-[440px] overflow-y-auto px-3 py-4 space-y-2"
                   style={{ scrollbarWidth: 'none' }}>
                {messages.map((msg, i) =>
                  visible.includes(i) ? (
                    <div key={i}
                      className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}
                                  animate-[fadeIn_.2s_ease]`}>
                      <div className={`max-w-[85%] px-3 py-2 rounded-lg text-[11px] leading-relaxed
                        ${msg.from === 'client'
                          ? 'bg-[#005C4B] text-[#e0ffe8] rounded-br-sm'
                          : 'bg-[#1F2C34] text-[#d1d7db] rounded-bl-sm'}`}>
                        {parseText(msg.text)}
                      </div>
                    </div>
                  ) : null
                )}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-[#1F2C34] px-4 py-3 rounded-lg rounded-bl-sm flex gap-1 items-center">
                      {[0, 150, 300].map((d) => (
                        <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/40"
                          style={{ animation: `bounce 1s ease infinite ${d}ms` }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button onClick={startAnimation}
              className="mt-4 w-full py-2 rounded-lg border border-green/20 text-green text-xs
                         hover:bg-green/10 transition-colors duration-200">
              ↺ Ver novamente
            </button>
          </div>

          {/* Features */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '🌙', title: 'Disponível ininterruptamente',  desc: 'Madrugada, fins de semana e feriados. O assistente nunca fica offline.' },
              { icon: '📅', title: 'Agendamento sem atrito',         desc: 'O cliente conduz o próprio agendamento — sem depender de ninguém para confirmar.' },
              { icon: '🔔', title: 'Lembretes automáticos',          desc: 'O sistema notifica o cliente automaticamente antes do horário marcado, reduzindo ausências.' },
              { icon: '📆', title: 'Sincronização com Google Calendar', desc: 'Cada agendamento reflete em tempo real na agenda do estabelecimento.' },
              { icon: '❌', title: 'Cancelamento pelo próprio cliente', desc: 'O cliente cancela diretamente pelo WhatsApp, sem necessidade de contato humano.' },
              { icon: '💬', title: 'Memória de conversa',             desc: 'O assistente mantém o contexto da conversa entre mensagens, sem perder o fio.' },
            ].map((f) => (
              <div key={f.title}
                className="flex gap-4 p-5 rounded-xl bg-dark2 border border-green/10
                           hover:border-green/25 transition-all duration-200 reveal">
                <span className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h4 className="text-sm font-medium text-cream mb-1">{f.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
      `}</style>
    </section>
  )
}
