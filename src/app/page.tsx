import { Activity, CircleDotDashed } from "lucide-react";
import { AnalyticsPlayground } from "@/components/AnalyticsPlayground";
import { CommandTerminal } from "@/components/CommandTerminal";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import { ProjectCaseFiles } from "@/components/ProjectCaseFiles";
import { SkillsGrid } from "@/components/SkillsGrid";

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jeeva OS home"><span><Activity size={17} /></span><b>JEEVA</b><i>OS</i></a>
        <nav aria-label="Primary navigation"><a href="#case-files">Cases</a><a href="#skills">Stack</a><a href="#experience">Timeline</a><a href="#contact">Contact</a></nav>
        <div className="header-status"><CircleDotDashed size={14} /><span>System online</span></div>
        <ModeToggle />
      </header>
      <main>
        <Hero /><CommandTerminal /><ProjectCaseFiles /><AnalyticsPlayground /><SkillsGrid /><ExperienceTimeline /><EducationSection /><ContactSection />
      </main>
      <footer>
        <a className="brand" href="#top"><span><Activity size={15} /></span><b>JEEVA</b><i>OS</i></a>
        <p>Designed as an analytics operating system.</p><span>© {new Date().getFullYear()} Jeeva Satish Kumar</span>
      </footer>
    </div>
  );
}
