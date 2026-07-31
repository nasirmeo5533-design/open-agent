import type { Metadata } from "next";
import { BlogFilter } from "@/components/BlogFilter";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Simple strategies, real numbers, no hype. Practical growth ideas for e-commerce stores from the Open Agent team.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main>
      <Nav />
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Blog</p>
            <h1 className="mt-4 text-3xl font-extrabold text-navy-900 md:text-4xl lg:text-5xl">
              Ideas that grow stores.
            </h1>
            <p className="mt-4 text-slate-600">
              Simple strategies. Real numbers. No hype.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <BlogFilter posts={posts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
