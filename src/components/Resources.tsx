"use client";

import { motion, type Variants } from "framer-motion";
import {
  BookOpen,
  Brain,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HexCard } from "@/components/ui/HexCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Resource = {
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
  variant: "primary" | "outline";
  muted?: boolean;
};

const resources: Resource[] = [
  {
    tag: "Free ebook",
    title: "Why Businesses Fail at Digital Marketing",
    description:
      "The mistakes that quietly kill marketing budgets — and how to avoid them.",
    ctaLabel: "Read free",
    href: "https://bit.ly/44sikZs",
    icon: BookOpen,
    variant: "primary",
  },
  {
    tag: "Free ebook",
    title: "The Generative AI Specialist – Complete Guide",
    description:
      "A practical walkthrough of working with LLMs for business outcomes.",
    ctaLabel: "Read free",
    href: "https://bit.ly/4fmnlYC",
    icon: Brain,
    variant: "primary",
  },
  {
    tag: "Archive",
    title: "Past work & projects",
    description:
      "Client campaigns, store builds and AI systems from the archive.",
    ctaLabel: "Visit archive",
    href: "https://bit.ly/4fg4LRR",
    icon: ExternalLink,
    variant: "outline",
    muted: true,
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  return (
    <motion.li variants={item} className="h-full">
      <HexCard
        className="group relative flex h-full flex-col p-8 hover:-translate-y-1.5 md:p-10"
        style={
          resource.muted ? { borderColor: "rgba(122, 59, 0, 0.4)" } : undefined
        }
      >
        <div className="flex items-start justify-between gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange-dim bg-panel text-orange-core transition-colors duration-300 group-hover:text-orange-bright"
          >
            <Icon strokeWidth={1.5} className="h-5 w-5" />
          </span>
          <span className="eyebrow pt-1 transition-colors duration-300 group-hover:text-orange-bright">
            {resource.tag}
          </span>
        </div>
        <h3 className="mt-7 font-display text-2xl leading-snug text-paper">
          {resource.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-body">
          {resource.description}
        </p>
        <ButtonLink
          href={resource.href}
          variant={resource.variant}
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 self-start"
        >
          {resource.ctaLabel}
        </ButtonLink>
      </HexCard>
    </motion.li>
  );
}

export function Resources() {
  return (
    <SectionWrapper
      id="resources"
      className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <header className="max-w-2xl">
          <Eyebrow>Resources</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-paper md:text-5xl xl:text-6xl">
            Free knowledge,
            <span className="block text-orange-core">
              built on real work.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
            Books and past work that show how I think &mdash; no paywalls, no
            fluff.
          </p>
        </header>

        <ConnectorLine className="mt-12 max-w-[216px] md:mt-14" />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 md:mt-14 lg:grid-cols-3"
        >
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </motion.ul>

        <p className="mt-12 text-sm text-gray-body">
          More writing, case studies and experiments land here over time.
        </p>
      </div>
    </SectionWrapper>
  );
}
