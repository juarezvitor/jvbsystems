import Image from "next/image";
import Link from "next/link";

const WA =
  "https://wa.me/5547992021022?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20JVBSystems.";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
                        text-center px-6 pt-32 pb-24 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
      aria-label="Seção principal"
    >
      <div
        className="absolute inset-0 hero-grid pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow suave verde */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 25%, rgba(0,196,122,0.10) 0%, transparent 65%)," +
            "radial-gradient(ellipse 40% 35% at 80% 70%, rgba(15,39,68,0.06) 0%, transparent 55%)",
        }}
      />

      {/* Badge */}
      <div
        className="relative z-10 inline-flex items-center gap-2 mb-8 reveal"
        style={{
          background: "rgba(0,196,122,0.09)",
          border: "1px solid rgba(0,196,122,0.25)",
          padding: "6px 16px",
          borderRadius: 999,
          color: "var(--green-dark)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full pulse-dot"
          style={{ background: "var(--green)" }}
          aria-hidden="true"
        />
        Automações &amp; Desenvolvimento Web
      </div>

      {/* Logo grande centralizada */}
      <div className="relative z-10 mb-6 reveal">
        <Image
          src="/logo.svg"
          alt="JVBSystems"
          width={96}
          height={96}
          className="object-contain mx-auto drop-shadow-sm"
          priority
        />
      </div>

      {/* Headline */}
      <h1
        className="relative z-10 font-display font-extrabold leading-[1.03] tracking-tight mb-6 reveal"
        style={{
          color: "var(--text-primary)",
          fontSize: "clamp(44px,8vw,88px)",
        }}
      >
        Tecnologia que
        <br />
        <span className="gradient-text">transforma</span>
        <br />o seu negócio
      </h1>

      <p
        className="relative z-10 font-light max-w-[500px] leading-relaxed mb-10 reveal"
        style={{
          color: "var(--text-secondary)",
          fontSize: "clamp(15px,1.8vw,18px)",
        }}
      >
        Desenvolvemos sistemas, automações e experiências digitais que eliminam
        trabalho manual, fortalecem sua presença e geram crescimento real.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap gap-3 justify-center mb-20 reveal">
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium text-white
                     transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{ background: "var(--navy)" }}
        >
          Solicitar proposta
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7H11M7.5 3.5L11 7L7.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <Link
          href="#servicos"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium
                     transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "transparent",
            color: "var(--text-primary)",
            border: "1px solid var(--border-md)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "rgba(0,196,122,0.4)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-md)")
          }
        >
          Conhecer soluções
        </Link>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 stat-bar flex w-full max-w-[420px] reveal"
        style={{ background: "var(--bg-card)" }}
      >
        {[
          { v: "Ágil", l: "do briefing à entrega" },
          { v: "Sob medida", l: "cada solução é única" },
          { v: "Contínuo", l: "suporte após o go-live" },
        ].map((s) => (
          <div
            key={s.v}
            className="flex-1 flex flex-col items-center py-5 px-3 text-center"
          >
            <span
              className="font-display font-bold text-lg mb-0.5"
              style={{ color: "var(--navy)" }}
            >
              {s.v}
            </span>
            <span
              className="text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              {s.l}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-40"
        aria-hidden="true"
      >
        <span
          className="text-[10px] font-medium tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect
            x="1"
            y="1"
            width="14"
            height="18"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.2"
            style={{ color: "var(--text-muted)" }}
          />
          <circle
            cx="8"
            cy="7"
            r="2"
            fill="currentColor"
            style={{
              color: "var(--green)",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }}
          />
        </svg>
      </div>
    </section>
  );
}
