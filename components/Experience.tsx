"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section border-t border-line" aria-labelledby="experience-heading">
      <div className="container-page">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience"
          title="Professional Experience"
          description="Where I've worked and what I've built — from REST APIs during my internship to enterprise ERP modules today."
        />

        <div ref={trackRef} className="relative mt-14">
          {/* Progress rail (desktop): static track + scroll-linked accent fill tracking how far you've read */}
          <span className="pointer-events-none absolute left-[219px] top-2 bottom-0 hidden w-px bg-line md:block" aria-hidden />
          {!reduceMotion && (
            <>
              <m.span
                className="pointer-events-none absolute left-[219px] top-2 hidden w-px origin-top bg-accent md:block"
                style={{ height: fillHeight }}
                aria-hidden
              />
              <m.span
                className="pointer-events-none absolute left-[219px] top-2 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_rgb(var(--accent)/0.18),0_0_14px_2px_rgb(var(--accent)/0.5)] md:block"
                style={{ top: dotTop }}
                aria-hidden
              />
            </>
          )}

          <ol>
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
      </div>
    </section>
  );
}
