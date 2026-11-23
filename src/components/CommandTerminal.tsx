"use client";

import { ChevronRight, CornerDownLeft, TerminalSquare } from "lucide-react";
import { FormEvent, Fragment, KeyboardEvent, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

type TerminalLine = { command?: string; output: string };

const commandList = [
  "help", "about", "skills", "projects", "experience", "education", "certifications",
  "publication", "linkedin", "contact", "healthcare", "supply chain",
  "summary", "resume", "target roles",
  "case airline", "case neuro", "case cloud", "case traffic", "case finance", "case sales",
];

function resolveCommand(rawCommand: string): string {
  const command = rawCommand.trim().toLowerCase();
  const projectId = command.startsWith("case ") ? command.replace("case ", "") : "";
  const project = projects.find((item) => item.id === projectId);

  if (project) return `${project.title} — ${project.summary} Stack: ${project.stack.join(", ")}.`;

  const outputs: Record<string, string> = {
    help: `Available commands: ${commandList.join(" · ")}`,
    about: "I am Jeeva Satish Kumar, a Business Analytics graduate focused on converting complex operational data into clear business decisions. My work spans healthcare analytics, supply chain analytics, forecasting, BI dashboards, and data pipeline design.\n\nI have experience analyzing clinical and claims datasets, building KPI reporting workflows, developing forecasting and classification models, and creating executive ready dashboards using SQL, Python, Power BI, Tableau, Azure Data Factory, Microsoft Fabric, and Excel VBA.\n\nWhat makes my profile different is the combination of business context and technical execution. I can work with ambiguous stakeholder requests, define the right metrics, structure the data, build the analysis, and communicate the result in a way decision makers can use.\n\nI am targeting Data Analyst, Business Analyst, BI Analyst, Healthcare Analytics, Supply Chain Analytics, and Operations Analytics roles where I can help teams improve visibility, efficiency, and decision quality.",
    skills: "AI Agents · Azure Service Fabric · Stakeholder Relations · SQL · Python · Power BI · Tableau · DAX · Forecasting · Healthcare Analytics · Supply Chain Analytics · Operations Analytics · Data Modeling · Excel VBA · R · Random Forest · XGBoost · R Shiny · Robot Teleoperation · Robotics Data Collection · Training Data Quality · Fault Detection · Lab Procedures + SOPs",
    projects: projects.map((item) => `[${item.index}] ${item.shortTitle}`).join("  "),
    experience: "Apex Systems (client: OpenAI): Lab Robotic Operator · Southern Methodist University: Teaching Assistant · Datycs: Data Analyst · SMU Dedman Center: Operations Assistant · Neuro-Insight: Business Analyst Project Lead · Fouress Engineering: Estimation and Proposal Engineer · Bosch Rexroth: Automation Technology Intern.",
    education: "SMU Cox School of Business — Master's in Business Analytics, May 2025 · RNS Institute of Technology — Bachelor's degree in Mechanical Engineering, July 2019–March 2023.",
    resume: "Opening Jeeva-Satishkumar-Resume.pdf…",
    contact: "Email: js@smu.edu · LinkedIn: https://www.linkedin.com/in/jeeva-satish-kumar/ · Location: San Francisco, California, United States",
    "target roles": "Business Analyst · Data Analyst · Healthcare Analytics Analyst · Supply Chain Analytics Analyst · Operations Analytics Analyst · BI Analyst",
    healthcare: "Healthcare analytics: claims and clinical data analysis, KPI visibility, agreement-level tracking, trend analysis, and product and client reporting.",
    "supply chain": "Supply-chain analytics: demand prediction, forecasting, cost and price estimation, scenario analysis, and operational decision support.",
    certifications: "Foundations of Project Management · SolidWorks Essential · Basics in Programming · Microsoft Power BI Data Analyst · Agent Explorer",
    linkedin: "https://www.linkedin.com/in/jeeva-satish-kumar/",
    publication: "Analysis on a Battery Thermal Management System of a Lithium-Ion Powered Battery with Heat Sink for an Electric Vehicle",
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
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Keep the newest output in view inside the terminal (never scrolls the page).
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [lines]);

  function runCommand(command: string) {
    const cleaned = command.trim();
    if (!cleaned) return;
    setLines((current) => [...current.slice(-5), { command: cleaned, output: resolveCommand(cleaned) }]);
    setHistory((current) => [...current, cleaned]);
    setHistoryIndex(null);
    setInput("");

    if (cleaned.toLowerCase() === "resume") {
      window.open("/resume.pdf", "_blank", "noopener,noreferrer");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const next = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    } else if (event.key === "ArrowDown" && historyIndex !== null) {
      event.preventDefault();
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (event.key === "Tab" && input.trim()) {
      // Only capture Tab when there is something to complete, so keyboard users can still tab out.
      const query = input.trim().toLowerCase();
      const matches = commandList.filter((command) => command.startsWith(query));
      if (matches.length === 1) {
        event.preventDefault();
        setInput(matches[0]);
      } else if (matches.length > 1) {
        event.preventDefault();
        setLines((current) => [...current.slice(-5), { command: input.trim(), output: matches.join(" · ") }]);
      }
    }
  }

  function focusInput() {
    if (!window.getSelection()?.toString()) inputRef.current?.focus();
  }

  return (
    <section className="terminal-section" id="terminal">
      <div className="terminal-intro" data-reveal>
        <p className="eyebrow"><span aria-hidden="true">{"//"}</span> INTERACTIVE CONSOLE</p>
        <h2>Query the operator.</h2>
        <p>Use the command line to navigate Jeeva OS, inspect case files, or access the resume.</p>
        <div className="command-chips">
          {["about", "target roles", "healthcare", "certifications"].map((command) => (
            <button key={command} type="button" onClick={() => runCommand(command)}><ChevronRight size={13} aria-hidden="true" />{command}</button>
          ))}
        </div>
      </div>

      <div className="terminal" onClick={focusInput} data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
        <div className="terminal-bar">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span translate="no"><TerminalSquare size={14} aria-hidden="true" /> jeeva@analytics-os:~</span>
          <b>SECURE SHELL</b>
        </div>
        <div className="terminal-body" ref={bodyRef}>
          <div className="terminal-lines" aria-live="polite">
            {lines.map((line, index) => (
              <div className="terminal-line" key={`${line.command}-${index}-${lines.length}`}>
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
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="terminal-input">jeeva@os:~$</label>
            <input
              ref={inputRef}
              id="terminal-input"
              value={input}
              onChange={(event) => { setInput(event.target.value); setHistoryIndex(null); }}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
            <button type="submit" aria-label="Run command"><CornerDownLeft size={15} aria-hidden="true" /></button>
          </form>
        </div>
        <div className="terminal-hint" aria-hidden="true">
          <span><kbd>↑</kbd><kbd>↓</kbd> history</span>
          <span><kbd>Tab</kbd> complete</span>
          <span><kbd>Enter</kbd> run</span>
        </div>
      </div>
    </section>
  );
}
