"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Bot,
  Clapperboard,
  Megaphone,
  PenTool,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Service = {
  name: string;
  hook: string;
  description: string;
  icon: LucideIcon;
  chips: string[];
};

const services: Service[] = [
  {
    name: "Digital Marketing",
    icon: Megaphone,
    hook: "Traffic that pays for itself.",
    description: "Buying clicks that convert, not vanity traffic.",
    chips: ["Meta Ads", "Google Ads", "Funnel Building", "Landing Pages"],
  },
  {
    name: "SEO",
    icon: Search,
    hook: "Get found before your competitors.",
    description: "Ranking for the searches your buyers actually type.",
    chips: ["Technical SEO", "On-Page SEO", "Local SEO", "Content Strategy"],
  },
  {
    name: "Content Creation",
    icon: PenTool,
    hook: "Content that sounds human.",
    description:
      "Copy and emails that read like a person and sell like a machine.",
    chips: [
      "Copywriting",
      "Email Campaigns",
      "Social Posts",
      "Product Descriptions",
    ],
  },
  {
    name: "AI Automation",
    icon: Workflow,
    hook: "Your store works while you sleep.",
    description:
      "Automations that move data, answer customers, and build reports.",
    chips: ["Workflow Automation", "Chatbots", "Data Pipelines", "Reporting"],
  },
  {
    name: "AI Agent Development",
    icon: Bot,
    hook: "Hire a team that never sleeps.",
    description: "Custom AI agents for support, sales, and admin.",
    chips: ["Custom Agents", "Support Agents", "Sales Agents", "Admin Agents"],
  },
  {
    name: "Video Editing",
    icon: Clapperboard,
    hook: "Editing that stops the scroll.",
    description: "Ads and content edited to hold attention for five seconds.",
    chips: [
      "Short-Form Ads",
      "UGC Style",
      "Brand Videos",
      "Post-Production",
    ],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesHub() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="services" className="scroll-mt-24 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p variants={item} className="eyebrow">
              Our Services
            </motion.p>
            <motion.h2
              variants={item}
              className="mt-4 text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl"
            >
              Everything your store needs to grow.{" "}
              <span className="text-orange-core">Under one roof.</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-5 text-base leading-relaxed text-slate-600"
            >
              Six specialists. One connected system. Pick one service or hand us
              the whole store.
            </motion.p>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.li key={service.name} variants={item} className="h-full">
                  <article className="card card-hover flex h-full flex-col p-7">
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-core to-orange-bright text-white shadow-btn"
                    >
                      <Icon strokeWidth={1.75} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-navy-900">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-orange-core">
                      {service.hook}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                      {service.chips.map((chip) => (
                        <li key={chip}>
                          <span className="inline-block rounded-full border border-line px-3 py-1 text-xs text-slate-600">
                            {chip}
                          </span>
                        </li>
                      ))}
                    </ul>
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
            className="mt-14 text-center md:mt-16"
          >
            <a href="#contact" className="btn-outline">
              Book a call
            </a>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
