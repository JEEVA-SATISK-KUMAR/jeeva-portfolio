import { ArrowDownRight, Download, Radio } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" /><div className="hero-glow hero-glow-b" /><div className="hero-glow hero-glow-c" />
      </div>

      <div className="hero-copy">
        <div className="status-pill" data-reveal>
          <span className="pulse-dot" aria-hidden="true" />
          Open to analyst opportunities
        </div>
        <p className="hero-kicker" data-reveal style={{ "--d": "60ms" } as React.CSSProperties}>DATA ANALYST | BUSINESS ANALYTICS MSBA | SQL • PYTHON • POWER BI</p>
        <h1 data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          I turn complex data into
          <span className="gradient-text">decision systems.</span>
        </h1>
        <p className="hero-intro" data-reveal style={{ "--d": "180ms" } as React.CSSProperties}>
          <strong>Jeeva Satish Kumar</strong><br />Business Analytics graduate focused on healthcare analytics, supply chain analytics, forecasting, BI dashboards, and data pipelines. I turn messy operational data into clear metrics, executive ready dashboards, and decision support systems.
        </p>
        <div className="hero-actions" data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
          <a className="button button-primary" href="#case-files">
            Explore case files <ArrowDownRight className="nudge" size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
            <Download size={16} aria-hidden="true" /> Resume.pdf
          </a>
        </div>
        <div className="hero-meta" aria-label="Professional focus" data-reveal style={{ "--d": "300ms" } as React.CSSProperties}>
          <span><b>01</b> Business + Data Analyst</span>
          <span><b>02</b> Healthcare + Supply Chain</span>
          <span><b>03</b> Operations + BI Analyst</span>
        </div>
      </div>

      <div className="hero-visual" role="group" aria-label="Jeeva OS analytics system status" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
        <div className="system-card spotlight">
          <div className="system-head">
            <div className="core-label"><Radio size={14} aria-hidden="true" /> <span translate="no">JEEVA OS</span></div>
            <strong className="online"><span className="pulse-dot" aria-hidden="true" />ONLINE</strong>
          </div>
          <p className="system-sub">Data Analyst · MSBA</p>
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
