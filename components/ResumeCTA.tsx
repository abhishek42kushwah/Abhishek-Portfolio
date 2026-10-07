import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function ResumeCTA() {
  return (
    <section className="pb-20 md:pb-28" aria-labelledby="resume-heading">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-card border border-line bg-surface p-8 sm:p-12">
          {/* single soft accent edge — the only gradient in this section */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm text-secondary">Looking for a developer who can build beyond the UI?</p>
              <h2 id="resume-heading" className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Let&apos;s build something useful.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Resume <FiArrowUpRight aria-hidden />
              </a>
              <a href={profile.resume} download={profile.resumeFileName} className="btn-secondary">
                <FiDownload aria-hidden /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
