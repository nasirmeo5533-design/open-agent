"use client";

import { motion, MotionConfig, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Active clients on the system" },
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 6, label: "Specialists on your team" },
  { value: 3, suffix: "+", label: "Industries automated" },
];

function StatNumber({ value }: { value: number }) {
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
    </span>
  );
}

export function Impact() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="impact" className="band-navy py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.header
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow text-white">IMPACT</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Proof over promises.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              Small budgets. Real numbers. No inflated screenshots.
            </p>
          </motion.header>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/10 md:mt-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-5xl font-extrabold text-white md:text-6xl">
                  <StatNumber value={stat.value} />
                  {stat.suffix && (
                    <span className="text-orange-core">{stat.suffix}</span>
                  )}
                </p>
                <h3 className="mt-3 text-sm leading-snug text-white/70">
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
