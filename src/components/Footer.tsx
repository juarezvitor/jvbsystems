const WA_LINK =
  'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'

const navLinks = [
  { href: '#servicos',   label: 'Soluções' },
  { href: '#automacao',  label: 'Automação' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#processo',   label: 'Processo' },
  { href: '#contato',    label: 'Contato' },
]

const contactLinks = [
  { href: WA_LINK,                           label: 'WhatsApp', external: true },
  { href: 'mailto:juarez10vitor@outlook.com.br', label: 'E-mail', external: false },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-14">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-green flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="#06080A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-display font-bold text-lg text-cream tracking-tight">
                JVB<span className="text-green">Systems</span>
              </span>
            </div>
            <p className="text-xs text-muted2 leading-relaxed">
              Automações &amp; Desenvolvimento Web para negócios que querem crescer com propósito e tecnologia de alto padrão.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            <div>
              <p className="text-[11px] font-semibold text-muted uppercase tracking-widest mb-4">Navegação</p>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted2 hover:text-cream transition-colors duration-150"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-muted uppercase tracking-widest mb-4">Contato</p>
              <ul className="space-y-2.5">
                {contactLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="text-sm text-muted2 hover:text-cream transition-colors duration-150"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {year} JVBSystems. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted/60">
            Tecnologia desenvolvida com propósito, entregue com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  )
}
