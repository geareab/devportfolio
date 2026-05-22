export type BlogFrontmatter = {
  title: string;
  description: string;
  publishDate: string;
  displayDate?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  draft?: boolean;
};

export type BlogPostModule = {
  frontmatter: BlogFrontmatter;
  Content: unknown;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  Content: unknown;
};

const modules = import.meta.glob<BlogPostModule>("../content/blog/*.md", {
  eager: true,
});

const getSlug = (path: string) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.md$/, "") ?? "";

export const getBlogPosts = () =>
  Object.entries(modules)
    .map(([path, post]) => ({
      slug: getSlug(path),
      frontmatter: post.frontmatter,
      Content: post.Content,
    }))
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishDate).getTime() -
        new Date(a.frontmatter.publishDate).getTime(),
    );

export const formatBlogDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

export const getBlogDisplayDate = (frontmatter: BlogFrontmatter) =>
  frontmatter.displayDate ?? formatBlogDate(frontmatter.publishDate);
