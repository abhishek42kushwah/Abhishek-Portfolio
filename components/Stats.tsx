import { stats } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "./ui/Stagger";
import { CountUp } from "./ui/CountUp";

export function Stats() {
  return (
    <section aria-label="Professional summary" className="border-y border-line bg-surface/60">
      <StaggerContainer as="dl" className="container-page grid grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        {stats.map((stat, i) => {
          const numeric = /^\d+$/.test(stat.value);
          return (
            <StaggerItem
              key={stat.label}
              className={`flex flex-col-reverse justify-end gap-1.5 py-7 sm:py-8 ${
                i % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : "pr-5 lg:pr-8"
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dt className="text-xs text-muted sm:text-sm">{stat.label}</dt>
              <dd className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                {numeric ? <CountUp value={Number(stat.value)} /> : stat.value}
              </dd>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
