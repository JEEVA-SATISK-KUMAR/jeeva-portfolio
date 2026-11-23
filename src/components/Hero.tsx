import Image from "next/image";
import { ArrowDownRight, Download, Radio } from "lucide-react";
import portrait from "../../public/jeeva-portrait-cutout.png";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Decorative upward trend (no real values shown). Smoothed with Catmull-Rom → cubic Bézier.
const trend = [118, 112, 120, 102, 106, 88, 94, 74, 78, 58, 52, 34].map((y, i) => ({ x: 8 + i * 38.5, y }));
const last = trend[trend.length - 1];
const trendPath = trend.reduce((d, point, i, all) => {
  if (i === 0) return `M${point.x} ${point.y}`;
  const p0 = all[i - 2] ?? all[i - 1];
  const p1 = all[i - 1];
  const p3 = all[i + 1] ?? point;
  const c1 = `${(p1.x + (point.x - p0.x) / 6).toFixed(1)} ${(p1.y + (point.y - p0.y) / 6).toFixed(1)}`;
  const c2 = `${(point.x - (p3.x - p1.x) / 6).toFixed(1)} ${(point.y - (p3.y - p1.y) / 6).toFixed(1)}`;
  return `${d} C${c1} ${c2} ${point.x} ${point.y}`;
}, "");

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
          sizes="(max-width: 680px) 80vw, 460px"
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
          <strong>Jeeva Satish Kumar</strong><br />Business Analytics graduate focused on healthcare analytics, supply chain analytics, forecasting, BI dashboards, and data pipelines. I turn messy operational data into clear metrics, executive ready dashboards, and decision support systems. Currently operating robotic systems in a research lab, producing clean training data for robot learning models.
        </p>
        <div className="hero-meta" aria-label="Professional focus">
          <span><b>01</b> Business + Data Analyst</span>
          <span><b>02</b> Healthcare + Supply Chain</span>
          <span><b>03</b> Operations + BI Analyst</span>
          <span><b>04</b> Robotics + AI Data</span>
        </div>
      </div>

      <div className="hero-visual" role="group" aria-label="Jeeva OS analytics system status" data-reveal style={delay(120)}>
        <div className="system-card spotlight">
          <div className="system-intro">
            <div className="system-head">
              <div className="core-label"><Radio size={14} aria-hidden="true" /> <span translate="no">JEEVA OS</span></div>
              <strong className="online"><span className="pulse-dot" aria-hidden="true" />ONLINE</strong>
            </div>
            <p className="system-sub">Metrics that matter</p>
          </div>
          <svg className="chart" viewBox="0 0 440 150" role="img" aria-label="Upward trend line">
            <defs>
              <linearGradient id="wave-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" className="stop-a" />
                <stop offset="0.6" className="stop-b" />
                <stop offset="1" className="stop-c" />
              </linearGradient>
              <linearGradient id="wave-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" className="fill-a" />
                <stop offset="1" className="fill-b" />
              </linearGradient>
            </defs>
            {[22, 64, 106, 148].map((y) => <line key={y} className="grid" x1="0" x2="440" y1={y} y2={y} />)}
            <path className="area" d={`${trendPath} L${last.x} 150 L${trend[0].x} 150 Z`} />
            <path className="line" pathLength={1} d={trendPath} />
            {trend.slice(0, -1).map((point) => <circle key={point.x} className="point" cx={point.x} cy={point.y} r="2.5" />)}
            <circle className="peak-ring" cx={last.x} cy={last.y} r="9" />
            <circle className="peak" cx={last.x} cy={last.y} r="4.5" />
          </svg>
          <ul className="signal-list">
            <li style={{ "--dot": "var(--blue)" } as React.CSSProperties}><span>HEALTHCARE</span><b>Claims + Clinical</b></li>
            <li style={{ "--dot": "var(--purple)" } as React.CSSProperties}><span>FORECASTS</span><b>Decision ready</b></li>
            <li style={{ "--dot": "var(--pink)" } as React.CSSProperties}><span>DASHBOARDS</span><b>Executive ready</b></li>
            <li style={{ "--dot": "var(--amber)" } as React.CSSProperties}><span>ROBOTICS</span><b>AI training data</b></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
