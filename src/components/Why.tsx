const items = [
  { icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L10.8 6.3H15.5L11.7 8.9L13.2 13.2L9 10.6L4.8 13.2L6.3 8.9L2.5 6.3H7.2L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>, title:'Execução sem burocracia', desc:'Do alinhamento à primeira entrega com agilidade. Sem processos desnecessários.' },
  { icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3"/><path d="M6 9L8.2 11.2L12.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>, title:'Totalmente personalizado', desc:'Nenhuma solução reaproveitada. Cada projeto desenvolvido do zero para o seu contexto.' },
  { icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.5 9C2.5 5.4 5.4 2.5 9 2.5C12.6 2.5 15.5 5.4 15.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M15.5 9C15.5 12.6 12.6 15.5 9 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.5 1.5"/><path d="M9 6V9.5L11 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>, title:'Parceria de longo prazo', desc:'A entrega é o começo, não o fim. Suporte e evolução contínuos conforme o negócio cresce.' },
  { icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 12.5L7 9L9.5 11.5L13.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.5 7H13.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, title:'Orientado a resultado', desc:'Cada decisão técnica tem justificativa de negócio. Desenvolvemos para resolver problemas.' },
]

export default function Why() {
  return (
    <section className="relative" style={{background:'var(--bg-base)'}}>
      <div className="section-divider"/>
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4 reveal" style={{color:'var(--green)'}}>Por que a JVBSystems</p>
          <h2 className="font-display font-extrabold leading-tight mb-4 reveal" style={{color:'var(--text-primary)', fontSize:'clamp(30px,4.5vw,52px)'}}>
            Comprometidos com<br/><span className="gradient-text">o que realmente importa</span>
          </h2>
          <p className="font-light leading-relaxed max-w-lg mx-auto reveal" style={{color:'var(--text-secondary)', fontSize:16}}>
            Não entregamos software. Entregamos transformação real no dia a dia do seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(item => (
            <div key={item.title} className="p-7 rounded-2xl card-hover reveal"
                 style={{background:'var(--bg-card)', border:'1px solid var(--border-md)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                   style={{background:'var(--green-light)', border:'1px solid rgba(0,196,122,0.25)', color:'var(--green-dark)'}}>
                {item.icon}
              </div>
              <h4 className="text-sm font-semibold mb-2 leading-snug" style={{color:'var(--text-primary)'}}>{item.title}</h4>
              <p className="text-xs leading-relaxed" style={{color:'var(--text-secondary)'}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
