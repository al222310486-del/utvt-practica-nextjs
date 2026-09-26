// app/types/blog.ts

export type BlogPost = {
  title: string;
  paragraphs: string[];
};

export type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};