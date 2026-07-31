"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  PenTool,
  ShoppingBag,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PulseNode } from "@/components/ui/PulseNode";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Generative AI Solutions",
    description:
      "AI solutions built with ChatGPT, Gemini and Claude for marketing and operations.",
    icon: Brain,
  },
  {
    title: "AI Agents & Automation",
    description:
      "Chatbots and virtual assistants for support and lead generation.",
    icon: Bot,
  },
  {
    title: "Meta Ads Management",
    description: "Plan, launch and optimize Meta Ads for real return.",
    icon: Target,
  },
  {
    title: "Shopify Optimization",
    description: "Store setup, product pages and CRO for e-commerce.",
    icon: ShoppingBag,
  },
  {
    title: "AI Content Creation",
    description: "Ad creatives, social posts, email copy — on-brand and scalable.",
    icon: PenTool,
  },
  {
    title: "Workflow Automation",
    description: "No-code efficiency workflows for day-to-day operations.",
    icon: Workflow,
  },
];

const spokeLayout = [
  { left: "66.5%", top: "21.4%", angle: -60 },
  { left: "83%", top: "50%", angle: 0 },
  { left: "66.5%", top: "78.6%", angle: 60 },
  { left: "33.5%", top: "78.6%", angle: 120 },
  { left: "17%", top: "50%", angle: 180 },
  { left: "33.5%", top: "21.4%", angle: -120 },
];

function SpokeContent({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="flex items-start gap-4 xl:flex-col xl:gap-3">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-dim bg-panel text-orange-core transition-colors duration-300 group-hover:text-orange-bright"
      >
        <Icon strokeWidth={1.5} className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-display text-lg leading-snug text-paper">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-body">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesHub() {
  return (
    <SectionWrapper
      id="services"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 xl:px-16">
        <header className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-paper md:text-5xl xl:text-6xl">
            What I do
            <span className="block text-orange-core">
              six ways AI moves your business.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-body md:text-base">
            Every service is delivered as a measurable system — not a
            deliverable folder.
          </p>
        </header>

        <div className="mt-16 md:mt-20 xl:mt-24">
          <ul className="mx-auto max-w-2xl space-y-6 xl:hidden">
            {services.map((service, i) => (
              <li key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="group rounded-2xl border border-gray-line bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-dim hover:shadow-glow">
                    <ConnectorLine className="mb-6" />
                    <SpokeContent service={service} />
                  </div>
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
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-orange-dim bg-elevated animate-pulse-glow md:h-36 md:w-36">
                  <span className="absolute inset-4 rounded-full border border-orange-core/40" />
                  <span className="absolute inset-9 rounded-full bg-orange-core/15" />
                  <PulseNode size="lg" />
                </div>
              </div>
            </div>

            <ul className="absolute inset-0">
              {services.map((service, i) => {
                const p = spokeLayout[i];
                return (
                  <li
                    key={service.title}
                    className="absolute z-10"
                    style={{ left: p.left, top: p.top }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2">
                      <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1 + i * 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="group w-64 rounded-2xl border border-gray-line bg-elevated p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-dim hover:shadow-glow">
                          <SpokeContent service={service} />
                        </div>
                      </motion.article>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
