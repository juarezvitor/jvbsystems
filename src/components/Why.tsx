const items = [
  { icon: '⚡', title: 'Execução sem burocracia',   desc: 'Do alinhamento à primeira entrega com agilidade. Sem processos desnecessários ou esperas indefinidas.' },
  { icon: '🎯', title: 'Totalmente personalizado',   desc: 'Nenhuma solução é reaproveitada de outro cliente. Cada projeto é desenvolvido do zero para o seu contexto.' },
  { icon: '🔧', title: 'Parceria de longo prazo',    desc: 'A entrega é o começo, não o fim. Acompanhamos a evolução do produto e ajustamos conforme o negócio cresce.' },
  { icon: '📈', title: 'Orientado a resultado',      desc: 'Cada decisão técnica tem uma justificativa de negócio. Desenvolvemos para resolver problemas, não para impressionar.' },
]

export default function Why() {
  return (
    <section className="bg-dark2 border-t border-b border-green/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Por que a JVBSystems
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Comprometidos com<br /><span className="text-green">o que realmente importa</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-14 reveal">
          Não entregamos software. Entregamos transformação real no dia a dia
          do seu negócio — com responsabilidade e visão de longo prazo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title}
              className="p-7 rounded-xl bg-dark3 border border-green/10
                         hover:-translate-y-1 hover:border-green/25 transition-all duration-200 reveal">
              <div className="w-10 h-10 rounded-lg bg-green/10 border border-green/20
                              flex items-center justify-center text-lg mb-4">
                {item.icon}
              </div>
              <h4 className="text-sm font-medium text-cream mb-2">{item.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
