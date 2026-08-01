"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Bot, ShoppingCart, Star, TrendingUp } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const proofChips = [
  "30 sales / PKR 1,000 budget",
  "Meta & Google Ads",
  "AI Agents & Automation",
];

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="band-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-800/50 via-navy-900 to-navy-950"
        />
        <div
          aria-hidden="true"
          className="bg-vignette pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="bg-vignette pointer-events-none absolute -left-40 -top-24 h-[420px] w-[420px] blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={item} className="eyebrow">
              AI-Powered Digital Marketing Agency in Pakistan
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 font-extrabold text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              We don&apos;t just market your store.{" "}
              <span className="block text-orange-core">We automate it.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              A six-person growth team that runs your marketing, content, and
              ads with AI — so your store grows while you sleep. Small budgets
              welcome.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#contact" className="btn-primary">
                Get Your Growth Plan
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="btn-outline-light">
                See Our Work
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span
                  aria-hidden="true"
                  className="flex items-center gap-0.5"
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-orange-core"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <span className="text-sm font-semibold text-white/70">
                  Rated 4.8 / 5 — 200+ satisfied store owners
                </span>
              </p>
              <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-white/70">
                {proofChips.map((chip, i) => (
                  <li key={chip} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-orange-core">
                        •
                      </span>
                    )}
                    {chip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Mini dashboard visual */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange-core/25 via-transparent to-navy-500/25 blur-2xl"
            />
            <div className="card-dark relative p-5 md:p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-white">
                  Live Store Snapshot
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />
                  Live
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-navy-900/70 p-3.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-core/15 text-orange-core">
                    <TrendingUp aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-white/50">
                    Revenue
                  </p>
                  <p className="text-lg font-extrabold text-white">+312%</p>
                </div>
                <div className="rounded-xl bg-navy-900/70 p-3.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-core/15 text-orange-core">
                    <ShoppingCart aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-white/50">
                    Orders
                  </p>
                  <p className="text-lg font-extrabold text-white">47</p>
                </div>
                <div className="rounded-xl bg-navy-900/70 p-3.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-core/15 text-orange-core">
                    <Bot aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-white/50">
                    AI Agent
                  </p>
                  <p className="text-lg font-extrabold text-white">Active</p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white/70">
                    Ad spend used this week
                  </span>
                  <span className="font-extrabold text-orange-core">68%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy-900/80">
                  <div
                    aria-hidden="true"
                    className="h-full w-[68%] rounded-full bg-gradient-to-r from-orange-core to-orange-bright"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
