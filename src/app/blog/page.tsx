import type { Metadata } from "next";
import { BlogFilter } from "@/components/BlogFilter";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
      <section className="border-b border-gray-line">
        <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-8 lg:px-16">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl">
            Ideas that grow stores.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-body sm:text-base">
            Simple strategies. Real numbers. No hype.
          </p>
          <ConnectorLine className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 lg:px-16">
        <BlogFilter posts={posts} />
      </section>

      <Footer />
    </main>
  );
}
