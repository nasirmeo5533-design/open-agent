"use client";

import { motion, MotionConfig } from "framer-motion";
import {
  Bot,
  Clapperboard,
  Megaphone,
  PenTool,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlowCard } from "@/components/ui/GlowCard";
import { PulseNode } from "@/components/ui/PulseNode";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

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
    description:
      "We buy clicks that convert. Not vanity traffic. Every dollar is tracked to a sale.",
    chips: ["Meta Ads", "Google Ads", "Funnel Building", "Landing Pages"],
  },
  {
    name: "SEO",
    icon: Search,
    hook: "Get found before your competitors.",
    description:
      "We rank for the searches your buyers actually type. Not generic keywords. The ones that bring sales.",
    chips: ["Technical SEO", "On-Page SEO", "Local SEO", "Content Strategy"],
  },
  {
    name: "Content Creation",
    icon: PenTool,
    hook: "Content that sounds human.",
    description:
      "Copy that reads like a person. Emails that sell like a machine. No robotic filler.",
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
      "Automations move your data. Chatbots answer your customers. Reports build themselves. Zero clicks.",
    chips: ["Workflow Automation", "Chatbots", "Data Pipelines", "Reporting"],
  },
  {
    name: "AI Agent Development",
    icon: Bot,
    hook: "Hire a team that never sleeps.",
    description:
      "Custom AI agents for support, sales, and admin. They learn your business. They never take a day off.",
    chips: ["Custom Agents", "Support Agents", "Sales Agents", "Admin Agents"],
  },
  {
    name: "Video Editing",
    icon: Clapperboard,
    hook: "Editing that stops the scroll.",
    description:
      "Ads and content cut for short attention spans. We hold attention for 5 seconds. Then you get the click.",
    chips: [
      "Short-Form Ads",
      "UGC Style",
      "Brand Videos",
      "Post-Production",
    ],
  },
];

const spokeLayout = [
  { left: "17%", top: "24%", angle: -60 },
  { left: "83%", top: "50%", angle: 0 },
  { left: "83%", top: "76%", angle: 60 },
  { left: "17%", top: "76%", angle: 120 },
  { left: "17%", top: "50%", angle: 180 },
  { left: "17%", top: "24%", angle: -120 },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
} as const;

function ServiceBody({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-dim bg-panel text-orange-core"
        >
          <Icon strokeWidth={1.5} className="h-5 w-5" />
        </span>
        <h3 className="pt-1 font-display text-lg leading-snug text-orange-bright">
          {service.hook}
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-body">
        {service.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.chips.map((chip) => (
          <li key={chip}>
            <span className="inline-block rounded-full border border-gray-line bg-panel px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-gray-body">
              {chip}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesHub() {
  return (
    <MotionConfig reducedMotion="user">
      <SectionWrapper
        id="services"
        className="relative overflow-hidden py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 xl:px-16">
          <header className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-paper md:text-5xl">
              Everything your store needs to grow.
              <span className="block text-orange-core">Under one roof.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
              Six specialists. One connected system. Pick one service or hand us
              the whole store.
            </p>
          </header>

          <div className="mt-16 md:mt-20 xl:mt-24">
            <ul className="mx-auto max-w-2xl space-y-6 xl:hidden">
              {services.map((service, i) => (
                <li key={service.name}>
                  <motion.div
                    initial={fadeUp.initial}
                    whileInView={fadeUp.whileInView}
                    viewport={fadeUp.viewport}
                    transition={{
                      duration: 0.55,
                      delay: 0.05 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <GlowCard className="p-6">
                      <ConnectorLine className="mb-6" />
                      <ServiceBody service={service} />
                    </GlowCard>
                  </motion.div>
                </li>
              ))}
            </ul>

            <div className="relative mx-auto hidden aspect-square w-full max-w-[880px] overflow-hidden xl:block">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 bg-vignette blur-2xl"
              />

              {spokeLayout.map((p, i) => (
                <div
                  key={`connector-${i}`}
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 z-[1] w-[33%]"
                  style={{
                    transformOrigin: "left",
                    transform: `rotate(${p.angle}deg)`,
                  }}
                >
                  <ConnectorLine />
                </div>
              ))}

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex h-40 w-40 items-center justify-center md:h-44 md:w-44">
                  <motion.span
                    className="absolute -inset-6 rounded-full border border-dashed border-orange-dim"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 90,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full border border-orange-dim bg-elevated animate-pulse-glow md:h-36 md:w-36">
                    <span className="absolute inset-4 rounded-full border border-orange-core/40" />
                    <PulseNode size="sm" />
                    <span className="relative font-display text-lg text-paper">
                      Open Agent
                    </span>
                    <span className="relative eyebrow">AI Core</span>
                  </div>
                </div>
              </div>

              <ul className="absolute inset-0">
                {services.map((service, i) => {
                  const p = spokeLayout[i];
                  return (
                    <li
                      key={service.name}
                      className="absolute z-10"
                      style={{ left: p.left, top: p.top }}
                    >
                      <div className="-translate-x-1/2 -translate-y-1/2">
                        <motion.article
                          initial={fadeUp.initial}
                          whileInView={fadeUp.whileInView}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.1 + i * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <GlowCard className="w-72 p-5">
                            <ServiceBody service={service} />
                          </GlowCard>
                        </motion.article>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-16 text-center md:mt-20">
              <p className="text-sm text-gray-body md:text-base">
                One team. No juggling vendors. Start with one service or all six.
              </p>
              <ButtonLink
                href="#contact"
                variant="primary"
                size="lg"
                className="mt-6"
              >
                Book a call
              </ButtonLink>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </MotionConfig>
  );
}
