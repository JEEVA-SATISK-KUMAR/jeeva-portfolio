"use client";

import { CornerDownLeft, TerminalSquare } from "lucide-react";
import { FormEvent, Fragment, useRef, useState } from "react";
import { projects } from "@/data/projects";

type TerminalLine = { command?: string; output: string };

const commandList = [
  "help", "about", "skills", "projects", "experience", "education", "certifications",
  "publication", "linkedin", "contact", "healthcare", "supply chain", "analytics lab",
  "summary", "resume", "target roles",
  "case airline", "case healthcare", "case neuro", "case cloud", "case finance",
];

function resolveCommand(rawCommand: string): string {
  const command = rawCommand.trim().toLowerCase();
  const projectId = command.startsWith("case ") ? command.replace("case ", "") : "";
  const project = projects.find((item) => item.id === projectId);

  if (project) return `${project.title} — ${project.summary} Stack: ${project.stack.join(", ")}.`;

  const outputs: Record<string, string> = {
    help: `Available commands: ${commandList.join(" · ")}`,
    about: "I am Jeeva Satish Kumar, a Business Analytics graduate focused on converting complex operational data into clear business decisions. My work spans healthcare analytics, supply chain analytics, forecasting, BI dashboards, and data pipeline design.\n\nI have experience analyzing clinical and claims datasets, building KPI reporting workflows, developing forecasting and classification models, and creating executive ready dashboards using SQL, Python, Power BI, Tableau, Azure Data Factory, Microsoft Fabric, and Excel VBA.\n\nWhat makes my profile different is the combination of business context and technical execution. I can work with ambiguous stakeholder requests, define the right metrics, structure the data, build the analysis, and communicate the result in a way decision makers can use.\n\nI am targeting Data Analyst, Business Analyst, BI Analyst, Healthcare Analytics, Supply Chain Analytics, and Operations Analytics roles where I can help teams improve visibility, efficiency, and decision quality.",
    skills: "AI Agents · Azure Service Fabric · Stakeholder Relations · SQL · Python · Power BI · Tableau · DAX · Forecasting · Healthcare Analytics · Supply Chain Analytics · Operations Analytics · Data Modeling · Excel VBA · R · Random Forest · XGBoost · R Shiny",
    projects: projects.map((item) => `[${item.index}] ${item.shortTitle}`).join("  "),
    experience: "Southern Methodist University: Teaching Assistant · Datycs: Data Analyst · SMU Dedman Center: Operations Assistant · Neuro-Insight: Business Analyst Project Lead · Fouress Engineering: Estimation and Proposal Engineer · Bosch Rexroth: Automation Technology Intern.",
    education: "SMU Cox School of Business — Master's in Business Analytics, May 2025 · RNS Institute of Technology — Bachelor's degree in Mechanical Engineering, July 2019–March 2023.",
    resume: "Opening Jeeva-Satishkumar-Resume.pdf…",
    contact: "Email: js@smu.edu · LinkedIn: https://www.linkedin.com/in/jeeva-satish-kumar/ · Location: San Francisco, California, United States",
    "target roles": "Business Analyst · Data Analyst · Healthcare Analytics Analyst · Supply Chain Analytics Analyst · Operations Analytics Analyst · BI Analyst",
    healthcare: "Healthcare analytics: claims and clinical data analysis, KPI visibility, agreement-level tracking, trend analysis, and product and client reporting.",
    "supply chain": "Supply-chain analytics: demand prediction, forecasting, cost and price estimation, scenario analysis, and operational decision support.",
    certifications: "Foundations of Project Management · SolidWorks Essential · Basics in Programming · Microsoft Power BI Data Analyst · Agent Explorer",
    linkedin: "https://www.linkedin.com/in/jeeva-satish-kumar/",
    publication: "Analysis on a Battery Thermal Management System of a Lithium-Ion Powered Battery with Heat Sink for an Electric Vehicle",
    "analytics lab": "Forecast Impact Simulator — adjust forecast accuracy, cost reduction, and operational improvement assumptions to evaluate projected business outcomes.",
    summary: "Jeeva Satish Kumar is a Business Analytics graduate focused on turning messy operational data into decision-ready insights. He works across healthcare, supply chain, operations, and BI contexts by analyzing clinical and claims data, building forecasting models, designing KPI dashboards, and translating stakeholder needs into measurable business outputs.\n\nWhat I bring to the table:\n- Strong analytical thinking across SQL, Python, R, Power BI, Tableau, Excel VBA, Azure Data Factory, and Microsoft Fabric\n- Ability to connect technical analysis with business context, stakeholder needs, and decision-making\n- Experience building dashboards, forecasting workflows, classification models, KPI frameworks, and data pipelines\n- Comfort working with ambiguous problems, defining the right metrics, structuring the data, and communicating insights clearly\n- A continuous-learning mindset with strong interest in improving my skills, adopting new tools, and learning from every project and team\n\nBest-fit roles:\nData Analyst, Business Analyst, BI Analyst, Healthcare Analytics Analyst, Supply Chain Analytics Analyst, and Operations Analytics Analyst.",
  };

  return outputs[command] ?? `Command not recognized: "${rawCommand}". Type "help" to view the command index.`;
}

export function CommandTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { output: "JEEVA OS command interface initialized." },
    { output: "Type “help” to inspect available commands." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  function runCommand(command: string) {
    const cleaned = command.trim();
    if (!cleaned) return;
    setLines((current) => [...current.slice(-5), { command: cleaned, output: resolveCommand(cleaned) }]);
    setInput("");

    if (cleaned.toLowerCase() === "resume") {
      window.open("/Jeeva-Satishkumar-Resume.pdf", "_blank", "noopener,noreferrer");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(input);
  }

  return (
    <section className="terminal-section" id="terminal">
      <div className="terminal-intro">
        <p className="eyebrow"><span>{"//"}</span> INTERACTIVE CONSOLE</p>
        <h2>Query the operator.</h2>
        <p>Use the command line to navigate Jeeva OS, inspect case files, or access the resume.</p>
        <div className="command-chips">
          {["about", "target roles", "healthcare", "certifications"].map((command) => (
            <button key={command} type="button" onClick={() => runCommand(command)}>{command}</button>
          ))}
        </div>
      </div>

      <div className="terminal" onClick={() => inputRef.current?.focus()}>
        <div className="terminal-bar">
          <div className="window-dots"><i /><i /><i /></div>
          <span><TerminalSquare size={14} /> jeeva@analytics-os:~</span>
          <b>SECURE SHELL</b>
        </div>
        <div className="terminal-body" aria-live="polite">
          {lines.map((line, index) => (
            <div className="terminal-line" key={`${line.command}-${index}`}>
              {line.command && <p><span>jeeva@os:~$</span> {line.command}</p>}
              <div className="terminal-output">
                {line.output.split("\n").map((outputLine, lineIndex) => (
                  <Fragment key={`${outputLine}-${lineIndex}`}>
                    {lineIndex > 0 && <br />}{outputLine}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
          <form onSubmit={handleSubmit}>
            <label htmlFor="terminal-input">jeeva@os:~$</label>
            <input
              ref={inputRef}
              id="terminal-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
            <button type="submit" aria-label="Run command"><CornerDownLeft size={15} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}
