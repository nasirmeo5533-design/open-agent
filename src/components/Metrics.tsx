"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HexCard } from "@/components/ui/HexCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  caption?: string;
  featured?: boolean;
};

const stats: Stat[] = [
  {
    value: 30,
    label: "qualified sales on a PKR 1,000 Meta Ads budget",
    caption: "Perfume D2C brand",
    featured: true,
  },
  {
    value: 6,
    label: "qualified leads on a PKR 2,000 Meta Ads budget",
  },
  {
    value: 3,
    suffix: "+",
    label: "years of hands-on, client-driven experience",
  },
  {
    value: 8,
    suffix: "+",
    label: "services delivered across AI, ads and e-commerce",
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

export function Metrics() {
  return (
    <SectionWrapper
      id="metrics"
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <header className="max-w-2xl">
          <Eyebrow>Impact</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-paper md:text-5xl xl:text-6xl">
            <span className="block text-paper">Numbers,</span>
            <span className="block italic text-orange-core">
              not narratives.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
            Measured results from real campaigns and real client work.
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
              initial={{ opacity: 0, y: 24 }}
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
                  stat.featured && "animate-pulse-glow border-orange-dim"
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
                {stat.caption && (
                  <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-orange-bright">
                    {stat.caption}
                  </p>
                )}
                <p className="relative mt-auto pt-6 text-sm leading-relaxed text-gray-body">
                  {stat.label}
                </p>
              </HexCard>
            </motion.li>
          ))}
        </ul>

        <p className="relative mt-10 flex max-w-xl items-center gap-4 text-sm leading-relaxed text-gray-body md:mt-12">
          <span
            aria-hidden="true"
            className="h-9 w-px shrink-0 bg-orange-core shadow-glow"
          />
          Small budgets, audited results — the portfolio operates on proof over
          promises.
        </p>
      </div>
    </SectionWrapper>
  );
}
