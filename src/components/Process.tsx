"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ClipboardList,
  Rocket,
  Search,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlowCard } from "@/components/ui/GlowCard";
import { PulseNode } from "@/components/ui/PulseNode";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  icon: LucideIcon;
  lines: string[];
};

const steps: Step[] = [
  {
    title: "Audit",
    icon: Search,
    lines: [
      "We read your store, your ads, and your numbers.",
      "We find what is working and where the money leaks.",
    ],
  },
  {
    title: "Plan",
    icon: ClipboardList,
    lines: [
      "You get one clear growth system.",
      "One page. No jargon. Every move has a reason.",
    ],
  },
  {
    title: "Build",
    icon: Wrench,
    lines: [
      "We set up the automation and the campaigns.",
      "AI agents, funnels, and content — all connected.",
    ],
  },
  {
    title: "Launch",
    icon: Rocket,
    lines: [
      "Everything goes live. Everything is tracked.",
      "You see real numbers on a live dashboard.",
    ],
  },
  {
    title: "Grow",
    icon: TrendingUp,
    lines: [
      "We optimize every week.",
      "You watch the numbers climb. We handle the rest.",
    ],
  },
];

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const listRise: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Process() {
  return (
    <MotionConfig reducedMotion="user">
      <SectionWrapper
        id="process"
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
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-paper md:text-5xl">
              Five steps to a store that runs itself.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
              No mystery. No jargon. You always know what happens next.
            </p>
          </motion.div>

          <div className="relative mt-16 md:mt-20 xl:mt-24">
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-[15px] w-0.5 xl:left-1/2 xl:-translate-x-1/2"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #FF6A00 1.5px, transparent 2px)",
                backgroundSize: "2px 12px",
                backgroundRepeat: "repeat-y",
                filter: "drop-shadow(0 0 6px rgba(255,106,0,0.6))",
                transformOrigin: "top",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />

            <motion.ol
              aria-label="Our five-step process"
              variants={listRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative space-y-12 md:space-y-16"
            >
              {steps.map((step, i) => {
                const onLeft = i % 2 === 0;
                const Icon = step.icon;
                const number = String(i + 1).padStart(2, "0");
                return (
                  <motion.li
                    key={step.title}
                    variants={itemRise}
                    className={cn(
                      "relative pl-14 md:pl-16 xl:w-1/2 xl:pl-0",
                      onLeft ? "xl:pr-20" : "xl:ml-auto xl:pl-20"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-[11px] top-2 flex h-2.5 w-2.5 items-center justify-center xl:-translate-x-1/2",
                        onLeft ? "xl:left-full" : "xl:left-0"
                      )}
                    >
                      <PulseNode size="sm" />
                    </span>

                    <GlowCard className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="clip-hex-sm flex h-12 w-12 shrink-0 items-center justify-center border border-orange-dim bg-panel"
                        >
                          <span className="font-display text-sm text-orange-bright">
                            {number}
                          </span>
                        </span>
                        <div className="flex items-center gap-3 pt-2">
                          <Icon
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="h-5 w-5 text-orange-core"
                          />
                          <h3 className="font-display text-2xl leading-snug text-paper">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <ConnectorLine className="my-5" />
                      <div className="space-y-1">
                        {step.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-relaxed text-gray-body"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </GlowCard>
                  </motion.li>
                );
              })}
            </motion.ol>

            <motion.div
              variants={itemRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative mt-16 flex flex-col items-center text-center md:mt-20"
            >
              <PulseNode size="lg" />
              <p className="mt-6 font-display text-2xl text-orange-core md:text-3xl">
                Five steps. One system. No guesswork.
              </p>
              <ButtonLink
                href="#contact"
                variant="primary"
                size="lg"
                className="mt-8"
              >
                Start with step one
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </MotionConfig>
  );
}
