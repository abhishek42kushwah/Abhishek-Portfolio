import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, id, className = "" }: SectionHeaderProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading-2 mt-4">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-secondary">{description}</p>}
    </Reveal>
  );
}
