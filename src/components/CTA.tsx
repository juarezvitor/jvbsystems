import Image from 'next/image'

const WA = 'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden" style={{background:'var(--navy)'}}>
      {/* Texture sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
        backgroundImage:'radial-gradient(circle at 20% 50%, rgba(0,196,122,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)',
      }}/>
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-20" aria-hidden="true" style={{
        backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      }}/>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-28 text-center">
        {/* Logo branca */}
        <div className="flex justify-center mb-6 reveal">
          <Image src="/logo.png" alt="JVBSystems" width={56} height={56}
            className="object-contain opacity-90 brightness-[2] saturate-0"/>
        </div>

        <p className="text-xs font-semibold tracking-widest uppercase mb-5 reveal" style={{color:'rgba(0,196,122,0.9)'}}>
          Inicie uma conversa
        </p>
        <h2 className="font-display font-extrabold leading-tight mb-5 text-white reveal"
            style={{fontSize:'clamp(32px,5vw,60px)'}}>
          Pronto para elevar<br/>
          o seu <span style={{color:'#00C47A'}}>padrão digital?</span>
        </h2>
        <p className="font-light leading-relaxed max-w-md mx-auto mb-12 reveal"
           style={{color:'rgba(255,255,255,0.65)', fontSize:16}}>
          Compartilhe o seu desafio conosco. Analisamos o cenário, propomos a
          solução mais adequada e avançamos juntos.
        </p>

        <div className="flex flex-wrap gap-4 justify-center reveal">
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{background:'var(--green)', color:'var(--navy)'}}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <path d="M9 0C4.03 0 0 4.03 0 9C0 10.65.44 12.19 1.21 13.52L.06 17.94L4.6 16.81C5.89 17.52 7.39 17.93 9 17.93C13.97 17.93 18 13.9 18 8.93C18 3.97 13.97 0 9 0ZM13.19 11.36C12.95 11.24 11.77 10.66 11.55 10.58C11.33 10.5 11.17 10.46 11.01 10.7C10.85 10.94 10.39 11.48 10.25 11.64C10.11 11.8 9.97 11.82 9.73 11.7C8.25 10.96 7.26 10.38 6.27 8.7C6.01 8.26 6.51 8.29 6.97 7.37C7.05 7.21 7.01 7.07 6.95 6.95C6.89 6.83 6.41 5.65 6.21 5.17C6.01 4.71 5.81 4.77 5.65 4.77C5.01 4.75 4.75 4.81 4.53 5.05C3.71 5.29 3.71 7.05 4.67 8.23C4.79 9.37 6.41 12.15 8.85 13.19C10.89 14.05 11.55 13.83 12.11 13.77C12.89 13.69 14.21 13.05 14.41 12.35C14.61 11.65 14.61 11.05 14.55 10.93L13.19 11.36Z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
          <a href="mailto:juarez10vitor@outlook.com.br"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)'}}>
            Enviar e-mail
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-12 reveal">
          {['✓ Resposta rápida','✓ Sem compromisso inicial','✓ Proposta personalizada'].map(t => (
            <span key={t} className="text-xs" style={{color:'rgba(255,255,255,0.4)'}}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
