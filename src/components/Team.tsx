"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Member = {
  name: string;
  role: string;
  focus: string;
};

const members: Member[] = [
  {
    name: "Abeer Nasir",
    role: "Founder & Growth Strategist",
    focus: "Sets the direction. Owns your results.",
  },
  {
    name: "Sarah Ahmed",
    role: "SEO & Content Lead",
    focus: "Makes your store impossible to miss.",
  },
  {
    name: "Hamza Malik",
    role: "AI Automation Engineer",
    focus: "Builds the workflows that never sleep.",
  },
  {
    name: "Zain Ali",
    role: "AI Agent Developer",
    focus: "Trains agents that work like a team.",
  },
  {
    name: "Fatima Raza",
    role: "Meta Ads Specialist",
    focus: "Turns small budgets into real sales.",
  },
  {
    name: "Bilal Khan",
    role: "Video Editor",
    focus: "Makes the scroll stop on your brand.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Team() {
  const reduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: i * 0.07,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <SectionWrapper
      id="team"
      className="relative overflow-hidden bg-elevated py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 bg-vignette opacity-50"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10 xl:px-16">
        <header className="max-w-2xl">
          <Eyebrow>TEAM</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-paper md:text-5xl">
            The specialists behind your growth.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
            Six experts. One system. One goal — your store’s numbers going up.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <li key={member.name}>
              <motion.article
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <GlowCard className="h-full hover:-translate-y-1.5">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-core bg-panel font-display text-base text-orange-bright"
                  >
                    {initials(member.name)}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-paper">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-orange-bright">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-body">
                    {member.focus}
                  </p>
                </GlowCard>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
