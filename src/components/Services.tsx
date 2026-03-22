const services = [
  {
    num: '—',
    title: 'Automação via WhatsApp',
    desc: 'Transformamos o WhatsApp do seu negócio em um canal de atendimento inteligente — capaz de agendar, confirmar, lembrar e responder clientes de forma completamente autônoma, a qualquer hora.',
    tags: ['WhatsApp Business API', 'Agendamentos', 'Google Calendar', 'Lembretes automáticos'],
  },
  {
    num: '—',
    title: 'Desenvolvimento Web',
    desc: 'Criamos presença digital de alto impacto — sites institucionais, landing pages e plataformas que comunicam valor, geram confiança e convertem visitantes em clientes reais.',
    tags: ['Landing pages', 'Sites institucionais', 'E-commerce', 'SEO técnico'],
  },
  {
    num: '—',
    title: 'Sistemas sob medida',
    desc: 'Desenvolvemos sistemas personalizados que automatizam processos, centralizam informações e eliminam retrabalho — integrando as ferramentas que você já usa ao fluxo que você precisa.',
    tags: ['Painéis administrativos', 'Integrações via API', 'Automação de processos', 'Dashboards'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-black">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-green text-xs font-medium tracking-widest uppercase mb-4 reveal">
          Nossas soluções
        </p>
        <h2 className="font-display font-extrabold text-center text-cream leading-tight mb-4 reveal
                       text-[clamp(34px,4.5vw,56px)]">
          Soluções construídas para<br /><span className="text-green">gerar resultado</span>
        </h2>
        <p className="text-center text-muted font-light leading-relaxed max-w-xl mx-auto mb-14 reveal">
          Cada projeto é tratado como único. Nenhum template, nenhum atalho —
          apenas tecnologia desenvolvida para o desafio específico do seu negócio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {services.map((svc) => (
            <div key={svc.title}
              className="group relative bg-dark2 border border-green/10 p-10
                         hover:bg-dark3 hover:border-green/30 transition-all duration-200 reveal">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-green opacity-0
                              group-hover:opacity-100 transition-opacity duration-200" />
              <h3 className="font-display font-bold text-2xl text-cream mb-4">{svc.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((t) => (
                  <span key={t}
                    className="text-xs font-medium px-3 py-1 rounded-full
                               bg-green/8 text-green border border-green/15">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
