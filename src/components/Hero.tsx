"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PulseNode } from "@/components/ui/PulseNode";

const keywords = [
  "AI Agents",
  "Meta Ads",
  "SEO",
  "Automation",
  "Video",
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % keywords.length),
      2600
    );
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const current = reducedMotion ? 0 : index;

  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-vignette pointer-events-none absolute left-1/2 top-[38%] h-[560px] w-[min(92vw,880px)] -translate-x-1/2 -translate-y-1/2 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="bg-vignette pointer-events-none absolute right-[-140px] top-[-60px] h-[360px] w-[360px] blur-3xl"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1280px] flex-col justify-center px-4 py-24 sm:px-8 md:py-32 lg:px-16"
        >
          <motion.div variants={item}>
            <Eyebrow className="text-orange-core">
              E-Commerce Growth Team
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl md:text-6xl"
          >
            We don&apos;t just market your store. We{" "}
            <span className="italic text-orange-core">automate</span> it.
          </motion.h1>

          <motion.div variants={item} className="mt-8">
            <div className="clip-hex-sm inline-flex items-center gap-3 border border-orange-dim bg-elevated px-4 py-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-orange-core"
              />
              <span className="sr-only">Focus areas: {keywords.join(", ")}</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={keywords[current]}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-orange-bright sm:text-sm"
                >
                  {keywords[current]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-sm leading-relaxed text-gray-body sm:text-base md:text-lg"
          >
            A six-person team that runs your marketing, content, and ads with
            AI — so your store grows while you sleep.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#contact" variant="primary" size="lg">
              Get our growth plan
            </ButtonLink>
            <ButtonLink href="#services" variant="outline" size="lg">
              See our services
            </ButtonLink>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 flex items-center gap-3 text-xs text-gray-body sm:text-sm"
          >
            <PulseNode size="sm" />
            30 qualified sales from a PKR 1,000 ad budget.
          </motion.p>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
