import Link from "next/link";
import { BlogCard } from "@/components/ui/BlogCard";
import { getPosts } from "@/lib/posts";

export function Blog() {
  const posts = getPosts().slice(0, 3);

  return (
    <section id="blog" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Blog</p>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl">
            Ideas that grow stores.
          </h2>
          <p className="mt-4 text-slate-600">
            Simple strategies. Real numbers. No hype.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              readTime={post.readTime}
              category={post.category}
              slug={post.slug}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="btn-outline">
            Read All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
