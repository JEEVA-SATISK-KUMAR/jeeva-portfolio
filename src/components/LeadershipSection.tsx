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
      <div className="timeline">
        {leadership.map((item, index) => (
          <article className="timeline-item" key={`${item.period}-${item.role}`}>
            <div className="timeline-rail">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
            </div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <p>{item.organization}</p>
              <h3>{item.role}</h3>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-tags">
                {item.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
