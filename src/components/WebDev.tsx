// WebDev.tsx
const features = [
  { icon:'⚡', title:'Performance elevada',    desc:'Core Web Vitals e carregamento rápido em qualquer dispositivo.' },
  { icon:'📱', title:'Mobile-first',            desc:'Navegação em dispositivos móveis como prioridade, não adaptação.' },
  { icon:'🎨', title:'Design orientado à ação', desc:'Cada elemento visual guia o visitante ao próximo passo com intenção.' },
  { icon:'🔍', title:'SEO estrutural',           desc:'Metadados, semântica, dados estruturados — o que o Google valoriza.' },
  { icon:'🔗', title:'Integrações estratégicas', desc:'WhatsApp, CRMs, analytics, pixels e pagamentos integrados.' },
  { icon:'🛡️', title:'Segurança de ponta',       desc:'HTTPS e security headers configurados desde o primeiro deploy.' },
]
const deliverables = [
  { label:'Landing page',       desc:'Página única focada em conversão',           badgeColor:'var(--green)',      badgeBg:'var(--green-light)', time:'Prazo ágil' },
  { label:'Site institucional', desc:'Múltiplas páginas, blog e SEO completo',     badgeColor:'#1A3A5C',           badgeBg:'rgba(15,39,68,0.08)', time:'Prazo padrão' },
  { label:'E-commerce',         desc:'Loja completa com pagamentos integrados',    badgeColor:'#7C3AED',           badgeBg:'rgba(124,58,237,0.08)', time:'Prazo estendido' },
  { label:'Sistema web',        desc:'Dashboard, painel admin, área do cliente',   badgeColor:'#B45309',           badgeBg:'rgba(180,83,9,0.08)', time:'Sob consulta' },
]

export default function WebDev() {
  return (
    <section className="relative" style={{background:'var(--bg-base)'}}>
      <div className="section-divider"/>
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4 reveal" style={{color:'var(--green)'}}>Desenvolvimento Web</p>
          <h2 className="font-display font-extrabold leading-tight mb-4 reveal" style={{color:'var(--text-primary)', fontSize:'clamp(30px,4.5vw,52px)'}}>
            Presença digital que<br/><span className="gradient-text">trabalha por você</span>
          </h2>
          <p className="font-light leading-relaxed max-w-lg mx-auto reveal" style={{color:'var(--text-secondary)', fontSize:16}}>
            Não desenvolvemos sites para existir. Desenvolvemos plataformas que comunicam autoridade e transformam visitantes em clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {features.map(f => (
            <div key={f.title} className="flex gap-4 p-6 rounded-2xl card-hover reveal"
                 style={{background:'var(--bg-card)', border:'1px solid var(--border)'}}>
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{f.icon}</span>
              <div>
                <h4 className="text-sm font-medium mb-1.5 leading-snug" style={{color:'var(--text-primary)'}}>{f.title}</h4>
                <p className="text-xs leading-relaxed" style={{color:'var(--text-secondary)'}}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="font-display font-bold text-xl text-center mb-8" style={{color:'var(--text-primary)'}}>O que desenvolvemos</h3>
          <div className="rounded-2xl overflow-hidden" style={{border:'1px solid var(--border-md)'}}>
            <div className="grid px-6 py-3 text-[11px] font-semibold uppercase tracking-widest"
                 style={{gridTemplateColumns:'1fr 1.6fr 1fr', background:'var(--bg-inset)', color:'var(--text-muted)', borderBottom:'1px solid var(--border-md)'}}>
              <span>Modalidade</span><span>Escopo</span><span>Prazo</span>
            </div>
            {deliverables.map((d, i) => (
              <div key={d.label} className="grid px-6 py-5 items-center text-sm transition-colors duration-150"
                   style={{gridTemplateColumns:'1fr 1.6fr 1fr', background:'var(--bg-card)',
                           borderBottom: i<deliverables.length-1 ? '1px solid var(--border)' : 'none'}}
                   onMouseEnter={e=>(e.currentTarget.style.background='var(--bg-surface)')}
                   onMouseLeave={e=>(e.currentTarget.style.background='var(--bg-card)')}>
                <span className="font-medium" style={{color:'var(--text-primary)'}}>{d.label}</span>
                <span className="text-xs pr-4" style={{color:'var(--text-secondary)'}}>{d.desc}</span>
                <span>
                  <span className="inline-flex text-[11px] font-medium px-3 py-1 rounded-full"
                        style={{background:d.badgeBg, color:d.badgeColor, border:`1px solid ${d.badgeColor}30`}}>
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
