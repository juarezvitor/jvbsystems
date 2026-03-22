const features = [
  { icon: '⚡', title: 'Performance elevada',      desc: 'Sites construídos com as melhores práticas de otimização. Core Web Vitals e carregamento rápido em qualquer dispositivo.' },
  { icon: '📱', title: 'Experiência mobile-first',  desc: 'A navegação em dispositivos móveis é tratada como prioridade — não como adaptação posterior.' },
  { icon: '🎨', title: 'Design orientado à ação',   desc: 'Cada elemento visual serve a um propósito: guiar o visitante até o próximo passo com clareza e intenção.' },
  { icon: '🔍', title: 'SEO estrutural',             desc: 'Metadados, estrutura semântica, dados estruturados e velocidade — os fundamentos que o Google valoriza.' },
  { icon: '🔗', title: 'Integrações estratégicas',  desc: 'WhatsApp, CRMs, analytics, pixels de remarketing e sistemas de pagamento conectados ao fluxo do seu negócio.' },
  { icon: '🛡️', title: 'Segurança de ponta',        desc: 'HTTPS, headers de segurança e proteção contra acessos indevidos configurados desde o primeiro deploy.' },
]

const deliverables = [
  { label: 'Landing page',        desc: 'Página única focada em conversão',         time: 'Prazo ágil' },
  { label: 'Site institucional',  desc: 'Múltiplas páginas, blog e SEO completo',   time: 'Prazo padrão' },
  { label: 'E-commerce',          desc: 'Loja completa com pagamentos integrados',  time: 'Prazo estendido' },
  { label: 'Sistema web',         desc: 'Dashboard, painel admin, área do cliente', time: 'Sob consulta' },
]

export default function WebDev() {
  return (
    <section className="bg-dark2 border-t border-green/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Desenvolvimento Web
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Presença digital que<br /><span className="text-green">trabalha por você</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-16 reveal">
          Não desenvolvemos sites para existir. Desenvolvemos plataformas digitais
          que comunicam autoridade, geram confiança e transformam visitantes em clientes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((f) => (
            <div key={f.title}
              className="flex gap-4 p-6 rounded-xl bg-dark3 border border-green/10
                         hover:border-green/25 hover:-translate-y-0.5
                         transition-all duration-200 reveal">
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h4 className="text-sm font-medium text-cream mb-1.5">{f.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="font-display font-bold text-xl text-cream text-center mb-8">
            O que desenvolvemos
          </h3>
          <div className="rounded-2xl border border-green/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-dark3 border-b border-green/10
                            px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">
              <span>Modalidade</span>
              <span>Escopo</span>
              <span>Prazo estimado</span>
            </div>
            {deliverables.map((d, i) => (
              <div key={d.label}
                className={`grid grid-cols-3 px-6 py-5 text-sm items-center
                            transition-colors duration-150 hover:bg-dark3
                            ${i < deliverables.length - 1 ? 'border-b border-green/8' : ''}`}>
                <span className="font-medium text-cream">{d.label}</span>
                <span className="text-muted text-xs">{d.desc}</span>
                <span className="inline-flex">
                  <span className="text-xs font-medium px-3 py-1 rounded-full
                                   bg-green/8 text-green border border-green/15">
                    {d.time}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
