"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, Gem, LineChart, type LucideIcon } from "lucide-react";

const stats = [
  { value: "$100K", suffix: "+", label: "in client ad spend managed" },
  { value: "40", suffix: "+", label: "campaigns shipped" },
  { value: "8", suffix: "+", label: "brands on the system" },
];

const points: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Gem,
    title: "Personalized packages",
    description: "plans for every budget",
  },
  {
    icon: Code2,
    title: "Customized approach",
    description: "React, Shopify, WooCommerce, and more",
  },
  {
    icon: LineChart,
    title: "Results-driven",
    description: "data you can see every week",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="band-cloud py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={item} className="eyebrow">
              Who We Are
            </motion.p>

            <motion.h2
              variants={item}
              className="mt-4 max-w-xl font-extrabold text-3xl leading-tight text-navy-900 md:text-4xl lg:text-5xl"
            >
              Leading AI-Powered Digital Marketing Agency in Pakistan
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600"
            >
              We turn small e-commerce stores into market leaders with AI. Six
              specialists. One connected system.
            </motion.p>
            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-600"
            >
              Since 2022 we&apos;ve run Meta and Google campaigns, built AI
              agents, and automated stores for D2C brands.
            </motion.p>

            <motion.dl
              variants={item}
              className="mt-10 grid max-w-xl grid-cols-3 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
                    {stat.value}
                    <sup
                      aria-hidden="true"
                      className="font-extrabold text-orange-core"
                    >
                      {stat.suffix}
                    </sup>
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-slate-600 md:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={item}>
              <a href="#contact" className="btn-primary">
                Contact Now
              </a>
            </motion.div>

            <ul className="grid w-full gap-4">
              {points.map(({ icon: Icon, title, description }) => (
                <li key={title}>
                  <motion.div
                    variants={item}
                    className="card card-hover flex items-start gap-4 p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-core/10 text-orange-core"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{title}</h3>
                      <p className="mt-0.5 text-sm text-slate-600">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
