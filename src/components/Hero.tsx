import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center
                        text-center px-6 pt-36 pb-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(0,229,160,0.07) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 70%, rgba(186,255,71,0.04) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none hero-grid" />

      <div className="relative z-10 inline-flex items-center gap-2 mb-9
                      text-green text-xs font-medium tracking-widest uppercase
                      bg-green/8 border border-green/20 px-4 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
        Automações &amp; Desenvolvimento Web
      </div>

      <h1 className="relative z-10 font-display font-extrabold leading-none tracking-tight mb-7
                     text-[clamp(52px,9vw,100px)] text-cream">
        Tecnologia que
        <em className="not-italic text-green"> transforma</em>
        <br />
        o seu <span className="text-lime">negócio</span>
      </h1>

      <p className="relative z-10 font-light text-muted max-w-lg leading-relaxed mb-12
                    text-[clamp(15px,2vw,18px)]">
        Desenvolvemos sistemas, automações e experiências digitais que eliminam
        trabalho manual, fortalecem sua presença e geram crescimento real e sustentável.
      </p>

      <div className="relative z-10 flex flex-wrap gap-4 justify-center">
        <Link href="#contato"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-lg
                     bg-green text-black text-base font-medium
                     hover:bg-lime transition-all duration-200 hover:-translate-y-0.5">
          Solicitar proposta →
        </Link>
        <Link href="#servicos"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-lg
                     bg-transparent text-cream text-base border border-white/15
                     hover:border-green transition-all duration-200 hover:-translate-y-0.5">
          Conhecer soluções
        </Link>
      </div>

      <div className="relative z-10 flex mt-20 w-full max-w-lg
                      border border-green/10 rounded-xl overflow-hidden">
        {[
          { v: 'Ágil',       l: 'do briefing ao primeiro resultado' },
          { v: 'Sob medida', l: 'cada solução é única' },
          { v: 'Contínuo',   l: 'suporte após a entrega' },
        ].map((s, i) => (
          <div key={s.v}
            className={`flex-1 flex flex-col gap-1 items-center py-6 px-4 text-center
                        ${i < 2 ? 'border-r border-green/10' : ''}`}>
            <span className="font-display font-extrabold text-2xl text-lime">{s.v}</span>
            <span className="text-xs text-muted">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
