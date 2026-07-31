import { BlogCard } from "@/components/ui/BlogCard";
import { ButtonLink } from "@/components/ui/Button";
import { ConnectorLine } from "@/components/ui/ConnectorLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getPosts } from "@/lib/posts";

export function Blog() {
  const posts = getPosts().slice(0, 3);

  return (
    <SectionWrapper id="blog" className="relative">
      <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-8 lg:px-16">
        <Eyebrow>Blog</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] tracking-tight text-paper sm:text-4xl md:text-5xl">
          Ideas that grow stores.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-body sm:text-base">
          Simple strategies. Real numbers. No hype.
        </p>
        <ConnectorLine className="mt-8" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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

        <div className="mt-12">
          <ButtonLink href="/blog" variant="outline">
            Read all posts
          </ButtonLink>
        </div>
      </div>
    </SectionWrapper>
  );
}
