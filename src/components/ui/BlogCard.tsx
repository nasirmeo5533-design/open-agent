import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <article className={cn("card card-hover group flex h-full flex-col", className)}>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center rounded-full bg-orange-core/10 px-3 py-1 text-xs font-bold text-orange-core">
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <Clock strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true" />
            {readTime}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900 transition-colors duration-300 group-hover:text-orange-core md:text-xl">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-orange-core transition-colors duration-300 hover:text-navy-900"
        >
          Read Post
          <ArrowRight
            strokeWidth={2.5}
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
