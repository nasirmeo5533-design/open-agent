"use client";

import { motion, type Variants } from "framer-motion";
import { ShoppingBag, Sparkles, Target } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { PulseNode } from "@/components/ui/PulseNode";

const topSkills: Array<{ label: string; icon: typeof Target }> = [
  { label: "Meta Ads", icon: Target },
  { label: "Shopify", icon: ShoppingBag },
  { label: "AI-Driven Content", icon: Sparkles },
];

const secondarySkills = ["Generative AI", "AI Agents", "No-Code Automation"];

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
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const chipRise: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About() {
  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-28 h-80 w-80 bg-vignette opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 bg-vignette opacity-50"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl xl:text-6xl">
            <span className="block text-paper">Self-taught,</span>
            <span className="block italic text-orange-core">
              client-proofed.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-14 md:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <blockquote className="relative font-display text-2xl leading-snug text-paper md:text-3xl">
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-10 select-none text-7xl leading-none text-orange-core/60"
              >
                “
              </span>
              <p className="relative font-normal">
                I started learning{" "}
                <em className="italic text-orange-core">Generative AI</em> in
                2023 — self-taught through{" "}
                <em className="italic text-orange-core">
                  real client projects
                </em>
                , not a fixed roadmap. I help businesses use AI and digital
                marketing to improve workflows, online presence, and how they
                use technology.
              </p>
            </blockquote>
            <ConnectorLine className="mt-10 max-w-[216px]" />
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-xl">
              <p className="text-base leading-relaxed text-gray-body md:text-lg">
                I work with e-commerce and D2C brands — mostly perfume and
                beauty — on Shopify setup and optimization, Meta Ads,
                AI-assisted content, and business process automation built with
                no-code AI tools.
              </p>
              <p className="mt-5 text-base leading-relaxed text-gray-body md:text-lg">
                My focus is simple: build AI-powered systems for marketing and
                operations that show numbers, not guesswork.
              </p>
            </div>

            <motion.ul
              variants={listRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              aria-label="Skills"
              className="mt-10 flex flex-wrap items-center gap-2"
            >
              {topSkills.map(({ label, icon: Icon }) => (
                <motion.li
                  key={label}
                  variants={chipRise}
                  className="group inline-flex items-center gap-2 rounded-full border border-orange-dim bg-elevated px-4 py-2 text-sm font-medium text-orange-bright transition-colors duration-300 hover:border-orange-core hover:bg-panel hover:shadow-glow"
                >
                  <Icon
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-orange-bright transition-colors duration-300 group-hover:text-orange-core"
                  />
                  {label}
                </motion.li>
              ))}
              {secondarySkills.map((label) => (
                <motion.li
                  key={label}
                  variants={chipRise}
                  className="inline-flex items-center rounded-full border border-orange-dim/40 bg-elevated px-4 py-2 text-xs font-medium text-orange-bright/85 transition-colors duration-300 hover:border-orange-dim hover:text-orange-bright"
                >
                  {label}
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-10 flex flex-wrap items-center gap-2 text-sm text-gray-body">
              <span>3+ years hands-on</span>
              <PulseNode size="sm" />
              <span>8+ services delivered</span>
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
