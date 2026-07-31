"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { LineChart, Package, Target, type LucideIcon } from "lucide-react";

type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Personalized Business Packages",
    icon: Package,
    description:
      "Plans built around your budget and goals. Startups and small stores welcome. We prove results before you scale.",
  },
  {
    title: "Customized Approach",
    icon: Target,
    description:
      "One connected system across SEO, ads, content, and AI. We work with Shopify, WooCommerce, WordPress, and custom builds.",
  },
  {
    title: "Results-Driven Solutions",
    icon: LineChart,
    description:
      "Data you can see every week. Campaigns optimized for performance and ROI — not inflated screenshots.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WhyUs() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="why" className="band-cloud scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p variants={item} className="eyebrow">
              Why Open Agent
            </motion.p>
            <motion.h2
              variants={item}
              className="mt-4 text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl"
            >
              Why Open Agent? Our expertise and commitment to your success.
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-5 text-base leading-relaxed text-slate-600"
            >
              The right team behind your store means the difference between
              guesswork and growth you can measure.
            </motion.p>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.li key={reason.title} variants={item} className="h-full">
                  <article className="card card-hover flex h-full flex-col items-center p-7 text-center">
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-core bg-white text-orange-core shadow-card"
                    >
                      <Icon strokeWidth={1.75} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-navy-900">
                      {reason.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-orange-core to-orange-bright"
                    />
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {reason.description}
                    </p>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-16 flex flex-col items-center"
          >
            <span
              aria-hidden="true"
              className="block h-1 w-16 rounded-full bg-gradient-to-r from-orange-core to-orange-bright"
            />
            <a href="#contact" className="btn-primary mt-8">
              Contact Now
            </a>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
