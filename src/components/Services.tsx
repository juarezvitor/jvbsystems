const services = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M16 2H6C4.9 2 4 2.9 4 4V18C4 19.1 4.9 20 6 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 7H7M13 7H11M9 11H7M13 11H11M9 15H7M13 15H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Automação via WhatsApp',
    desc: 'Transformamos o WhatsApp do seu negócio em um canal de atendimento inteligente — capaz de agendar, confirmar, lembrar e responder clientes de forma completamente autônoma, a qualquer hora.',
    tags: ['WhatsApp Business API', 'Agendamentos', 'Google Calendar', 'Lembretes automáticos'],
    accent: 'from-green/10 to-transparent',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21H14M11 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 8L8.5 10.5L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Desenvolvimento Web',
    desc: 'Criamos presença digital de alto impacto — sites institucionais, landing pages e plataformas que comunicam valor, geram confiança e convertem visitantes em clientes reais.',
    tags: ['Landing pages', 'Sites institucionais', 'E-commerce', 'SEO técnico'],
    accent: 'from-blue-500/8 to-transparent',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 6H18M4 11H18M4 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19.5 18.5L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Sistemas sob medida',
    desc: 'Desenvolvemos sistemas personalizados que automatizam processos, centralizam informações e eliminam retrabalho — integrando as ferramentas que você já usa ao fluxo que você precisa.',
    tags: ['Painéis administrativos', 'Integrações via API', 'Automação de processos', 'Dashboards'],
    accent: 'from-purple-500/8 to-transparent',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative bg-dark" aria-labelledby="services-heading">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Nossas soluções
          </p>
          <h2
            id="services-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Soluções construídas para<br />
            <span className="gradient-text">gerar resultado</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Cada projeto é tratado como único. Nenhum template, nenhum atalho —
            apenas tecnologia desenvolvida para o desafio específico do seu negócio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="group relative bg-dark2 border border-white/[0.07] rounded-2xl p-8
                         card-hover overflow-hidden reveal"
            >
              {/* Accent gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${svc.accent}
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                aria-hidden="true"
              />

              {/* Top line accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px bg-green
                             scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden="true"
              />

              {/* Number + icon */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <span className="font-display text-xs font-bold text-muted tracking-widest">
                  {svc.num}
                </span>
                <span className="text-green opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  {svc.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-display font-bold text-xl text-cream mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted2 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
