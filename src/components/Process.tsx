const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Compreendemos o contexto do seu negócio, os desafios reais e o resultado esperado antes de propor qualquer solução.',
  },
  {
    n: '02',
    title: 'Proposta técnica',
    desc: 'Apresentamos a arquitetura, o escopo e o investimento com total transparência. Sem surpresas ao longo do projeto.',
  },
  {
    n: '03',
    title: 'Desenvolvimento',
    desc: 'Construção iterativa com entregas parciais para validação. Você acompanha cada etapa com visibilidade total.',
  },
  {
    n: '04',
    title: 'Entrega e evolução',
    desc: 'Publicação em produção com suporte ativo. A solução é construída para crescer conforme o seu negócio avança.',
  },
]

export default function Process() {
  return (
    <section id="processo" className="relative bg-dark3" aria-labelledby="process-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
            Nossa metodologia
          </p>
          <h2
            id="process-heading"
            className="font-display font-extrabold text-cream leading-tight mb-4 reveal
                       text-[clamp(32px,4.5vw,54px)]"
          >
            Um processo claro,<br />
            <span className="gradient-text">do início ao ar</span>
          </h2>
          <p className="text-muted2 font-light leading-relaxed max-w-lg mx-auto reveal">
            Transparência em cada etapa. Você sabe exatamente o que está sendo
            desenvolvido, quando e por quê.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            className="hidden md:block absolute top-7 left-7 right-7 h-px reveal"
            aria-hidden="true"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.3) 20%, rgba(0,229,160,0.3) 80%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className="relative z-10 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Number circle */}
                <div
                  className="w-14 h-14 rounded-2xl border-2 border-green bg-dark3
                              flex items-center justify-center mb-6
                              font-display font-bold text-base text-green
                              shadow-[0_0_20px_rgba(0,229,160,0.12)]"
                  aria-hidden="true"
                >
                  {step.n}
                </div>

                {/* Content */}
                <h4 className="text-sm font-semibold text-cream mb-2 leading-snug">{step.title}</h4>
                <p className="text-xs text-muted2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
