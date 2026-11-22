import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section className="section" id="education">
      <SectionHeading eyebrow="ACADEMIC RECORD" title="Education" description="Formal training in business analytics, quantitative decision-making, engineering systems, and technical problem-solving." />
      <div className="card-grid">
        {education.map((item, index) => (
          <article className="info-card edu-card spotlight" key={`${item.period}-${item.degree}`} data-reveal style={{ "--d": `${index * 90}ms` } as React.CSSProperties}>
            <div className="info-card-top">
              <span className="edu-icon"><GraduationCap size={20} aria-hidden="true" /></span>
              <b>{String(index + 1).padStart(2, "0")} · {item.period}</b>
            </div>
            <h3>{item.degree}</h3>
            <p className="org">{item.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
