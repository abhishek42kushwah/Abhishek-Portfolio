import { quickFacts } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { StaggerContainer, StaggerItem } from "./ui/Stagger";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 id="about-heading" className="heading-2 mt-4 max-w-xl">
            Building software that solves real business problems.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.75] text-secondary sm:text-[17px]">
            <p>
              I&apos;m a MERN stack developer based in Bhopal with nearly three years of professional experience,
              most of it spent on software that businesses run on every day.
            </p>
            <p>
              At <span className="text-fg">D Table Analytics</span> I work on enterprise ERP systems for
              manufacturing — procurement, inventory, production, quality control, dispatch and finance. Before that,
              at <span className="text-fg">EcoDigitas</span>, I built form-heavy, multi-role React and TypeScript
              applications with Excel import and OCR-based invoice automation.
            </p>
            <p>
              My work spans the stack: React interfaces and dashboards, Node.js and Express REST APIs, MongoDB and SQL
              databases, JWT authentication and role-based access control, and the FMS, HRMS and workflow modules that
              automate day-to-day business processes — all built to work well on any screen size.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-12">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Quick facts</h3>
          <StaggerContainer as="dl" className="mt-5 border-t border-line" stagger={0.05}>
            {quickFacts.map((fact) => (
              <StaggerItem key={fact.label} className="flex items-baseline justify-between gap-6 border-b border-line py-3.5">
                <dt className="shrink-0 text-sm text-muted">{fact.label}</dt>
                <dd className="text-right text-sm font-medium text-fg">{fact.value}</dd>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Reveal>
      </div>
    </section>
  );
}
