const stack = [
  {
    category: 'Frontend',
    colorClass: 'text-blue-400',
    dot: 'bg-blue-400',
    border: 'border-blue-500/15',
    bg: 'bg-blue-500/[0.04]',
    techs: [
      { name: 'Next.js',    desc: 'Framework React para produção' },
      { name: 'React',      desc: 'Interfaces reativas e componentizadas' },
      { name: 'TypeScript', desc: 'Segurança e manutenibilidade em escala' },
      { name: 'Tailwind',   desc: 'Estilização precisa e consistente' },
    ],
  },
  {
    category: 'Backend',
    colorClass: 'text-purple-400',
    dot: 'bg-purple-400',
    border: 'border-purple-500/15',
    bg: 'bg-purple-500/[0.04]',
    techs: [
      { name: 'Node.js',    desc: 'Runtime performático e escalável' },
      { name: 'Express',    desc: 'API leve e extensível' },
      { name: 'PostgreSQL', desc: 'Banco relacional robusto' },
      { name: 'Supabase',   desc: 'Infraestrutura de banco gerenciada' },
    ],
  },
  {
    category: 'Automação',
    colorClass: 'text-green',
    dot: 'bg-green',
    border: 'border-green/15',
    bg: 'bg-green/[0.04]',
    techs: [
      { name: 'Meta Cloud API',  desc: 'Canal oficial do WhatsApp Business' },
      { name: 'Google Calendar', desc: 'Sync de agenda em tempo real' },
      { name: 'OAuth 2.0',       desc: 'Autenticação segura e padronizada' },
      { name: 'node-cron',       desc: 'Execução de tarefas agendadas' },
    ],
  },
  {
    category: 'Infra',
    colorClass: 'text-amber-400',
    dot: 'bg-amber-400',
    border: 'border-amber-500/15',
    bg: 'bg-amber-500/[0.04]',
    techs: [
      { name: 'Railway', desc: 'Deploy contínuo e monitoramento' },
      { name: 'Vercel',  desc: 'Hosting de alta performance' },
      { name: 'GitHub',  desc: 'Controle de versão e colaboração' },
      { name: 'ngrok',   desc: 'Túnel seguro para dev local' },
    ],
  },
]

const metrics = [
  { v: 'Veloz',   l: 'resposta ao webhook' },
  { v: 'Estável', l: 'infraestrutura Railway' },
  { v: 'Leve',    l: 'carregamento do site' },
  { v: 'Tipado',  l: 'TypeScript end-to-end' },
]

export default function TechStack() {
  return (
    <section id="tecnologia" className="relative bg-dark3" aria-labelledby="tech-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Nossa stack tecnológica
          </p>
          <h2
            id="tech-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Ferramentas escolhidas<br />
            <span className="gradient-text">com critério</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Cada tecnologia da nossa stack foi selecionada pela sua confiabilidade
            e capacidade de crescer junto com o projeto.
          </p>
        </div>

        {/* Stack columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stack.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border p-6 reveal ${group.bg} ${group.border}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${group.dot} flex-shrink-0`} aria-hidden="true"/>
                <span className={`text-xs font-semibold tracking-widest uppercase ${group.colorClass}`}>
                  {group.category}
                </span>
              </div>
              <div className="space-y-4">
                {group.techs.map((t) => (
                  <div
                    key={t.name}
                    className="pb-4 border-b border-white/[0.05] last:border-0 last:pb-0"
                  >
                    <p className="text-cream text-sm font-medium leading-tight">{t.name}</p>
                    <p className="text-muted text-xs mt-0.5">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metrics bar */}
        <div
          className="stat-bar grid grid-cols-2 md:grid-cols-4 reveal"
          aria-label="Métricas de qualidade técnica"
        >
          {metrics.map((s, i) => (
            <div
              key={s.v}
              className={`flex flex-col items-center py-8 px-4 text-center bg-dark2
                          ${i % 2 === 0 && i < 3 ? '' : ''}`}
            >
              <span className="font-display font-bold text-2xl text-lime mb-1">{s.v}</span>
              <span className="text-xs text-muted">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
