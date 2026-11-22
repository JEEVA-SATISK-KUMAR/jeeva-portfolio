import { leadership } from "@/data/leadership";
import { SectionHeading } from "./SectionHeading";

export function LeadershipSection() {
  return (
    <section className="section" id="leadership">
      <SectionHeading
        eyebrow="CAMPUS ENGAGEMENT"
        title="Leadership & Campus Engagement"
        description="Campus leadership experience across student clubs, event operations, creative media, and digital engagement."
      />
      <div className="card-grid">
        {leadership.map((item, index) => (
          <article className="info-card spotlight" key={`${item.period}-${item.role}`} data-reveal style={{ "--d": `${index * 90}ms` } as React.CSSProperties}>
            <div className="info-card-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{item.period}</b>
            </div>
            <p className="org">{item.organization}</p>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
            <div className="card-tags">
              {item.highlights.map((highlight) => (
                <span className="chip" key={highlight}>{highlight}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
