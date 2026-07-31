import Link from "next/link";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { HexCard } from "./HexCard";

type Props = {
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  slug: string;
  className?: string;
};

export function BlogCard({
  title,
  excerpt,
  readTime,
  category,
  slug,
  className,
}: Props) {
  return (
    <HexCard
      className={cn("group flex h-full flex-col p-6 md:p-8", className)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-orange-bright transition-colors duration-300 group-hover:text-orange-core">
          {category}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-body">
          <Clock strokeWidth={1.5} className="h-3.5 w-3.5" aria-hidden="true" />
          {readTime}
        </span>
      </div>
      <h3 className="mt-6 font-display text-xl leading-snug text-paper transition-colors duration-300 group-hover:text-orange-bright md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-body">
        {excerpt}
      </p>
      <Link
        href={`/blog/${slug}`}
        className="glow-sweep mt-6 inline-flex self-start text-xs font-semibold uppercase tracking-[0.08em] text-orange-core transition-colors duration-300 hover:text-orange-bright"
      >
        Read post
      </Link>
    </HexCard>
  );
}
