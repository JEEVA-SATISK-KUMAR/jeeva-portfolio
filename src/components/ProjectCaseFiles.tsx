"use client";

import { ArrowUpRight, Database, FolderKanban } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

export function ProjectCaseFiles() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <section className="section" id="case-files">
      <SectionHeading
        eyebrow="SELECTED OPERATIONS"
        title="Project case files"
        description="Five applied investigations across healthcare, cloud BI, supply-chain forecasting, EEG machine learning, and pricing automation."
      />

      <div className="case-layout">
        <div className="case-index" role="tablist" aria-label="Project case files">
          {projects.map((project) => (
            <button
              key={project.id}
              id={`tab-${project.id}`}
              className={activeId === project.id ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={activeId === project.id}
              aria-controls={`panel-${project.id}`}
              onClick={() => setActiveId(project.id)}
            >
              <span>{project.index}</span>
              <span><b>{project.shortTitle}</b><small>{project.category}</small></span>
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>

        <article
          className={`case-detail accent-${activeProject.accent}`}
          id={`panel-${activeProject.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProject.id}`}
        >
          <div className="case-topline">
            <span><FolderKanban size={15} /> CASE_{activeProject.index}</span>
            <b><i /> {activeProject.status}</b>
          </div>
          <p className="case-category">{activeProject.category}</p>
          <h3>{activeProject.title}</h3>
          <p className="case-summary">{activeProject.summary}</p>

          <div className="case-narrative">
            <div><span>01 / SIGNAL</span><p>{activeProject.challenge}</p></div>
            <div><span>02 / SYSTEM</span><p>{activeProject.solution}</p></div>
            <div><span>03 / OUTCOME</span><p>{activeProject.impact}</p></div>
          </div>

          <div className="case-metrics">
            {activeProject.metrics.map((metric) => (
              <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>
            ))}
          </div>
          <div className="stack-row">
            <Database size={14} />
            {activeProject.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </article>
      </div>
    </section>
  );
}
