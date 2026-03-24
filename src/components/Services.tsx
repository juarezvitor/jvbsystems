const services = [
  {
    num:'01',
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="1" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M6 6H9M11 6H14M6 10H9M11 10H14M6 14H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title:'Automação via WhatsApp',
    desc:'Transformamos o WhatsApp do seu negócio em um canal inteligente — capaz de agendar, confirmar, lembrar e responder clientes de forma autônoma, a qualquer hora.',
    tags:['WhatsApp Business API','Agendamentos','Google Calendar','Lembretes automáticos'],
    accentBg:'rgba(0,196,122,0.06)',
  },
  {
    num:'02',
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="1" y="3" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M7 19H13M10 16V19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title:'Desenvolvimento Web',
    desc:'Sites institucionais, landing pages e plataformas que comunicam valor, geram confiança e convertem visitantes em clientes reais com SEO técnico e performance elevada.',
    tags:['Landing pages','Sites institucionais','E-commerce','SEO técnico'],
    accentBg:'rgba(15,39,68,0.05)',
  },
  {
    num:'03',
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 6H16M4 10H12M4 14H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="15" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.4"/><path d="M17.5 16.5L19 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title:'Sistemas sob medida',
    desc:'Sistemas personalizados que automatizam processos, centralizam informações e eliminam retrabalho — integrando as ferramentas que você já usa ao fluxo que você precisa.',
    tags:['Painéis administrativos','Integrações via API','Automação de processos','Dashboards'],
    accentBg:'rgba(0,196,122,0.04)',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative" style={{background:'var(--bg-surface)'}}>
      <div className="section-divider"/>
      <div className="max-w-6xl mx-auto px-6 py-28">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4 reveal" style={{color:'var(--green)'}}>
            Nossas soluções
          </p>
          <h2 className="font-display font-extrabold leading-tight mb-4 reveal"
              style={{color:'var(--text-primary)', fontSize:'clamp(30px,4.5vw,52px)'}}>
            Soluções construídas para<br/>
            <span className="gradient-text">gerar resultado</span>
          </h2>
          <p className="font-light leading-relaxed max-w-lg mx-auto reveal"
             style={{color:'var(--text-secondary)', fontSize:16}}>
            Cada projeto é tratado como único. Nenhum template, nenhum atalho —
            tecnologia desenvolvida para o desafio específico do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc) => (
            <article key={svc.title}
              className="group relative rounded-2xl p-8 card-hover overflow-hidden reveal"
              style={{background:'var(--bg-card)', border:'1px solid var(--border-md)'}}>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                   style={{background:'var(--green)'}} aria-hidden="true"/>

              {/* Subtle accent glow */}
              <div className="absolute top-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{background:`linear-gradient(to bottom, ${svc.accentBg}, transparent)`}} aria-hidden="true"/>

              <div className="relative z-10 flex items-center justify-between mb-6">
                <span className="font-display text-xs font-bold tracking-widest" style={{color:'var(--text-muted)'}}>
                  {svc.num}
                </span>
                <span style={{color:'var(--green)'}}>{svc.icon}</span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-bold text-xl mb-3 leading-snug" style={{color:'var(--text-primary)'}}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{color:'var(--text-secondary)'}}>
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
