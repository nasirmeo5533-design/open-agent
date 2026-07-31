"use client";

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import type { PostMeta } from "@/lib/posts";
import { cn } from "@/lib/utils";

type Props = {
  posts: PostMeta[];
};

const ALL = "All";

export function BlogFilter({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered =
    activeCategory === ALL
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <MotionConfig reducedMotion="user">
      <div>
        <div
          className="flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filter posts by category"
        >
          {[ALL, ...BLOG_CATEGORIES].map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "inline-flex items-center rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors duration-300",
                  active
                    ? "border-orange-core bg-orange-core text-white"
                    : "border-line bg-white text-slate-600 hover:border-orange-core"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.ul layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((post) => (
              <motion.li
                key={post.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  readTime={post.readTime}
                  category={post.category}
                  slug={post.slug}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </MotionConfig>
  );
}
