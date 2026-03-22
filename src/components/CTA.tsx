export default function CTA() {
  const waLink =
    "https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.";

  return (
    <section
      id="contato"
      className="relative bg-dark2 border-t border-green/10 py-32 px-6 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,160,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Inicie uma conversa
        </p>
        <h2
          className="font-display font-extrabold text-cream leading-tight mb-5 reveal
                       text-[clamp(34px,5vw,64px)]"
        >
          Pronto para elevar
          <br />o seu <span className="text-green">padrão digital?</span>
        </h2>
        <p className="text-muted font-light leading-relaxed max-w-md mx-auto mb-12 reveal">
          Compartilhe o seu desafio conosco. Analisamos o cenário, propomos a
          solução mais adequada e avançamos juntos.
        </p>
        <div className="flex flex-wrap gap-4 justify-center reveal">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-lg
                       bg-green text-black text-base font-medium
                       hover:bg-lime transition-all duration-200 hover:-translate-y-0.5"
          >
            Falar pelo WhatsApp →
          </a>
          <a
            href="mailto:juarez10vitor@outlook.com.br"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-lg
                       bg-transparent text-cream text-base border border-white/15
                       hover:border-green transition-all duration-200 hover:-translate-y-0.5"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
