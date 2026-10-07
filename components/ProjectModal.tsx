"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiX } from "react-icons/fi";
import type { Project } from "@/lib/data";

type Props = {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  nextTitle: string;
};

export function ProjectModal({ project, onClose, onNext, nextTitle }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = project !== null;

  // Scroll lock, Escape to close, and a simple focus trap
  useEffect(() => {
    if (!isOpen) return;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  // Focus the panel and reset its scroll when the project changes
  useEffect(() => {
    if (!project || !panelRef.current) return;
    panelRef.current.scrollTop = 0;
    panelRef.current.focus();
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <m.div
          key="overlay"
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-t-2xl border border-line-strong bg-surface outline-none sm:max-h-[88vh] sm:rounded-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-surface/90 px-5 py-3.5 backdrop-blur-md sm:px-8">
              <p className="truncate font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Case study · {project.category}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-secondary transition-colors hover:border-line-strong hover:text-fg"
              >
                <FiX size={16} />
              </button>
            </div>

            <div className="px-5 pb-8 pt-6 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id="project-modal-title" className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                    {project.title}
                  </h2>
                  {project.role && <p className="mt-1.5 text-sm text-secondary">My role: {project.role}</p>}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary h-10 self-start sm:self-auto"
                >
                  Visit live site <FiArrowUpRight aria-hidden />
                </a>
              </div>

              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-line">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8 grid gap-8">
                <Block title="Overview">
                  <p className="leading-relaxed text-secondary">{project.overview}</p>
                </Block>

                <Block title="Key features">
                  <List items={project.features} />
                </Block>

                {project.stack && (
                  <Block title="Tech stack">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <li key={t} className="chip text-xs">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </Block>
                )}

                {project.implementation && (
                  <Block title="Implementation">
                    <List items={project.implementation} />
                  </Block>
                )}

                {project.challenges && (
                  <Block title="Challenges">
                    <div className="grid gap-3">
                      {project.challenges.map((c) => (
                        <div key={c.challenge} className="rounded-xl border border-line bg-background/60 p-4">
                          <p className="text-sm font-medium text-fg">{c.challenge}</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-secondary">{c.approach}</p>
                        </div>
                      ))}
                    </div>
                  </Block>
                )}
              </div>

              <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-5 text-sm">
                <button type="button" onClick={onClose} className="text-secondary transition-colors hover:text-fg">
                  Close
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="group inline-flex min-w-0 items-center gap-2 text-fg"
                >
                  <span className="text-muted">Next:</span>
                  <span className="truncate">{nextTitle}</span>
                  <FiArrowRight className="shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </button>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-6">
      <h3 className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-secondary">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
