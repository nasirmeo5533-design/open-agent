"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HexCard } from "@/components/ui/HexCard";
import { PulseNode } from "@/components/ui/PulseNode";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type TimelineItem = {
  role: string;
  company: string;
  date: string;
  bullets: string[];
  recent: boolean;
};

const timeline: TimelineItem[] = [
  {
    role: "Generative AI Specialist",
    company: "Self-Employed",
    date: "March 2024 — Present · Karachi, Pakistan",
    recent: true,
    bullets: [
      "Designs and implements Generative AI solutions with ChatGPT, Gemini, Claude and other LLMs",
      "Prompt engineering for business-focused outputs",
      "AI automation workflows",
      "AI chatbots and virtual assistants for support and lead generation",
      "AI content for web, blog, social and email",
      "Tests, optimizes and maintains AI applications",
    ],
  },
  {
    role: "Digital Marketing Specialist",
    company: "Self-Employed",
    date: "March 2023 — Present · Karachi, Pakistan",
    recent: false,
    bullets: [
      "Plans, launches and optimizes Meta Ads (Facebook & Instagram)",
      "Audience research and campaign strategy",
      "Budget, creative and performance management",
      "Shopify store and product page optimization",
      "AI-assisted marketing content",
      "Performance monitoring and data-driven iteration",
    ],
  },
];

const stats: Array<{ value: string; label: string }> = [
  {
    value: "30",
    label: "qualified sales for an e-commerce brand — PKR 1,000 ad budget",
  },
  {
    value: "6",
    label: "qualified leads for a client — PKR 2,000 ad budget",
  },
];

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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
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

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10 xl:px-16">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl xl:text-6xl">
            <span className="block text-paper">Two roles,</span>
            <span className="block italic text-orange-core">
              one metric: results.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
            Self-employed since 2023 — designing AI systems and running ads that
            show numbers.
          </p>
        </motion.div>

        <div className="relative mt-16 md:mt-20 xl:mt-24">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[15px] w-0.5 xl:left-1/2 xl:-translate-x-1/2"
            style={{
              backgroundImage:
                "radial-gradient(circle, #FF6A00 1.5px, transparent 2px)",
              backgroundSize: "2px 12px",
              backgroundRepeat: "repeat-y",
              filter: "drop-shadow(0 0 6px rgba(255,106,0,0.6))",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          <motion.ol
            aria-label="Work history"
            variants={listRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative space-y-12 md:space-y-16"
          >
            {timeline.map((item, i) => {
              const onLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.role}
                  variants={itemRise}
                  className={cn(
                    "relative pl-14 md:pl-16 xl:w-1/2 xl:pl-0",
                    onLeft ? "xl:pr-20" : "xl:ml-auto xl:pl-20"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-[11px] top-2 flex h-2.5 w-2.5 items-center justify-center xl:-translate-x-1/2",
                      onLeft ? "xl:left-full" : "xl:left-0"
                    )}
                  >
                    {item.recent ? (
                      <PulseNode size="sm" />
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-full border border-orange-dim bg-panel" />
                    )}
                  </span>

                  <article className="group rounded-2xl border border-gray-line bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-dim hover:shadow-glow md:p-8">
                    <ConnectorLine className="mb-6" />
                    <h3 className="font-display text-2xl leading-snug text-paper">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm text-gray-body">{item.company}</p>
                    <p className="eyebrow mt-4 text-orange-bright">
                      {item.date}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <ChevronRight
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="mt-0.5 h-4 w-4 shrink-0 text-orange-core transition-colors duration-300 group-hover:text-orange-bright"
                          />
                          <span className="text-sm leading-relaxed text-gray-body">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        <div className="relative mt-16 md:mt-20 xl:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 bg-vignette blur-2xl"
          />
          <motion.div
            variants={listRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <motion.div key={stat.value} variants={itemRise} className="h-full">
                  <HexCard className="h-full text-center">
                    <p className="eyebrow text-orange-bright">Meta Ads result</p>
                    <p className="mt-5 font-display text-6xl leading-none text-orange-core [text-shadow:0_0_32px_rgba(255,106,0,0.5)] md:text-7xl">
                      {stat.value}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-gray-body">
                      {stat.label}
                    </p>
                  </HexCard>
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={itemRise}
              className="relative mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-gray-body"
            >
              Delivered through audience and creative testing, plus continuous
              analysis.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
