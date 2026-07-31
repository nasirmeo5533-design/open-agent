"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HexCard } from "@/components/ui/HexCard";
import { PulseNode } from "@/components/ui/PulseNode";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  featured?: boolean;
};

const stats: Stat[] = [
  {
    value: 30,
    label: "qualified sales from a PKR 1,000 ad budget",
    featured: true,
  },
  {
    value: 6,
    label: "leads from a PKR 2,000 campaign",
  },
  {
    value: 3,
    suffix: "+",
    label: "industries automated",
  },
  {
    value: 8,
    suffix: "+",
    label: "brands running on the system",
  },
];

function StatNumber({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    setDisplay(0);
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function ProofDot() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return (
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 rounded-full bg-orange-core"
      />
    );
  }
  return <PulseNode size="sm" />;
}

export function Impact() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="impact"
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 xl:px-16">
        <header className="max-w-2xl">
          <Eyebrow>IMPACT</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-paper md:text-5xl">
            Proof over promises.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
            Small budgets. Real numbers. No inflated screenshots.
          </p>
        </header>

        <ul
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 xl:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.li
              key={stat.label}
              className="h-full"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <HexCard
                className={cn(
                  "relative flex h-full flex-col p-6 md:p-8",
                  stat.featured && "border-orange-dim",
                  stat.featured && !reduceMotion && "animate-pulse-glow"
                )}
              >
                {stat.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-vignette opacity-60"
                  />
                )}
                <p
                  className={cn(
                    "relative font-display text-6xl leading-[0.95] md:text-7xl",
                    stat.featured ? "text-orange-core" : "text-paper"
                  )}
                >
                  <StatNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <h3 className="relative mt-auto pt-6 text-sm leading-relaxed text-gray-body">
                  {stat.label}
                </h3>
              </HexCard>
            </motion.li>
          ))}
        </ul>

        <p className="relative mt-10 flex max-w-xl flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-relaxed text-gray-body md:mt-12">
          <ProofDot />
          <span>Fashion.</span>
          <ProofDot />
          <span>Home goods.</span>
          <ProofDot />
          <span>Cosmetics.</span>
          <span className="text-paper">If you sell online, the system works.</span>
        </p>
      </div>
    </SectionWrapper>
  );
}
