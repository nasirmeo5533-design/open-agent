import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BLOG_CATEGORIES } from "./blog-categories";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

const postsDir = path.join(process.cwd(), "src", "content", "posts");

export { BLOG_CATEGORIES };

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        category: data.category ?? "General",
        readTime: data.readTime ?? "3 min read",
        date: data.date ?? "",
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const file = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    ...data,
    slug,
    content,
  } as PostMeta & { content: string };
}
