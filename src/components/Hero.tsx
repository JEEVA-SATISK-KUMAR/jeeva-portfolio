import { ArrowDownRight, Download, Radio } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="status-pill">
          <span className="pulse-dot" />
          Open to analyst opportunities
        </div>
        <p className="hero-kicker">DATA ANALYST | BUSINESS ANALYTICS MSBA | SQL • PYTHON • POWER BI</p>
        <h1>
          I turn complex data into
          <span>decision systems.</span>
        </h1>
        <p className="hero-intro">
          <strong>Jeeva Satish Kumar</strong><br />Business Analytics graduate focused on healthcare analytics, supply chain analytics, forecasting, BI dashboards, and data pipelines. I turn messy operational data into clear metrics, executive ready dashboards, and decision support systems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#case-files">
            Explore case files <ArrowDownRight size={17} />
          </a>
          <a className="button button-secondary" href="/resume.pdf" target="_blank">
            <Download size={16} /> Resume.pdf
          </a>
        </div>
        <div className="hero-meta" aria-label="Professional focus">
          <span><b>01</b> Business + Data Analyst</span>
          <span><b>02</b> Healthcare + Supply Chain</span>
          <span><b>03</b> Operations + BI Analyst</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Jeeva OS analytics system status">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="system-core">
          <div className="core-label"><Radio size={14} /> JEEVA OS</div>
          <strong>ONLINE</strong>
          <span>Data Analyst · MSBA</span>
        </div>
        <div className="signal-card signal-card-a">
          <span>HEALTHCARE</span><b>Claims + Clinical</b>
        </div>
        <div className="signal-card signal-card-b">
          <span>FORECASTS</span><b>Decision ready</b>
        </div>
        <div className="signal-card signal-card-c">
          <span>DASHBOARDS</span><b>Executive ready</b>
        </div>
        <svg className="hero-wave" viewBox="0 0 440 150" role="img" aria-label="Animated analytics waveform">
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#38e8d4" stopOpacity="0" />
              <stop offset="0.35" stopColor="#38e8d4" />
              <stop offset="1" stopColor="#9678ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 90 C30 88 38 85 55 89 S82 100 100 86 S125 47 143 82 S169 124 191 78 S219 12 242 76 S273 136 296 80 S330 52 351 85 S395 95 440 88" />
        </svg>
      </div>
    </section>
  );
}
