"use client";

import { motion, MotionConfig } from "framer-motion";

const clients = [
  "Urban Outfit Tech",
  "Glowskin",
  "Techstart",
  "Modern Deals",
  "Gulf Real Estate",
  "Bio Care",
  "Royaute",
  "Scents & Stories",
];

export function Clients() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="clients" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.header
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">OUR CLIENTS</p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl">
              Brands that trust the system.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              From perfume stores to SaaS — D2C brands that run on Open Agent.
            </p>
          </motion.header>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 md:mt-16">
            {clients.map((name, i) => (
              <motion.span
                key={name}
                className="text-center text-xl font-extrabold uppercase tracking-widest text-slate-400"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-slate-500">
            Client names shared with permission. Logos shown as text for
            confidentiality.
          </p>
        </div>
      </section>
    </MotionConfig>
  );
}
