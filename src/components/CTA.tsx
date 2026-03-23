const WA_LINK =
  'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'

export default function CTA() {
  return (
    <section
      id="contato"
      className="relative bg-dark overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(0,229,160,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-32 text-center">

        <p className="text-green text-xs font-medium tracking-widest uppercase mb-5 reveal">
          Inicie uma conversa
        </p>

        <h2
          id="cta-heading"
          className="font-display font-extrabold text-cream leading-tight mb-5 reveal
                     text-[clamp(36px,5vw,64px)]"
        >
          Pronto para elevar<br />
          o seu <span className="gradient-text">padrão digital?</span>
        </h2>

        <p className="text-muted2 font-light leading-relaxed max-w-md mx-auto mb-12 reveal">
          Compartilhe o seu desafio conosco. Analisamos o cenário, propomos a
          solução mais adequada e avançamos juntos.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center reveal">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl
                       bg-green text-black text-sm font-medium
                       hover:bg-lime transition-all duration-200 hover:-translate-y-0.5
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <path d="M9 0C4.03 0 0 4.03 0 9C0 10.65 0.44 12.19 1.21 13.52L0.06 17.94L4.6 16.81C5.89 17.52 7.39 17.93 9 17.93C13.97 17.93 18 13.9 18 8.93C18 3.97 13.97 0 9 0ZM9 16.43C7.52 16.43 6.13 16.03 4.95 15.33L4.65 15.16L2.01 15.84L2.71 13.28L2.51 12.97C1.74 11.75 1.3 10.31 1.3 8.77C1.3 4.5 4.73 1.07 9 1.07C13.27 1.07 16.7 4.5 16.7 8.77C16.7 13.04 13.27 16.43 9 16.43ZM13.19 11.36C12.95 11.24 11.77 10.66 11.55 10.58C11.33 10.5 11.17 10.46 11.01 10.7C10.85 10.94 10.39 11.48 10.25 11.64C10.11 11.8 9.97 11.82 9.73 11.7C8.25 10.96 7.26 10.38 6.27 8.7C6.01 8.26 6.51 8.29 6.97 7.37C7.05 7.21 7.01 7.07 6.95 6.95C6.89 6.83 6.41 5.65 6.21 5.17C6.01 4.71 5.81 4.77 5.65 4.77C5.49 4.77 5.33 4.75 5.17 4.75C5.01 4.75 4.75 4.81 4.53 5.05C4.31 5.29 3.71 5.87 3.71 7.05C3.71 8.23 4.55 9.37 4.67 9.53C4.79 9.69 6.41 12.15 8.85 13.19C10.89 14.05 11.55 13.83 12.11 13.77C12.89 13.69 14.21 13.05 14.41 12.35C14.61 11.65 14.61 11.05 14.55 10.93C14.49 10.81 14.33 10.75 14.09 10.63L13.19 11.36Z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
          <a
            href="mailto:juarez10vitor@outlook.com.br"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl
                       bg-transparent text-cream text-sm border border-white/12
                       hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-0.5
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Enviar e-mail
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-12 reveal">
          {[
            '✓ Resposta rápida',
            '✓ Sem compromisso inicial',
            '✓ Proposta personalizada',
          ].map((item) => (
            <span key={item} className="text-xs text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
