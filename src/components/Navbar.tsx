'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '#servicos',   label: 'Soluções' },
  { href: '#automacao',  label: 'Automação' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#processo',   label: 'Processo' },
]

const WA_LINK =
  'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.07] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="JVBSystems - Home">
          {/* Icon mark */}
          <span className="w-7 h-7 rounded-lg bg-green flex items-center justify-center flex-shrink-0
                           group-hover:bg-lime transition-colors duration-200">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7 L5.5 10.5 L12 3.5" stroke="#06080A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-cream">
            JVB<span className="text-green">Systems</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:juarez10vitor@outlook.com.br"
            className="text-sm text-muted2 hover:text-cream transition-colors duration-200"
          >
            E-mail
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg
                       bg-green text-black text-sm font-medium
                       hover:bg-lime transition-all duration-200 hover:-translate-y-px"
          >
            Fale conosco
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-cream rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-cream rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-cream rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={open ? 'open' : ''} aria-hidden={!open}>
        <div className="max-w-6xl mx-auto px-6 pb-5 pt-3 flex flex-col gap-1
                        border-t border-white/[0.07] bg-black/95 backdrop-blur-xl">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-muted2 hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 py-3 rounded-lg
                       bg-green text-black text-sm font-medium"
          >
            Fale conosco →
          </a>
        </div>
      </div>
    </header>
  )
}
