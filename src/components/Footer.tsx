import Image from 'next/image'
import Link from 'next/link'

const WA = 'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'
const navLinks = [
  { href:'#servicos', label:'Soluções' },
  { href:'#automacao', label:'Automação' },
  { href:'#tecnologia', label:'Tecnologia' },
  { href:'#processo', label:'Processo' },
  { href:'#contato', label:'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative" style={{background:'var(--bg-surface)', borderTop:'1px solid var(--border-md)'}}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="JVBSystems" width={34} height={34} className="object-contain"/>
              <span className="font-display font-bold text-base tracking-tight" style={{color:'var(--text-primary)'}}>
                JVB<span style={{color:'var(--green)'}}>Systems</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{color:'var(--text-muted)'}}>
              Automações &amp; Desenvolvimento Web para negócios que querem crescer com propósito e tecnologia de alto padrão.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{color:'var(--text-muted)'}}>Navegação</p>
              <ul className="space-y-2.5">
                {navLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm transition-colors duration-150"
                          style={{color:'var(--text-secondary)'}}
                          onMouseEnter={e=>(e.currentTarget.style.color='var(--text-primary)')}
                          onMouseLeave={e=>(e.currentTarget.style.color='var(--text-secondary)')}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{color:'var(--text-muted)'}}>Contato</p>
              <ul className="space-y-2.5">
                <li><a href={WA} target="_blank" rel="noreferrer" className="text-sm" style={{color:'var(--text-secondary)'}}
                       onMouseEnter={e=>(e.currentTarget.style.color='var(--text-primary)')}
                       onMouseLeave={e=>(e.currentTarget.style.color='var(--text-secondary)')}>WhatsApp</a></li>
                <li><a href="mailto:juarez10vitor@outlook.com.br" className="text-sm" style={{color:'var(--text-secondary)'}}
                       onMouseEnter={e=>(e.currentTarget.style.color='var(--text-primary)')}
                       onMouseLeave={e=>(e.currentTarget.style.color='var(--text-secondary)')}>E-mail</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
             style={{borderTop:'1px solid var(--border)'}}>
          <p className="text-xs" style={{color:'var(--text-muted)'}}>© {year} JVBSystems. Todos os direitos reservados.</p>
          <p className="text-xs" style={{color:'rgba(107,130,120,0.6)'}}>Tecnologia desenvolvida com propósito, entregue com responsabilidade.</p>
        </div>
      </div>
    </footer>
  )
}
