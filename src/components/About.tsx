"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Coins, Cpu, ShoppingBag, Users, type LucideIcon } from "lucide-react";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlowCard } from "@/components/ui/GlowCard";
import { PulseNode } from "@/components/ui/PulseNode";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Fact = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const facts: Fact[] = [
  {
    title: "AI-integrated",
    description: "Every service runs on AI under the hood.",
    icon: Cpu,
  },
  {
    title: "Small budgets",
    description: "We prove results before you scale.",
    icon: Coins,
  },
  {
    title: "No handoffs",
    description: "One team owns your growth.",
    icon: Users,
  },
  {
    title: "Built for D2C",
    description: "E-commerce is all we do.",
    icon: ShoppingBag,
  },
];

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-28 h-80 w-80 bg-vignette opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 bg-vignette opacity-50"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10 xl:px-16">
        <header className="max-w-2xl">
          <Eyebrow>WHY US</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-paper md:text-5xl">
            Six people. One growth system.
          </h2>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <blockquote className="relative font-display text-2xl leading-snug text-paper md:text-4xl">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-10 select-none text-7xl leading-none text-orange-core/60"
            >
              “
            </span>
            <p className="relative font-normal">
              We don’t just{" "}
              <em className="italic text-orange-core">market your store</em>.{" "}
              We <em className="italic text-orange-core">automate it</em>.
            </p>
          </blockquote>

          <div className="max-w-xl">
            <p className="text-sm leading-relaxed text-gray-body md:text-base">
              Most agencies hand you off to one account manager. We give you a
              full team — marketing, SEO, content, AI, and video — working on
              one connected system.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-body md:text-base">
              Everything talks to everything. Nothing gets lost.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ConnectorLine className="mt-14 max-w-[216px]" />
          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-body">
            <PulseNode size="sm" />
            <span>Karachi.</span>
            <PulseNode size="sm" />
            <span>Remote worldwide.</span>
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlowCard className="h-full">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-dim bg-panel text-orange-core"
                  >
                    <Icon strokeWidth={1.5} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-paper">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-body">
                    {description}
                  </p>
                </GlowCard>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
