import { ArrowUpRight, Mail, Radio } from "lucide-react";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="contact-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" /><div className="hero-glow hero-glow-b" />
      </div>
      <div className="contact-signal">
        <Radio size={16} aria-hidden="true" />
        <span>CHANNEL STATUS</span><strong>OPEN</strong>
      </div>
      <div className="contact-copy">
        <p className="eyebrow"><span aria-hidden="true">{"//"}</span> START A TRANSMISSION</p>
        <h2>Have a data problem worth solving?</h2>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:js@smu.edu"><Mail size={17} aria-hidden="true" /> Send a message <ArrowUpRight className="nudge nudge-up" size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/jeeva-satish-kumar/" target="_blank" rel="noreferrer"><ArrowUpRight size={16} aria-hidden="true" /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
