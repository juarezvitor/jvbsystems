const features = [
  { icon: '⚡', title: 'Performance elevada',     desc: 'Core Web Vitals e carregamento rápido em qualquer dispositivo.' },
  { icon: '📱', title: 'Mobile-first',             desc: 'Navegação em dispositivos móveis tratada como prioridade, não como adaptação.' },
  { icon: '🎨', title: 'Design orientado à ação',  desc: 'Cada elemento visual serve a um propósito: guiar o visitante ao próximo passo.' },
  { icon: '🔍', title: 'SEO estrutural',            desc: 'Metadados, semântica, dados estruturados e velocidade — o que o Google valoriza.' },
  { icon: '🔗', title: 'Integrações estratégicas', desc: 'WhatsApp, CRMs, analytics, pixels de remarketing e pagamentos integrados.' },
  { icon: '🛡️', title: 'Segurança de ponta',       desc: 'HTTPS, security headers e proteção configurados desde o primeiro deploy.' },
]

const deliverables = [
  { label: 'Landing page',       desc: 'Página única focada em conversão',        badge: 'bg-green/10 text-green border-green/20',    time: 'Prazo ágil' },
  { label: 'Site institucional', desc: 'Múltiplas páginas, blog e SEO completo',  badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', time: 'Prazo padrão' },
  { label: 'E-commerce',         desc: 'Loja completa com pagamentos integrados', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20', time: 'Prazo estendido' },
  { label: 'Sistema web',        desc: 'Dashboard, painel admin, área do cliente', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', time: 'Sob consulta' },
]

export default function WebDev() {
  return (
    <section className="relative bg-dark2" aria-labelledby="webdev-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Desenvolvimento Web
          </p>
          <h2
            id="webdev-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Presença digital que<br />
            <span className="gradient-text">trabalha por você</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Não desenvolvemos sites para existir. Desenvolvemos plataformas digitais
            que comunicam autoridade e transformam visitantes em clientes.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 rounded-2xl bg-dark3 border border-white/[0.07]
                         card-hover reveal"
            >
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{f.icon}</span>
              <div>
                <h4 className="text-sm font-medium text-cream mb-1.5 leading-snug">{f.title}</h4>
                <p className="text-xs text-muted2 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables table */}
        <div className="reveal">
          <h3 className="font-display font-bold text-xl text-cream text-center mb-8">
            O que desenvolvemos
          </h3>
          <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
            <div
              className="grid px-6 py-3 text-[11px] font-medium text-muted uppercase tracking-widest
                         border-b border-white/[0.07]"
              style={{ gridTemplateColumns: '1fr 1.5fr 1fr' }}
            >
              <span>Modalidade</span>
              <span>Escopo</span>
              <span>Prazo</span>
            </div>
            {deliverables.map((d, i) => (
              <div
                key={d.label}
                className={`grid px-6 py-5 items-center text-sm
                            hover:bg-dark3 transition-colors duration-150
                            ${i < deliverables.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
                style={{ gridTemplateColumns: '1fr 1.5fr 1fr' }}
              >
                <span className="font-medium text-cream">{d.label}</span>
                <span className="text-muted2 text-xs pr-4">{d.desc}</span>
                <span>
                  <span className={`inline-flex text-[11px] font-medium px-3 py-1 rounded-full border ${d.badge}`}>
                    {d.time}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
