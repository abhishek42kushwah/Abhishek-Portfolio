"use client";

import { m, type Variants } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child's entrance, in seconds. */
  stagger?: number;
  /** Delay before the first child starts, in seconds. */
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
  once?: boolean;
};

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Reveals its children as a group, staggering each StaggerItem as the group scrolls into view. */
export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = "div",
  once = true,
}: StaggerContainerProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      variants={containerVariants(stagger, delay)}
    >
      {children}
    </Component>
  );
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type StaggerItemProps = { children: React.ReactNode; className?: string; as?: "div" | "li" | "article" };

/** One entry in a StaggerContainer. Must be a direct child to inherit its timing. */
export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Component = m[as];
  return (
    <Component className={className} variants={staggerItemVariants}>
      {children}
    </Component>
  );
}
