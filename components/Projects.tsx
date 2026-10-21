"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects, type Project } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { StaggerContainer, StaggerItem } from "./ui/Stagger";
import { ProjectModal } from "./ProjectModal";

const spotlight = projects[0];
const grid = projects.slice(1, 5);
const more = projects.slice(5);

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((slug: string, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(projects.findIndex((p) => p.slug === slug));
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container-page">
        <SectionHeader
          id="projects-heading"
          eyebrow="Projects"
          title="Selected Work"
          description="Real-world applications I've worked on — from manufacturing ERPs to CRMs and AI-powered platforms. Open any project for the full breakdown."
        />

        {/* Spotlight */}
        <Reveal className="mt-12">
          <SpotlightCard project={spotlight} onOpen={open} />
        </Reveal>

        {/* Grid */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {grid.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} onOpen={open} />
            </Reveal>
          ))}
        </div>

        {/* More projects — compact rows */}
        <Reveal className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">More projects</h3>
          <StaggerContainer as="ul" className="mt-4 border-t border-line" stagger={0.06}>
            {more.map((project) => (
              <StaggerItem as="li" key={project.slug} className="group relative border-b border-line">
                <div className="grid gap-1 py-5 sm:grid-cols-[200px_1fr_auto] sm:items-center sm:gap-6">
                  <div>
                    <p className="font-medium text-fg">{project.title}</p>
                    <p className="font-mono text-[11px] text-muted">{project.category}</p>
                  </div>
                  <p className="line-clamp-2 text-sm text-secondary">{project.summary}</p>
                  <div className="mt-2 flex items-center gap-4 text-sm sm:mt-0">
                    <button
                      type="button"
                      onClick={(e) => open(project.slug, e.currentTarget)}
                      className="inline-flex items-center gap-1.5 text-fg after:absolute after:inset-0 after:content-['']"
                    >
                      Details
                      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </button>
                    <ExternalLink href={project.link} label={project.title} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Reveal>
      </div>

      <ProjectModal
        project={openIndex === null ? null : projects[openIndex]}
        onClose={close}
        onNext={() => setOpenIndex((i) => (i === null ? null : (i + 1) % projects.length))}
        nextTitle={openIndex === null ? "" : projects[(openIndex + 1) % projects.length].title}
      />
    </section>
  );
}

type CardProps = { project: Project; onOpen: (slug: string, trigger: HTMLElement) => void };

function SpotlightCard({ project, onOpen }: CardProps) {
  return (
    <article className="group relative grid overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-line-strong lg:grid-cols-[1fr_1.2fr]">
      <div className="order-2 flex flex-col p-6 sm:p-8 lg:order-1 lg:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent-light">Featured</span>
          <span className="font-mono text-[11px] text-muted">{project.category}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-secondary">{project.summary}</p>

        <ul className="mt-6 space-y-2.5 text-sm text-secondary">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        <StackList stack={project.stack} max={7} className="mt-6" />

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 text-sm">
          <OpenButton project={project} onOpen={onOpen} />
          <ExternalLink href={project.link} label={project.title} />
          {project.role && <span className="text-muted">Role: {project.role}</span>}
        </div>
      </div>

      <div className="relative order-1 aspect-[16/10] overflow-hidden border-b border-line lg:order-2 lg:aspect-auto lg:min-h-[420px] lg:border-b-0 lg:border-l">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 620px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </article>
  );
}

function ProjectCard({ project, onOpen }: CardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] text-muted">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary">{project.summary}</p>
        <StackList stack={project.stack} max={4} className="mt-5" />
        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm">
          <OpenButton project={project} onOpen={onOpen} />
          <ExternalLink href={project.link} label={project.title} />
        </div>
      </div>
    </article>
  );
}

/** Button whose ::after stretches over the whole card, so the card is clickable without nesting links. */
function OpenButton({ project, onOpen }: CardProps) {
  return (
    <button
      type="button"
      onClick={(e) => onOpen(project.slug, e.currentTarget)}
      aria-label={`Open case study: ${project.title}`}
      className="inline-flex items-center gap-1.5 font-medium text-fg after:absolute after:inset-0 after:content-['']"
    >
      Case study
      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden />
    </button>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${label} live site (opens in new tab)`}
      className="relative z-10 inline-flex items-center gap-1 text-secondary transition-colors hover:text-fg"
    >
      Live site <FiArrowUpRight aria-hidden />
    </a>
  );
}

function StackList({ stack, max, className = "" }: { stack?: string[]; max: number; className?: string }) {
  if (!stack?.length) return null;
  const shown = stack.slice(0, max);
  const rest = stack.length - shown.length;
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Tech stack">
      {shown.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
      {rest > 0 && <li className="chip text-muted">+{rest}</li>}
    </ul>
  );
}
