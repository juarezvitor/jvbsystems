const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Compreendemos o contexto do seu negócio, os desafios reais e o resultado esperado antes de propor qualquer solução.",
  },
  {
    n: "02",
    title: "Proposta técnica",
    desc: "Apresentamos a arquitetura, o escopo e o investimento com total transparência. Sem surpresas ao longo do projeto.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Construção iterativa com entregas parciais para validação. Você acompanha cada etapa com visibilidade total.",
  },
  {
    n: "04",
    title: "Entrega e evolução",
    desc: "Publicação em produção com suporte ativo. A solução é construída para crescer conforme o negócio avança.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
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
            Nossa metodologia
          </p>
          <h2
            className="font-display font-bold leading-tight mb-4 reveal"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(30px,4.5vw,52px)",
            }}
          >
            Um processo claro,
            <br />
            <span className="gradient-text">do início ao ar</span>
          </h2>
          <p
            className="font-light leading-relaxed max-w-lg mx-auto reveal"
            style={{ color: "var(--text-secondary)", fontSize: 16 }}
          >
            Transparência em cada etapa. Você sabe exatamente o que está sendo
            desenvolvido, quando e por quê.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Linha conectora */}
          <div
            className="hidden md:block absolute top-[22px] left-7 right-7 h-px reveal"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,196,122,0.4) 20%, rgba(0,196,122,0.4) 80%, transparent)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.n}
              className="relative z-10 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 font-display font-bold text-sm"
                style={{
                  background: "var(--green-light)",
                  border: "1.5px solid var(--green)",
                  color: "var(--green-dark)",
                }}
              >
                {step.n}
              </div>
              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {step.title}
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
