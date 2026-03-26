"use client";
import { useEffect, useRef, useState } from "react";

const messages = [
  { from: "client", text: "Oi! Gostaria de agendar um horário 😊", delay: 0 },
  {
    from: "bot",
    text: `Olá! Bem-vindo à Barbearia do Carlos 💈\n\nComo posso ajudá-lo?\n\n1️⃣  Agendar horário\n2️⃣  Meus agendamentos\n3️⃣  Horários de funcionamento\n4️⃣  Cancelar agendamento`,
    delay: 900,
  },
  { from: "client", text: "1", delay: 1900 },
  {
    from: "bot",
    text: `Qual serviço?\n\n1️⃣  Corte de cabelo\n2️⃣  Barba\n3️⃣  Corte completo`,
    delay: 2700,
  },
  { from: "client", text: "1", delay: 3600 },
  { from: "bot", text: "Para qual data?\n_Ex: 25/07_", delay: 4400 },
  { from: "client", text: "25/07", delay: 5200 },
  {
    from: "bot",
    text: `Horários em *25/07*:\n\n1️⃣  09:00\n2️⃣  10:00\n3️⃣  14:00\n4️⃣  15:30`,
    delay: 6100,
  },
  { from: "client", text: "2", delay: 7000 },
  {
    from: "bot",
    text: `Confirmar?\n\n📋 *Corte de cabelo*\n📅 25/07 às 10:00\n\nResponda *sim* para confirmar.`,
    delay: 7800,
  },
  { from: "client", text: "sim", delay: 8700 },
  {
    from: "bot",
    text: `✅ *Confirmado!*\n\nLembrete 1h antes. Até lá! 👋`,
    delay: 9500,
  },
];

function parseText(text: string) {
  return text.split(/(\*[^*]+\*|_[^_]+_)/g).map((p, i) => {
    if (p.startsWith("*") && p.endsWith("*"))
      return <strong key={i}>{p.slice(1, -1)}</strong>;
    if (p.startsWith("_") && p.endsWith("_"))
      return (
        <em key={i} className="not-italic opacity-60">
          {p.slice(1, -1)}
        </em>
      );
    return p.split("\n").map((l, j, a) => (
      <span key={`${i}-${j}`}>
        {l}
        {j < a.length - 1 && <br />}
      </span>
    ));
  });
}

const features = [
  {
    icon: "🌙",
    title: "Disponível 24/7",
    desc: "Fins de semana e feriados. Nunca fica offline.",
  },
  {
    icon: "📅",
    title: "Agendamento sem atrito",
    desc: "O cliente conduz o próprio agendamento sem depender de ninguém.",
  },
  {
    icon: "🔔",
    title: "Lembretes automáticos",
    desc: "Notifica o cliente antes do horário marcado, reduzindo ausências.",
  },
  {
    icon: "📆",
    title: "Sync Google Calendar",
    desc: "Cada agendamento reflete em tempo real na agenda.",
  },
  {
    icon: "❌",
    title: "Cancelamento próprio",
    desc: "O cliente cancela pelo WhatsApp, sem contato humano.",
  },
  {
    icon: "💬",
    title: "Memória de conversa",
    desc: "Mantém contexto entre mensagens sem perder o fio.",
  },
];

export default function WhatsAppDemo() {
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function startAnimation() {
    setVisible([]);
    setTyping(false);
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
    messages.forEach((msg, i) => {
      const t1 = setTimeout(() => {
        if (msg.from === "bot") setTyping(true);
      }, msg.delay);
      const t2 = setTimeout(
        () => {
          setTyping(false);
          setVisible((p) => [...p, i]);
        },
        msg.delay + (msg.from === "bot" ? 600 : 200),
      );
      timerRef.current.push(t1, t2);
    });
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          startAnimation();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => {
      obs.disconnect();
      timerRef.current.forEach(clearTimeout);
    };
  }, [started]);

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [visible, typing]);

  return (
    <section
      id="automacao"
      ref={sectionRef}
      className="relative"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4 reveal"
            style={{ color: "var(--green)" }}
          >
            Assistente inteligente
          </p>
          <h2
            className="font-display font-bold leading-tight mb-4 reveal"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(30px,4.5vw,52px)",
            }}
          >
            Atendimento autônomo,
            <br />
            <span className="gradient-text">sem interrupção</span>
          </h2>
          <p
            className="font-light leading-relaxed max-w-lg mx-auto reveal"
            style={{ color: "var(--text-secondary)", fontSize: 16 }}
          >
            Enquanto você descansa, o assistente responde, agenda e confirma com
            precisão.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Phone */}
          <div className="flex-shrink-0 w-72 reveal">
            <div
              className="rounded-[36px] overflow-hidden shadow-xl"
              style={{
                background: "#111B21",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ background: "#1F2C34" }}
              >
                <div
                  className="w-9 h-9 rounded-full bg-green/20 border border-green/30 flex items-center justify-center text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  ✂️
                </div>
                <div>
                  <p className="text-white text-xs font-medium">
                    Barbearia do Carlos
                  </p>
                  <p
                    className="text-[10px] mt-0.5"
                    style={{ color: "#00E5A0" }}
                  >
                    ● online agora
                  </p>
                </div>
              </div>
              <div
                ref={chatRef}
                className="h-[400px] overflow-y-auto px-3 py-3 space-y-2"
                style={{ scrollbarWidth: "none" }}
                aria-live="polite"
              >
                {messages.map((msg, i) =>
                  visible.includes(i) ? (
                    <div
                      key={i}
                      className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                      style={{ animation: "fadeIn .2s ease" }}
                    >
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-lg text-[11px] leading-relaxed`}
                        style={{
                          background:
                            msg.from === "client" ? "#005C4B" : "#1F2C34",
                          color: msg.from === "client" ? "#e0ffe8" : "#d1d7db",
                          borderRadius:
                            msg.from === "client"
                              ? "8px 8px 2px 8px"
                              : "8px 8px 8px 2px",
                        }}
                      >
                        {parseText(msg.text)}
                      </div>
                    </div>
                  ) : null,
                )}
                {typing && (
                  <div className="flex justify-start">
                    <div
                      className="px-4 py-3 rounded-lg flex gap-1 items-center"
                      style={{
                        background: "#1F2C34",
                        borderRadius: "8px 8px 8px 2px",
                      }}
                    >
                      {[0, 150, 300].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.4)",
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
              className="mt-3 w-full py-2.5 rounded-xl text-xs transition-all duration-200"
              style={{
                border: "1px solid var(--border-md)",
                color: "var(--text-muted)",
                background: "var(--bg-card)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.borderColor = "rgba(0,196,122,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border-md)";
              }}
            >
              ↺ Ver novamente
            </button>
          </div>

          {/* Features */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-5 rounded-2xl card-hover reveal"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-xl flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <div>
                  <h4
                    className="text-sm font-medium mb-1 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}`}</style>
    </section>
  );
}
