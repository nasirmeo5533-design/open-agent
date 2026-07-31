"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Hina S.",
    role: "Co-Founder, Urban Outfit Tech",
    quote:
      "Open Agent automated our entire sales funnel. Consistent traffic, steady growth — finally.",
  },
  {
    name: "Sarah M.",
    role: "CEO, GlowSkin Cosmetics",
    quote:
      "Their AI-driven ads doubled our revenue in one quarter. ROI-focused and professional.",
  },
  {
    name: "Ali R.",
    role: "Sales Director, TechStart",
    quote:
      "Qualified leads up 60% in three months. The data-driven approach is exactly what we needed.",
  },
  {
    name: "Ahmed K.",
    role: "Marketing Manager, Gulf Real Estate",
    quote:
      "Website traffic up 75%. Their lead systems actually convert.",
  },
  {
    name: "Faisal B.",
    role: "CEO, Modern Deals Group",
    quote:
      "They turned stagnant campaigns into high-performance funnels that generate revenue on their own.",
  },
];

const STARS = [0, 1, 2, 3, 4];

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [perPage, setPerPage] = useState(1);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = reduceMotion ? 0 : Math.min(page, totalPages - 1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerPage(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const total = Math.ceil(testimonials.length / perPage);
    setPage((p) => Math.min(p, total - 1));
  }, [perPage]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setPage((p) => (p + 1) % totalPages),
      6000
    );
    return () => window.clearInterval(id);
  }, [reduceMotion, totalPages]);

  const goTo = (next: number) => setPage((next + totalPages) % totalPages);

  const visible = testimonials.slice(current, current + perPage);

  return (
    <MotionConfig reducedMotion="user">
      <section id="testimonials" className="band-navy py-20">
        <div className="mx-auto max-w-7xl px-6">
          <header className="text-center">
            <p className="eyebrow text-white">Testimonials</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Clients. Real words.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              The people running these numbers said it best.
            </p>
          </header>

          <div className="mt-14">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`page-${current}-${perPage}`}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduceMotion ? 0 : -32 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 gap-6 lg:grid-cols-3"
              >
                {visible.map((t) => (
                  <figure
                    key={t.name}
                    className="card-dark flex h-full flex-col p-7"
                  >
                    <div
                      aria-label="Rated 5 out of 5 stars"
                      className="flex gap-1"
                    >
                      {STARS.map((i) => (
                        <Star
                          key={i}
                          aria-hidden="true"
                          className="h-5 w-5 fill-orange-core text-orange-core"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-white/85">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto pt-7">
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="mt-1 text-sm text-orange-core">{t.role}</p>
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {!reduceMotion && (
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-orange-core hover:bg-orange-core"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial page ${i + 1}`}
                    aria-current={i === current}
                    className={
                      i === current
                        ? "h-2.5 w-7 rounded-full bg-orange-core transition-all"
                        : "h-2.5 w-2.5 rounded-full bg-white/30 transition-all hover:bg-white/60"
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(current + 1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-orange-core hover:bg-orange-core"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}
