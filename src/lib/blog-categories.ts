export const BLOG_CATEGORIES = [
  "SEO",
  "AI",
  "Ads",
  "Automation",
  "Content",
  "Video",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
