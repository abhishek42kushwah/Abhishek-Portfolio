import { experience } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section border-t border-line" aria-labelledby="experience-heading">
      <div className="container-page">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience"
          title="Professional Experience"
          description="Where I've worked and what I've built — from REST APIs during my internship to enterprise ERP modules today."
        />

        <ol className="mt-14">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.company}
              delay={i * 0.05}
              className="relative grid gap-4 border-l border-line pb-14 pl-7 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10 md:border-l-0 md:pl-0"
            >
              {/* Meta column */}
              <div className="md:pt-0.5 md:text-right">
                <p className="font-mono text-xs text-fg">{job.period}</p>
                <p className="mt-1 text-xs text-muted">
                  {job.location} · {job.type}
                </p>
              </div>

              {/* Timeline rail (desktop) */}
              <span className="absolute bottom-0 left-[219px] top-2 hidden w-px bg-line md:block" aria-hidden />
              <span
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border md:left-[215px] ${
                  job.current ? "border-accent bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.15)]" : "border-line-strong bg-background"
                }`}
                aria-hidden
              />

              {/* Content */}
              <div className="md:pl-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{job.role}</h3>
                  {job.current && (
                    <span className="rounded-md border border-success/25 bg-success/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-success">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[15px] text-secondary">{job.company}</p>

                <ul className="mt-5 max-w-3xl space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-secondary">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-muted" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Technologies used at ${job.company}`}>
                  {job.stack.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
