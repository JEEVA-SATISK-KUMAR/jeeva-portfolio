import { education } from "@/data/education";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section className="section" id="education">
      <SectionHeading eyebrow="ACADEMIC RECORD" title="Education" description="Formal training in business analytics, quantitative decision-making, engineering systems, and technical problem-solving." />
      <div className="timeline">
        {education.map((item, index) => (
          <article className="timeline-item" key={`${item.period}-${item.degree}`}>
            <div className="timeline-rail"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <p>{item.institution}</p><h3>{item.degree}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

