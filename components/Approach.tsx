import { approach } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

export function Approach() {
  return (
    <section className="section" aria-labelledby="approach-heading">
      <div className="container-page">
        <SectionHeader id="approach-heading" eyebrow="Process" title="How I approach development" />

        <ol className="mt-12 grid gap-0 lg:grid-cols-5 lg:gap-6">
          {approach.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 0.06}
              className="relative grid grid-cols-[48px_1fr] gap-4 pb-8 last:pb-0 lg:block lg:pb-0"
            >
              {/* connector: vertical on mobile, horizontal on desktop */}
              {i < approach.length - 1 && (
                <span
                  className="absolute left-[15px] top-9 h-[calc(100%-36px)] w-px bg-line lg:left-11 lg:right-[-12px] lg:top-4 lg:h-px lg:w-auto"
                  aria-hidden
                />
              )}
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-surface font-mono text-xs text-fg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-semibold tracking-tight text-fg">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
