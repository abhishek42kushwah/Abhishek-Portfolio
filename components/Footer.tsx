import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, socials } from "@/lib/data";

const links = [
  { label: "GitHub", href: socials.github, icon: FiGithub, external: true },
  { label: "LinkedIn", href: socials.linkedin, icon: FiLinkedin, external: true },
  { label: "Email", href: socials.email, icon: FiMail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-fg">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="mt-1 text-xs text-muted">Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
        <ul className="flex items-center gap-1">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm text-secondary transition-colors hover:bg-white/5 hover:text-fg"
              >
                <Icon aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
