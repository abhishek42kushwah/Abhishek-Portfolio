import { services } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "./ui/Stagger";

export function Services() {
  return (
    <section id="services" className="section border-y border-line bg-surface/50" aria-labelledby="services-heading">
      <div className="container-page">
        <SectionHeader id="services-heading" eyebrow="Services" title="What I Can Build" />

        {/* gap-px over a border-coloured background draws hairline dividers between cells */}
        <StaggerContainer
          as="ul"
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {services.map((service, i) => (
            <StaggerItem
              as="li"
              key={service.title}
              className="group relative bg-background p-6 transition-colors duration-300 hover:bg-surface-hover sm:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <p className="font-mono text-xs text-muted transition-colors group-hover:text-accent-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-fg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{service.body}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
