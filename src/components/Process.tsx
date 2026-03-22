const steps = [
  { n: '01', title: 'Diagnóstico',         desc: 'Compreendemos o contexto do seu negócio, os desafios reais e o resultado esperado antes de propor qualquer solução.' },
  { n: '02', title: 'Proposta técnica',    desc: 'Apresentamos a arquitetura, o escopo e o investimento com total transparência. Sem surpresas ao longo do projeto.' },
  { n: '03', title: 'Desenvolvimento',     desc: 'Construção iterativa com entregas parciais para validação. Você acompanha cada etapa com visibilidade total.' },
  { n: '04', title: 'Entrega e evolução',  desc: 'Publicação em produção com suporte ativo. A solução é construída para crescer conforme o seu negócio avança.' },
]

export default function Process() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Nossa metodologia
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Um processo claro,<br /><span className="text-green">do início ao ar</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-16 reveal">
          Transparência em cada etapa. Você sabe exatamente o que está sendo
          desenvolvido, quando e por quê.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-7 right-7 h-px
                          bg-gradient-to-r from-transparent via-green2 to-transparent" />
          {steps.map((step) => (
            <div key={step.n} className="relative z-10 reveal">
              <div className="w-14 h-14 rounded-full bg-dark2 border-2 border-green
                              flex items-center justify-center
                              font-display font-bold text-lg text-green mb-5
                              transition-colors">
                {step.n}
              </div>
              <h4 className="text-sm font-medium text-cream mb-2">{step.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
