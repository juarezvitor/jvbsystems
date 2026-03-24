'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '#servicos',   label: 'Soluções' },
  { href: '#automacao',  label: 'Automação' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#processo',   label: 'Processo' },
]
const WA = 'https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled ? 'rgba(240,242,239,0.93)' : 'transparent'
  const navBorder = scrolled ? '1px solid rgba(15,39,68,0.10)' : '1px solid transparent'

  return (
    <header style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      background: navBg,
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: navBorder,
      padding: scrolled ? '8px 0' : '16px 0',
      transition: 'all 0.3s ease',
    }}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2.5 group" aria-label="JVBSystems">
          <Image src="/logo.png" alt="JVBSystems" width={38} height={38}
            className="object-contain group-hover:scale-105 transition-transform duration-200" priority />
          <span className="font-display font-bold text-[17px] tracking-tight" style={{color:'var(--text-primary)'}}>
            JVB<span style={{color:'var(--green)'}}>Systems</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>)}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:juarez10vitor@outlook.com.br" className="text-sm"
            style={{color:'var(--text-muted)'}}
            onMouseEnter={e=>(e.currentTarget.style.color='var(--text-primary)')}
            onMouseLeave={e=>(e.currentTarget.style.color='var(--text-muted)')}>
            E-mail
          </a>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:opacity-90"
            style={{background:'var(--navy)'}}>
            Fale conosco
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <button className="md:hidden p-2 -mr-2 flex flex-col gap-1.5"
          onClick={() => setOpen(v => !v)} aria-label="Menu">
          {[0,1,2].map(i => (
            <span key={i} className="block w-5 h-0.5 rounded transition-all duration-200"
              style={{
                background: 'var(--text-primary)',
                transform: open ? (i===0?'rotate(45deg) translateY(8px)':i===2?'rotate(-45deg) translateY(-8px)':'none') : 'none',
                opacity: open && i===1 ? 0 : 1,
              }} />
          ))}
        </button>
      </nav>

      <div id="mobile-menu" className={open ? 'open' : ''}>
        <div className="max-w-6xl mx-auto px-6 pb-5 pt-4 flex flex-col gap-1"
          style={{borderTop:'1px solid var(--border)', background:'rgba(240,242,239,0.97)'}}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-2.5 text-sm" style={{color:'var(--text-secondary)'}}>{l.label}</Link>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center py-3 rounded-xl text-sm font-medium text-white"
            style={{background:'var(--navy)'}}>
            Fale conosco →
          </a>
        </div>
      </div>
    </header>
  )
}
