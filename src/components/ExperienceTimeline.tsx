import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <SectionHeading eyebrow="OPERATING HISTORY" title="Experience timeline" description="Professional experience spanning healthcare data, analytics education, operations, machine learning, pricing automation, and engineering." />
      <ol className="timeline">
        {experience.map((item, index) => (
          <li className="timeline-item" key={`${item.period}-${item.role}`} data-reveal>
            <span className={`timeline-dot${item.active ? " active" : ""}`} aria-hidden="true" />
            <div className="timeline-meta">
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="timeline-period">{item.period}</span>
            </div>
            <div className="timeline-content">
              <p className="timeline-org">{item.organization}</p><h3>{item.role}</h3>
              <span className="location"><MapPin size={14} aria-hidden="true" /> {item.location}</span>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-tags">{item.highlights.map((highlight) => <span className="chip" key={highlight}>{highlight}</span>)}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
