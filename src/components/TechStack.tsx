const stack = [
  {
    category: 'Frontend',
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5', dot: 'bg-blue-400',
    techs: [
      { name: 'Next.js',    desc: 'Framework React para produção' },
      { name: 'React',      desc: 'Interfaces reativas e componentizadas' },
      { name: 'TypeScript', desc: 'Segurança e manutenibilidade em escala' },
      { name: 'Tailwind',   desc: 'Estilização precisa e consistente' },
    ],
  },
  {
    category: 'Backend',
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5', dot: 'bg-purple-400',
    techs: [
      { name: 'Node.js',    desc: 'Runtime performático e escalável' },
      { name: 'Express',    desc: 'API leve e extensível' },
      { name: 'PostgreSQL', desc: 'Banco relacional robusto' },
      { name: 'Supabase',   desc: 'Infraestrutura de banco gerenciada' },
    ],
  },
  {
    category: 'Automação',
    color: 'text-green border-green/20 bg-green/5', dot: 'bg-green',
    techs: [
      { name: 'Meta Cloud API',  desc: 'Canal oficial do WhatsApp Business' },
      { name: 'Google Calendar', desc: 'Sincronização de agenda em tempo real' },
      { name: 'OAuth 2.0',       desc: 'Autenticação segura e padronizada' },
      { name: 'node-cron',       desc: 'Execução de tarefas agendadas' },
    ],
  },
  {
    category: 'Infraestrutura',
    color: 'text-amber-400 border-amber-500/20 bg-amber-500/5', dot: 'bg-amber-400',
    techs: [
      { name: 'Railway', desc: 'Deploy contínuo e monitoramento' },
      { name: 'Vercel',  desc: 'Hosting de alta performance para frontend' },
      { name: 'GitHub',  desc: 'Controle de versão e colaboração' },
      { name: 'ngrok',   desc: 'Túnel seguro para desenvolvimento local' },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="bg-black border-t border-green/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Nossa stack tecnológica
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Ferramentas escolhidas<br /><span className="text-green">com critério</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-16 reveal">
          Cada tecnologia da nossa stack foi selecionada pela sua confiabilidade,
          desempenho em produção e capacidade de crescer junto com o projeto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stack.map((group) => (
            <div key={group.category} className={`rounded-2xl border p-6 reveal ${group.color}`}>
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <span className="text-xs font-semibold tracking-widest uppercase">{group.category}</span>
              </div>
              <div className="space-y-4">
                {group.techs.map((t) => (
                  <div key={t.name}
                    className="flex flex-col gap-0.5 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-cream text-sm font-medium">{t.name}</span>
                    <span className="text-muted text-xs">{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px
                        border border-green/10 rounded-2xl overflow-hidden reveal">
          {[
            { v: 'Veloz',     l: 'resposta ao webhook' },
            { v: 'Estável',   l: 'infraestrutura Railway' },
            { v: 'Leve',      l: 'carregamento do site' },
            { v: 'Tipado',    l: 'TypeScript end-to-end' },
          ].map((s, i) => (
            <div key={s.v}
              className={`flex flex-col items-center py-8 px-4 text-center bg-dark2
                          ${i < 3 ? 'md:border-r border-green/10' : ''}`}>
              <span className="font-display font-extrabold text-3xl text-lime mb-1">{s.v}</span>
              <span className="text-xs text-muted">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
