import Link from 'next/link'

const WA_LINK =
  'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
                 text-center px-6 pt-32 pb-24 overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true"/>

      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 20%, rgba(0,229,160,0.09) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 40% 35% at 80% 75%, rgba(200,255,71,0.05) 0%, transparent 55%)',
        }}
      />

      {/* Badge */}
      <div
        className="relative z-10 inline-flex items-center gap-2 mb-8
                   text-green text-xs font-medium tracking-widest uppercase
                   bg-green/[0.07] border border-green/20 px-4 py-2 rounded-full
                   reveal"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot flex-shrink-0" aria-hidden="true"/>
        Automações &amp; Desenvolvimento Web
      </div>

      {/* Headline */}
      <h1
        className="relative z-10 font-display font-extrabold leading-[1.02] tracking-tight
                   mb-6 text-cream reveal
                   text-[clamp(48px,8.5vw,96px)]"
      >
        Tecnologia que
        <br />
        <span className="gradient-text">transforma</span>
        <br />
        o seu negócio
      </h1>

      {/* Subtext */}
      <p
        className="relative z-10 font-light text-muted2 max-w-[520px] leading-relaxed mb-10
                   text-[clamp(15px,1.8vw,18px)] reveal"
      >
        Desenvolvemos sistemas, automações e experiências digitais que eliminam
        trabalho manual, fortalecem sua presença e geram crescimento real e sustentável.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap gap-3 justify-center mb-20 reveal">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
                     bg-green text-black text-sm font-medium
                     hover:bg-lime transition-all duration-200 hover:-translate-y-0.5
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Solicitar proposta
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <Link
          href="#servicos"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
                     bg-transparent text-cream text-sm border border-white/12
                     hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-0.5
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Conhecer soluções
        </Link>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 stat-bar flex w-full max-w-md reveal">
        {[
          { v: 'Ágil',       l: 'do briefing à entrega' },
          { v: 'Sob medida', l: 'cada solução é única' },
          { v: 'Contínuo',   l: 'suporte após o go-live' },
        ].map((s, i) => (
          <div
            key={s.v}
            className="flex-1 flex flex-col items-center py-5 px-3 text-center"
          >
            <span className="font-display font-bold text-xl text-lime mb-0.5">{s.v}</span>
            <span className="text-[11px] text-muted leading-tight">{s.l}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-40"
           aria-hidden="true">
        <span className="text-[10px] font-medium tracking-widest uppercase text-muted">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="1" y="1" width="14" height="18" rx="7" stroke="currentColor" strokeWidth="1.2" className="text-muted"/>
          <circle cx="8" cy="7" r="2" fill="currentColor" className="text-green"
            style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }}/>
        </svg>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%,100%{transform:translateY(0);opacity:1}
          60%{transform:translateY(5px);opacity:0.4}
        }
      `}</style>
    </section>
  )
}
