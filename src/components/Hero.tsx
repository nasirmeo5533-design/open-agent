"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

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

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const heroImages = [
  `${assetPrefix}/portfolio/abeer-founder.jpg`,
  `${assetPrefix}/portfolio/portfolio_12.png`,
  `${assetPrefix}/portfolio/portfolio_14.png`,
  `${assetPrefix}/portfolio/portfolio13.png`,
  `${assetPrefix}/portfolio/portfolio16.png`,
  `${assetPrefix}/portfolio/portfolio17.png`,
  `${assetPrefix}/portfolio/portfolio18.png`,
  `${assetPrefix}/portfolio/portfolio19.png`,
  `${assetPrefix}/portfolio/portfolio20.png`,
  `${assetPrefix}/portfolio/portfolio21.png`,
];

const imageContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const imageItem: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

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

          {/* Work showcase collage */}
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
            <motion.div
              variants={imageContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative grid auto-rows-[90px] grid-flow-dense grid-cols-3 gap-3"
            >
              {heroImages.map((src, i) => {
                const featured = i === 0;
                return (
                  <motion.div
                    key={src}
                    variants={imageItem}
                    className={[
                      "group relative overflow-hidden rounded-2xl border border-white/10 shadow-card",
                      featured ? "col-span-2 row-span-2" : "",
                      i === 5 ? "col-span-2" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Image
                      src={src}
                      alt={`Open Agent work ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
