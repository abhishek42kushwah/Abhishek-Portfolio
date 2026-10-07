"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile, socials } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — highlight the section in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...navLinks.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        elevated
          ? "border-line bg-background/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-[var(--nav-height)] items-center justify-between" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-surface-raised font-mono text-xs font-semibold text-fg transition-colors group-hover:border-accent/60">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-fg sm:inline md:hidden lg:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active === link.id ? "text-fg" : "text-secondary hover:text-fg"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-md text-secondary transition-colors hover:bg-white/5 hover:text-fg"
          >
            <FiGithub size={17} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-md text-secondary transition-colors hover:bg-white/5 hover:text-fg"
          >
            <FiLinkedin size={17} />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-lg border border-line-strong bg-surface-raised px-3.5 text-sm font-medium text-fg transition-colors hover:border-accent/60"
          >
            Resume
            <FiArrowUpRight size={14} aria-hidden />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg md:hidden"
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-var(--nav-height))] overflow-y-auto border-t border-line bg-background md:hidden"
          >
            <div className="container-page flex h-full flex-col py-6">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.id} className="border-b border-line">
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-2xl font-medium tracking-tight text-fg"
                    >
                      {link.label}
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  View Resume <FiArrowUpRight aria-hidden />
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FiGithub aria-hidden /> GitHub
                  </a>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FiLinkedin aria-hidden /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
