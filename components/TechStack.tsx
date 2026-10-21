import type { IconType } from "react-icons";
import {
  SiAmazons3,
  SiAxios,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { techStack } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { StaggerContainer, StaggerItem } from "./ui/Stagger";

const icons: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  "Redux Toolkit": SiRedux,
  "TanStack Query": SiReactquery,
  "React Router": SiReactrouter,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  Bootstrap: SiBootstrap,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  NestJS: SiNestjs,
  JWT: SiJsonwebtokens,
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  PostgreSQL: SiPostgresql,
  Sequelize: SiSequelize,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Docker: SiDocker,
  Vercel: SiVercel,
  Vite: SiVite,
  Axios: SiAxios,
  "AWS S3": SiAmazons3,
};

export function TechStack() {
  return (
    <section id="skills" className="section overflow-x-clip border-y border-line bg-surface/50" aria-labelledby="skills-heading">
      <div className="container-page">
        <SectionHeader
          id="skills-heading"
          eyebrow="Skills"
          title="Technology I work with"
          description="The tools I use in production, grouped by where they sit in the stack. Hover or focus a highlighted item to see where I've used it."
        />

        <div className="mt-12 border-t border-line">
          {techStack.map((group, gi) => (
            <Reveal
              key={group.group}
              delay={gi * 0.05}
              className="grid gap-4 border-b border-line py-6 md:grid-cols-[180px_1fr] md:gap-8 md:py-7"
            >
              <h3 className="flex items-center gap-3 self-start text-sm font-medium text-fg md:pt-2">
                <span className="font-mono text-xs text-muted">0{gi + 1}</span>
                {group.group}
              </h3>
              <StaggerContainer as="ul" className="flex flex-wrap gap-2" stagger={0.035}>
                {group.items.map((tech) => {
                  const Icon = icons[tech.name];
                  return (
                    <StaggerItem as="li" key={tech.name} className="group relative">
                      <span
                        tabIndex={tech.note ? 0 : undefined}
                        aria-describedby={tech.note ? `tech-${slug(tech.name)}` : undefined}
                        className={`inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-background px-3 text-sm text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-fg ${
                          tech.note ? "cursor-help focus-visible:text-fg" : ""
                        }`}
                      >
                        {Icon && <Icon className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:opacity-100 group-hover:scale-110" aria-hidden />}
                        {tech.name}
                        {tech.note && <span className="h-1 w-1 rounded-full bg-accent/80" aria-hidden />}
                      </span>
                      {tech.note && (
                        <span
                          id={`tech-${slug(tech.name)}`}
                          role="tooltip"
                          className="pointer-events-none absolute bottom-[calc(100%+8px)] left-0 z-20 invisible w-max max-w-[min(240px,calc(100vw-48px))] translate-y-1 rounded-lg border border-line-strong bg-surface-raised px-3 py-2 text-xs leading-snug text-secondary opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                        >
                          {tech.note}
                        </span>
                      )}
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
