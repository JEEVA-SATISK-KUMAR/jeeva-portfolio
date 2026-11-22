import { Activity } from "lucide-react";
import { ClientEffects } from "@/components/ClientEffects";
import { CommandTerminal } from "@/components/CommandTerminal";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ProjectCaseFiles } from "@/components/ProjectCaseFiles";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsGrid } from "@/components/SkillsGrid";

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="container" tabIndex={-1}>
        <Hero /><CommandTerminal /><ProjectCaseFiles /><ExperienceTimeline /><LeadershipSection /><SkillsGrid /><EducationSection /><ContactSection />
      </main>
      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#top" translate="no"><span className="brand-mark"><Activity size={15} aria-hidden="true" /></span><b>JEEVA</b><i>OS</i></a>
          <p>Designed as an analytics operating system.</p><span>© {new Date().getFullYear()} Jeeva Satish Kumar</span>
        </div>
      </footer>
      <ClientEffects />
    </div>
  );
}
