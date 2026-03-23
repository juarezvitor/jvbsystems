const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.4 7.3H18L13.5 10.7L15.3 16L10 12.7L4.7 16L6.5 10.7L2 7.3H7.6L10 2Z"
              stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Execução sem burocracia',
    desc: 'Do alinhamento à primeira entrega com agilidade. Sem processos desnecessários ou esperas indefinidas.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10L9.2 12.2L13.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Totalmente personalizado',
    desc: 'Nenhuma solução é reaproveitada de outro cliente. Cada projeto é desenvolvido do zero para o seu contexto.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10C3 6.1 6.1 3 10 3C13.9 3 17 6.1 17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 10C17 13.9 13.9 17 10 17C6.1 17 3 13.9 3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M10 7V10.5L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Parceria de longo prazo',
    desc: 'A entrega é o começo, não o fim. Acompanhamos a evolução do produto e ajustamos conforme o negócio cresce.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 14L8 10L11 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 8H15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Orientado a resultado',
    desc: 'Cada decisão técnica tem uma justificativa de negócio. Desenvolvemos para resolver problemas, não para impressionar.',
  },
]

export default function Why() {
  return (
    <section className="relative bg-dark2" aria-labelledby="why-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Por que a JVBSystems
          </p>
          <h2
            id="why-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Comprometidos com<br />
            <span className="gradient-text">o que realmente importa</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Não entregamos software. Entregamos transformação real no dia a dia
            do seu negócio — com responsabilidade e visão de longo prazo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-dark3 border border-white/[0.07] card-hover reveal"
            >
              <div
                className="w-10 h-10 rounded-xl bg-green/[0.08] border border-green/15
                            flex items-center justify-center text-green mb-5"
              >
                {item.icon}
              </div>
              <h4 className="text-sm font-medium text-cream mb-2 leading-snug">{item.title}</h4>
              <p className="text-xs text-muted2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
