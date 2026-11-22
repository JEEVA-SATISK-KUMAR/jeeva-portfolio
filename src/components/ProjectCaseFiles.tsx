"use client";

import { ArrowUpRight, Database, FolderKanban } from "lucide-react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

const accentColor: Record<Project["accent"], string> = {
  cyan: "var(--blue)",
  violet: "var(--purple)",
  amber: "var(--amber)",
};

const isProjectId = (value: string | null): value is Project["id"] => projects.some((project) => project.id === value);

export function ProjectCaseFiles() {
  const [activeId, setActiveId] = useState<Project["id"]>(projects[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0];

  // Deep link: ?case=<id> opens that case file (URL is the source of truth after load).
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("case");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from URL after hydration
    if (isProjectId(fromUrl)) setActiveId(fromUrl);
  }, []);

  function select(id: Project["id"]) {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("case", id);
    window.history.replaceState(window.history.state, "", url);
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = projects.length - 1;
    const keys: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowRight: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = keys[event.key];
    select(projects[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="section" id="case-files">
      <SectionHeading
        eyebrow="SELECTED OPERATIONS"
        title="Project case files"
        description="Six formal case studies connecting analytical methods to decisions, recommendations, and practical business value."
      />

      <div className="case-layout" data-reveal>
        <div className="case-index" role="tablist" aria-label="Project case files" aria-orientation="vertical">
          {projects.map((project, index) => {
            const selected = activeId === project.id;
            return (
              <button
                key={project.id}
                ref={(element) => { tabRefs.current[index] = element; }}
                id={`tab-${project.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${project.id}`}
                tabIndex={selected ? 0 : -1}
                style={{ "--accent": accentColor[project.accent] } as React.CSSProperties}
                onClick={() => select(project.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span className="case-num">{project.index}</span>
                <span><b>{project.shortTitle}</b><small>{project.category}</small></span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <article
          className="case-detail spotlight"
          id={`panel-${activeProject.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProject.id}`}
          tabIndex={0}
          style={{ "--accent": accentColor[activeProject.accent] } as React.CSSProperties}
        >
          <div className="case-glow" aria-hidden="true" />
          <div className="case-panel-inner" key={activeProject.id}>
            <div className="case-topline">
              <span><FolderKanban size={15} aria-hidden="true" /> CASE_{activeProject.index}</span>
              <b className="badge"><i aria-hidden="true" /> {activeProject.status}</b>
            </div>
            <p className="case-category">{activeProject.category}</p>
            <h3>{activeProject.title}</h3>

            <div className="case-narrative">
              <div><span>01 / BUSINESS PROBLEM</span><p>{activeProject.caseStudy.businessProblem}</p></div>
              <div><span>02 / DATASET</span><p>{activeProject.caseStudy.dataset}</p></div>
              <div><span>03 / KPIs</span><p>{activeProject.caseStudy.kpis}</p></div>
              <div><span>04 / ANALYSIS</span><p>{activeProject.caseStudy.analysis}</p></div>
              <div><span>05 / DASHBOARD</span><p>{activeProject.caseStudy.dashboard}</p></div>
              <div><span>06 / KEY INSIGHT</span><p>{activeProject.caseStudy.keyInsight}</p></div>
              <div><span>07 / RECOMMENDATION</span><p>{activeProject.caseStudy.recommendation}</p></div>
              <div><span>08 / IMPACT</span><p>{activeProject.caseStudy.impact}</p></div>
            </div>

            <div className="case-metrics">
              {activeProject.metrics.map((metric) => (
                <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>
              ))}
            </div>
            <div className="stack-row">
              <Database size={14} aria-hidden="true" />
              {activeProject.stack.map((technology) => <span className="chip" key={technology}>{technology}</span>)}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
