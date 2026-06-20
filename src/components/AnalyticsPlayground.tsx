"use client";

import { Activity, SlidersHorizontal, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const baseSeries = [62, 66, 65, 71, 74, 76, 80, 82, 87, 91, 95, 100];

export function AnalyticsPlayground() {
  const [forecastAccuracy, setForecastAccuracy] = useState(78);
  const [costReduction, setCostReduction] = useState(8);
  const [operationalImprovement, setOperationalImprovement] = useState(12);

  const totalImpact =
    (forecastAccuracy - 60) * 0.35 + costReduction * 0.8 + operationalImprovement * 0.7;

  const series = useMemo(
    () => baseSeries.map((value, index) => value + totalImpact * (index / (baseSeries.length - 1))),
    [totalImpact],
  );
  const points = series.map((value, index) => `${index * 54},${140 - value}`).join(" ");
  const impactIndex = Math.round(series.at(-1)!);

  return (
    <section className="section playground-section" id="lab">
      <SectionHeading
        eyebrow="ANALYTICS LAB"
        title="From assumptions to impact"
        description="This section shows how I translate analytics into business decisions. Adjust the assumptions below to see how forecasting accuracy, cost reduction, and operational improvements can affect business outcomes."
      />

      <div className="playground-shell">
        <div className="control-panel">
          <div className="control-title"><SlidersHorizontal size={17} /><span>FORECAST IMPACT SIMULATOR</span></div>
          <label>
            <span>Forecast accuracy <b>{forecastAccuracy}%</b></span>
            <input type="range" min="60" max="95" value={forecastAccuracy} onChange={(event) => setForecastAccuracy(Number(event.target.value))} />
          </label>
          <label>
            <span>Cost reduction <b>{costReduction}%</b></span>
            <input type="range" min="0" max="20" value={costReduction} onChange={(event) => setCostReduction(Number(event.target.value))} />
          </label>
          <label>
            <span>Operational improvement <b>{operationalImprovement}%</b></span>
            <input type="range" min="0" max="20" value={operationalImprovement} onChange={(event) => setOperationalImprovement(Number(event.target.value))} />
          </label>
          <div className="model-note"><Activity size={16} /><p><b>Decision model: active</b><span>Combines forecasting, supply-chain KPIs, and cost optimization assumptions.</span></p></div>
        </div>

        <div className="chart-panel">
          <div className="chart-header">
            <div><span>PROJECTED BUSINESS IMPACT INDEX</span><strong>{impactIndex}<small>.0</small></strong></div>
            <div className="trend-badge"><TrendingUp size={14} /> +{Math.round(totalImpact)}%</div>
          </div>
          <svg viewBox="0 0 600 170" role="img" aria-label="Forecast impact projection based on business assumptions">
            {[25, 65, 105, 145].map((y) => <line key={y} x1="0" x2="600" y1={y} y2={y} />)}
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#38e8d4" stopOpacity=".32" />
                <stop offset="1" stopColor="#38e8d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,160 ${points} 594,160`} fill="url(#chart-fill)" />
            <polyline points={points} />
            {series.map((value, index) => <circle key={index} cx={index * 54} cy={140 - value} r={index === 11 ? 5 : 2.5} />)}
          </svg>
          <div className="chart-axis"><span>JAN</span><span>APR</span><span>JUL</span><span>OCT</span><span>DEC</span></div>
        </div>
      </div>
    </section>
  );
}
