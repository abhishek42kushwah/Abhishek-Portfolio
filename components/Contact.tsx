import type { IconType } from "react-icons";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { profile, socials } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { StaggerContainer, StaggerItem } from "./ui/Stagger";
import { ContactForm } from "./ContactForm";

type Detail = { icon: IconType; label: string; value: string; href?: string; external?: boolean };

const details: Detail[] = [
  { icon: FiMail, label: "Email", value: profile.email, href: socials.email },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: FiMapPin, label: "Location", value: profile.locationFull },
  { icon: FiLinkedin, label: "LinkedIn", value: socials.linkedinHandle, href: socials.linkedin, external: true },
  { icon: FiGithub, label: "GitHub", value: socials.githubHandle, href: socials.github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="section border-t border-line" aria-labelledby="contact-heading">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal className="min-w-0">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className="heading-2 mt-4">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-secondary">
            Have a project, opportunity or idea? Feel free to reach out.
          </p>

          <StaggerContainer as="ul" className="mt-10 border-t border-line" stagger={0.06}>
            {details.map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <>
                  <Icon className="shrink-0 text-muted transition-colors group-hover:text-fg" aria-hidden />
                  <span className="w-20 shrink-0 text-sm text-muted">{label}</span>
                  <span className="min-w-0 flex-1 truncate text-sm text-fg">{value}</span>
                  {href && (
                    <FiArrowUpRight
                      className="shrink-0 text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  )}
                </>
              );
              return (
                <StaggerItem as="li" key={label} className="border-b border-line">
                  {href ? (
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-center gap-4 py-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{inner}</div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
