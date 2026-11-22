import Image from "next/image";
import { ArrowDownRight, Download, Radio } from "lucide-react";
import portrait from "../../public/jeeva-portrait.jpg";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="hero hero-editorial" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" /><div className="hero-glow hero-glow-b" /><div className="hero-glow hero-glow-c" />
      </div>

      <div className="hero-top" data-reveal>
        <p className="hero-kicker">DATA ANALYST | BUSINESS ANALYTICS MSBA | SQL • PYTHON • POWER BI</p>
        <div className="status-pill">
          <span className="pulse-dot" aria-hidden="true" />
          Open to analyst opportunities
        </div>
      </div>

      {/* Decorative wordmark (the brand name already in the header), like the reference's oversized title. */}
      <p className="hero-wordmark" aria-hidden="true" translate="no" data-reveal style={delay(60)}>JEEVA</p>

      <div className="hero-portrait" data-reveal style={delay(140)}>
        <Image
          src={portrait}
          alt="Portrait of Jeeva Satish Kumar"
          priority
          placeholder="blur"
          sizes="(max-width: 680px) 80vw, 420px"
        />
      </div>

      <div className="hero-copy" data-reveal style={delay(200)}>
        <h1>
          I turn complex data into
          <span className="gradient-text">decision systems.</span>
        </h1>
        <div className="hero-actions">
          <a className="button button-primary" href="#case-files">
            Explore case files <ArrowDownRight className="nudge" size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
            <Download size={16} aria-hidden="true" /> Resume.pdf
          </a>
        </div>
      </div>

      <div className="hero-aside" data-reveal style={delay(260)}>
        <p className="hero-intro">
          <strong>Jeeva Satish Kumar</strong><br />Business Analytics graduate focused on healthcare analytics, supply chain analytics, forecasting, BI dashboards, and data pipelines. I turn messy operational data into clear metrics, executive ready dashboards, and decision support systems.
        </p>
        <div className="hero-meta" aria-label="Professional focus">
          <span><b>01</b> Business + Data Analyst</span>
          <span><b>02</b> Healthcare + Supply Chain</span>
          <span><b>03</b> Operations + BI Analyst</span>
        </div>
      </div>

      <div className="hero-visual" role="group" aria-label="Jeeva OS analytics system status" data-reveal style={delay(120)}>
        <div className="system-card spotlight">
          <div className="system-intro">
            <div className="system-head">
              <div className="core-label"><Radio size={14} aria-hidden="true" /> <span translate="no">JEEVA OS</span></div>
              <strong className="online"><span className="pulse-dot" aria-hidden="true" />ONLINE</strong>
            </div>
            <p className="system-sub">Data Analyst · MSBA</p>
          </div>
          <svg className="chart" viewBox="0 0 440 150" role="img" aria-label="Animated analytics waveform">
            <defs>
              <linearGradient id="wave-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" className="stop-a" />
                <stop offset="0.55" className="stop-b" />
                <stop offset="1" className="stop-c" />
              </linearGradient>
              <linearGradient id="wave-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" className="fill-a" />
                <stop offset="1" className="fill-b" />
              </linearGradient>
            </defs>
            {[30, 75, 120].map((y) => <line key={y} className="grid" x1="0" x2="440" y1={y} y2={y} />)}
            <path className="area" d="M0 90 C30 88 38 85 55 89 S82 100 100 86 S125 47 143 82 S169 124 191 78 S219 12 242 76 S273 136 296 80 S330 52 351 85 S395 95 440 88 L440 150 L0 150 Z" />
            <path className="line" pathLength={1} d="M0 90 C30 88 38 85 55 89 S82 100 100 86 S125 47 143 82 S169 124 191 78 S219 12 242 76 S273 136 296 80 S330 52 351 85 S395 95 440 88" />
            <circle className="peak" cx="231" cy="38" r="4.5" />
          </svg>
          <ul className="signal-list">
            <li style={{ "--dot": "var(--blue)" } as React.CSSProperties}><span>HEALTHCARE</span><b>Claims + Clinical</b></li>
            <li style={{ "--dot": "var(--purple)" } as React.CSSProperties}><span>FORECASTS</span><b>Decision ready</b></li>
            <li style={{ "--dot": "var(--pink)" } as React.CSSProperties}><span>DASHBOARDS</span><b>Executive ready</b></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
