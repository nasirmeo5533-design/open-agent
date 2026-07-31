"use client";

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "what-is-ai-marketing",
    question:
      "What is AI-powered digital marketing, and why does my business need it?",
    answer:
      "It promotes your store on search, social, and ads — with AI doing the heavy lifting. You reach the right people and grow faster.",
  },
  {
    id: "how-can-open-agent-help",
    question: "How can Open Agent help my store grow?",
    answer:
      "We build one connected system: ads, SEO, content, and AI automation. You get transparent, data-based results.",
  },
  {
    id: "will-services-increase-sales",
    question: "Will your services increase my sales?",
    answer:
      "Yes. The system brings in the right people, builds trust, and moves them to buy. We optimize campaigns specifically for sales.",
  },
  {
    id: "lead-generation",
    question: "Do you offer lead generation?",
    answer:
      "Yes. Focused ads, content, and landing pages that bring in buyers actively searching for your products.",
  },
  {
    id: "small-budget",
    question: "Can you work with a small budget?",
    answer:
      "Yes. Small budgets are welcome. We prove results before you scale.",
  },
  {
    id: "expected-results",
    question: "What results can I expect?",
    answer:
      "More leads, engagement, and sales. We report weekly so you always know what is working.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <MotionConfig reducedMotion="user">
      <section id="faq" className="band-cloud py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl">
              Clear answers to quick questions.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((item) => {
              const open = openId === item.id;
              const buttonId = `faq-button-${item.id}`;
              const panelId = `faq-panel-${item.id}`;
              return (
                <div key={item.id} className="card overflow-hidden">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenId(open ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-bold text-navy-900">
                        {item.question}
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "h-5 w-5 shrink-0 text-orange-core transition-transform duration-300",
                          open && "rotate-180"
                        )}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-line px-6 py-5 text-sm leading-relaxed text-slate-600 md:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
