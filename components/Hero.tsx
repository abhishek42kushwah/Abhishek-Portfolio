import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile, socials } from "@/lib/data";
import { CodeWindow } from "./CodeWindow";

const stagger = (i: number) => ({ animationDelay: `${i * 70}ms` });

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background: faint grid + one soft accent wash, both static */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-[100%] bg-accent/[0.10] blur-[120px]"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 pb-16 pt-28 sm:pt-32 md:pb-20 lg:min-h-[min(calc(100svh-104px),800px)] lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-16 lg:pt-24">
        <div>
          <p
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-secondary"
            style={stagger(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            Available for opportunities
          </p>

          <h1
            id="hero-heading"
            className="mt-6 animate-fade-up text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.1rem]"
            style={stagger(1)}
          >
            {profile.name}
          </h1>

          <p
            className="mt-4 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium text-secondary sm:text-xl"
            style={stagger(2)}
          >
            <span className="text-fg">{profile.role}</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted sm:block" aria-hidden />
            <span>{profile.experience} experience</span>
          </p>

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-secondary sm:text-[17px]" style={stagger(3)}>
            I build scalable, production-ready web applications and business platforms using{" "}
            <span className="text-fg">React, Node.js, Express, MongoDB and TypeScript.</span>
          </p>
          <p className="mt-3 max-w-xl animate-fade-up text-base leading-relaxed text-secondary sm:text-[17px]" style={stagger(4)}>
            Experienced in building ERP, FMS, HRMS and workflow-driven business applications.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row" style={stagger(5)}>
            <a href="#projects" className="btn-primary group">
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href={profile.resume} download={profile.resumeFileName} className="btn-secondary">
              <FiDownload aria-hidden />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex animate-fade-up items-center gap-5 text-sm text-secondary" style={stagger(6)}>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              <FiGithub aria-hidden /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              <FiLinkedin aria-hidden /> LinkedIn
            </a>
            <span className="hidden items-center gap-2 text-muted sm:inline-flex">
              <span className="h-1 w-1 rounded-full bg-muted" aria-hidden />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="hidden animate-fade-up md:block" style={stagger(4)}>
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
