import { Binary, Bot, Boxes, ChartNoAxesCombined, CloudCog } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

const icons = [Boxes, ChartNoAxesCombined, Binary, CloudCog, Bot];
const tints = ["var(--blue)", "var(--purple)", "var(--pink)", "var(--amber)", "var(--green)"];

export function SkillsGrid() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="SYSTEM CAPABILITIES" title="The analytics stack" description="KPI investigation, forecasting, BI delivery, governed pipelines, robotics data collection, and stakeholder execution across healthcare, supply-chain, operations, and robotics contexts." />
      <div className="skills-grid" data-reveal>
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-card spotlight" key={group.code} style={{ "--spot": tints[index] } as React.CSSProperties}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20} aria-hidden="true" /></span><span>{group.code}</span></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <div className="skill-list">{group.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
