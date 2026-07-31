"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const titles = [
  "Generative AI Specialist",
  "AI Agent Developer",
  "Digital Marketing Specialist",
  "Meta Ads Expert",
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
      () => setIndex((i) => (i + 1) % titles.length),
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
            <Eyebrow className="flex items-center gap-2">
              <MapPin
                aria-hidden="true"
                strokeWidth={1.5}
                className="h-3.5 w-3.5 text-orange-core"
              />
              Karachi, Sindh, Pakistan
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Abeer <span className="text-orange-core">Nasir</span>
          </motion.h1>

          <motion.div variants={item} className="mt-8">
            <div className="clip-hex-sm inline-flex items-center gap-3 border border-orange-dim bg-elevated px-4 py-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-orange-core"
              />
              <span className="sr-only">Roles: {titles.join(", ")}</span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={titles[current]}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-orange-bright sm:text-sm"
                >
                  {titles[current]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-display text-2xl leading-snug text-paper sm:text-3xl md:text-4xl lg:text-5xl"
          >
            I turn AI into{" "}
            <span className="block text-orange-core">
              real business outcomes.
            </span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-sm leading-relaxed text-gray-body sm:text-base md:text-lg"
          >
            Self-taught since 2023 through real client work — AI automation,
            Meta Ads and Shopify for e-commerce and D2C brands. Based in
            Karachi, Pakistan.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#services" variant="primary" size="lg">
              View my work
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" size="lg">
              Get in touch
            </ButtonLink>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
