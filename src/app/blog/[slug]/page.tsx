import type { ComponentProps } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPost, getPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";

const mdxComponents = {
  h2: ({ className, ...props }: ComponentProps<"h2">) => (
    <h2
      className={cn("mb-4 mt-10 text-2xl font-extrabold text-navy-900", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<"h3">) => (
    <h3
      className={cn("mb-3 mt-8 text-xl font-bold text-navy-900", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p className={cn("my-4 leading-relaxed text-slate-600", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentProps<"ul">) => (
    <ul className={cn("my-4 list-disc space-y-2 pl-6 text-slate-600", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps<"li">) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  strong: ({ className, ...props }: ComponentProps<"strong">) => (
    <strong className={cn("font-bold text-ink", className)} {...props} />
  ),
  a: ({ className, ...props }: ComponentProps<"a">) => (
    <a
      className={cn(
        "text-orange-core underline decoration-orange-core underline-offset-4 transition-colors duration-300 hover:text-navy-900",
        className
      )}
      {...props}
    />
  ),
  em: ({ className, ...props }: ComponentProps<"em">) => (
    <em className={cn("italic text-orange-core", className)} {...props} />
  ),
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(`${post.date}T00:00:00`).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <main>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-orange-core transition-colors duration-300 hover:text-navy-900"
        >
          <span aria-hidden="true">&larr;</span> All posts
        </Link>

        <header className="mt-8">
          <span className="inline-flex items-center rounded-full bg-orange-core/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-orange-core">
            {post.category}
          </span>
          <h1 className="mt-6 text-3xl font-extrabold text-navy-900 md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden="true" className="h-4 w-4" />
              {post.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar aria-hidden="true" className="h-4 w-4" />
              {formattedDate}
            </span>
          </p>
        </header>

        <div className="mt-10 border-t border-line pt-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
      <Footer />
    </main>
  );
}
