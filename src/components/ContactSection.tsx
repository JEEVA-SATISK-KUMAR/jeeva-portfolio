import { ArrowUpRight, Mail, Radio } from "lucide-react";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-signal">
        <div className="contact-radar"><Radio size={28} /><i /><i /></div>
        <span>CHANNEL STATUS</span><strong>OPEN</strong>
      </div>
      <div className="contact-copy">
        <p className="eyebrow"><span>{"//"}</span> START A TRANSMISSION</p>
        <h2>Have a data problem worth solving?</h2>
        <p>Email: js@smu.edu · LinkedIn: https://www.linkedin.com/in/jeeva-satish-kumar/ · Location: San Francisco, California, United States</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:js@smu.edu"><Mail size={17} /> Send a message <ArrowUpRight size={16} /></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/jeeva-satish-kumar/" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
