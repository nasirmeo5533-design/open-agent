import type { ComponentProps } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Clock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { getPost, getPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";

const mdxComponents = {
  h2: ({ className, ...props }: ComponentProps<"h2">) => (
    <h2
      className={cn(
        "mt-12 mb-4 font-display text-2xl leading-snug text-paper md:text-3xl",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-10 mb-3 font-display text-xl leading-snug text-paper",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p
      className={cn("my-4 leading-relaxed text-gray-body", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentProps<"ul">) => (
    <ul
      className={cn("my-4 list-disc space-y-2 pl-6 text-gray-body", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentProps<"li">) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  strong: ({ className, ...props }: ComponentProps<"strong">) => (
    <strong
      className={cn("font-semibold text-paper", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentProps<"a">) => (
    <a
      className={cn(
        "text-orange-core underline decoration-orange-dim underline-offset-4 transition-colors duration-300 hover:text-orange-bright",
        className
      )}
      {...props}
    />
  ),
  em: ({ className, ...props }: ComponentProps<"em">) => (
    <em className={cn("italic text-orange-bright", className)} {...props} />
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
      <article className="border-t border-gray-line">
        <div className="mx-auto max-w-3xl px-6 pt-10">
          <Link
            href="/blog"
            className="glow-sweep inline-flex text-xs font-semibold uppercase tracking-[0.08em] text-gray-body transition-colors duration-300 hover:text-orange-bright"
          >
            &larr; All posts
          </Link>

          <header className="mt-8">
            <span className="clip-hex-sm inline-flex items-center border border-orange-dim bg-elevated px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-orange-bright">
              {post.category}
            </span>
            <h1 className="mt-6 font-display text-3xl leading-[1.1] tracking-tight text-paper sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-body">
              <Clock strokeWidth={1.5} className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime}
              <span aria-hidden="true">·</span>
              {formattedDate}
            </p>
          </header>

          <ConnectorLine className="mt-8" />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-12">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
      <Footer />
    </main>
  );
}
