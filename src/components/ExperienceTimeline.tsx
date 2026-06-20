import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <SectionHeading eyebrow="OPERATING HISTORY" title="Experience timeline" description="Professional experience spanning healthcare data, analytics education, operations, machine learning, pricing automation, and engineering." />
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item" key={`${item.period}-${item.role}`}>
            <div className="timeline-rail"><span>{String(index + 1).padStart(2, "0")}</span><i className={item.active ? "active" : ""} /></div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <p>{item.organization}</p><h3>{item.role}</h3>
              <span className="location"><MapPin size={13} /> {item.location}</span>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-tags">{item.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
