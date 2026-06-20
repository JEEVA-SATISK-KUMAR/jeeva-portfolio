import { Binary, Boxes, ChartNoAxesCombined, CloudCog } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

const icons = [Boxes, ChartNoAxesCombined, Binary, CloudCog];

export function SkillsGrid() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="SYSTEM CAPABILITIES" title="The analytics stack" description="KPI investigation, forecasting, BI delivery, governed pipelines, and stakeholder execution across healthcare, supply-chain, and operations contexts." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-card" key={group.code}>
              <div className="skill-card-top"><Icon size={21} /><span>{group.code}</span></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
