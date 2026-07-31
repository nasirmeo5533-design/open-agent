"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Dumbbell,
  Home,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Project = {
  name: string;
  tag: string;
  result: string;
  icon: LucideIcon;
  cover: string;
};

const projects: Project[] = [
  {
    name: "Aura Perfumes",
    tag: "D2C Fragrance",
    result: "30 sales from a PKR 1,000 Meta budget.",
    icon: Sparkles,
    cover: "bg-gradient-to-br from-navy-900 via-navy-800 to-navy-600",
  },
  {
    name: "GlowSkin Cosmetics",
    tag: "Beauty E-commerce",
    result: "Revenue doubled in one quarter.",
    icon: ShoppingBag,
    cover: "bg-gradient-to-br from-orange-core to-orange-bright",
  },
  {
    name: "TechStart SaaS",
    tag: "Lead Generation",
    result: "60% more qualified leads in 3 months.",
    icon: BarChart3,
    cover: "bg-gradient-to-br from-navy-800 to-navy-500",
  },
  {
    name: "Urban Threads",
    tag: "Fashion Store",
    result: "Full funnel automation live.",
    icon: Bot,
    cover: "bg-gradient-to-br from-orange-bright via-orange-core to-navy-700",
  },
  {
    name: "BioCare Wellness",
    tag: "Health Products",
    result: "Content engine + SEO ranking.",
    icon: Dumbbell,
    cover: "bg-gradient-to-br from-navy-700 to-navy-500",
  },
  {
    name: "Royal Furniture",
    tag: "Home Goods",
    result: "AI agents answering 90% of support tickets.",
    icon: Home,
    cover: "bg-gradient-to-br from-navy-950 to-navy-800",
  },
];

const listRise: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="portfolio" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <header className="text-center">
            <p className="eyebrow">Our Portfolio</p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl">
              Work that shows numbers.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-600">
              Real projects, real results — no vanity metrics.
            </p>
          </header>

          <motion.ul
            variants={listRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.li key={project.name} variants={itemRise} className="h-full">
                  <article className="card card-hover group flex h-full flex-col overflow-hidden">
                    <div
                      aria-hidden="true"
                      className={`relative flex h-44 items-center justify-center overflow-hidden ${project.cover}`}
                    >
                      <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-3 top-2 select-none font-display text-[7rem] font-extrabold leading-none text-white/15"
                      >
                        {project.name.charAt(0)}
                      </span>
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="relative h-16 w-16 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-navy-900">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-orange-core">
                        {project.tag}
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        {project.result}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-orange-core">
                        View Full
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>

          <div className="mt-14 flex justify-center">
            <a href="#contact" className="btn-primary">
              Start a Project Like These
            </a>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
