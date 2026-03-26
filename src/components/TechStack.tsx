const stack = [
  {
    category: "Frontend",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.05)",
    border: "rgba(59,130,246,0.18)",
    techs: [
      { n: "Next.js", d: "Framework React para produção" },
      { n: "React", d: "Interfaces reativas e componentizadas" },
      { n: "TypeScript", d: "Segurança e manutenibilidade" },
      { n: "Tailwind", d: "Estilização precisa e consistente" },
    ],
  },
  {
    category: "Backend",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.05)",
    border: "rgba(168,85,247,0.18)",
    techs: [
      { n: "Node.js", d: "Runtime performático e escalável" },
      { n: "Express", d: "API leve e extensível" },
      { n: "PostgreSQL", d: "Banco relacional robusto" },
      { n: "Supabase", d: "Infraestrutura gerenciada" },
    ],
  },
  {
    category: "Automação",
    color: "#00C47A",
    bg: "rgba(0,196,122,0.05)",
    border: "rgba(0,196,122,0.18)",
    techs: [
      { n: "Meta Cloud API", d: "Canal oficial WhatsApp Business" },
      { n: "Google Calendar", d: "Sync de agenda em tempo real" },
      { n: "OAuth 2.0", d: "Autenticação segura" },
      { n: "node-cron", d: "Tarefas agendadas" },
    ],
  },
  {
    category: "Infra",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.05)",
    border: "rgba(245,158,11,0.18)",
    techs: [
      { n: "Railway", d: "Deploy contínuo e monitoramento" },
      { n: "Vercel", d: "Hosting de alta performance" },
      { n: "GitHub", d: "Controle de versão" },
      { n: "ngrok", d: "Túnel seguro dev local" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tecnologia"
      className="relative"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4 reveal"
            style={{ color: "var(--green)" }}
          >
            Nossa stack
          </p>
          <h2
            className="font-display font-bold leading-tight mb-4 reveal"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(30px,4.5vw,52px)",
            }}
          >
            Ferramentas escolhidas
            <br />
            <span className="gradient-text">com critério</span>
          </h2>
          <p
            className="font-light leading-relaxed max-w-lg mx-auto reveal"
            style={{ color: "var(--text-secondary)", fontSize: 16 }}
          >
            Cada tecnologia selecionada pela confiabilidade e capacidade de
            crescer junto com o projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stack.map((g) => (
            <div
              key={g.category}
              className="rounded-2xl p-6 reveal"
              style={{ background: g.bg, border: `1px solid ${g.border}` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: g.color }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: g.color }}
                >
                  {g.category}
                </span>
              </div>
              <div className="space-y-4">
                {g.techs.map((t) => (
                  <div
                    key={t.n}
                    className="pb-4 border-b last:border-0 last:pb-0"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.n}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div
          className="stat-bar grid grid-cols-2 md:grid-cols-4 reveal"
          style={{ background: "var(--bg-card)" }}
        >
          {[
            { v: "Veloz", l: "resposta ao webhook" },
            { v: "Estável", l: "infra Railway" },
            { v: "Leve", l: "carregamento do site" },
            { v: "Tipado", l: "TypeScript end-to-end" },
          ].map((s, i) => (
            <div
              key={s.v}
              className="flex flex-col items-center py-7 px-4 text-center"
            >
              <span
                className="font-display font-bold text-xl mb-1"
                style={{ color: "var(--navy)" }}
              >
                {s.v}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
