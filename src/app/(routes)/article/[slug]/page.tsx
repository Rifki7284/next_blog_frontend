import {
  getArticleBySlug,
  getArticles,
} from "@/features/articles/services/blogServices";
import { Article } from "@/features/articles/types/articles";
import { ArticlesResponse } from "@/features/articles/types/articles-response";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: "",
    keywords: "",
    openGraph: {
      type: "article",
      locale: "en_US",
      url: "",
      title: "",
      description: "",
      images: "",
      siteName: "",
    },
    twitter: {
      card: "summary_large_image",
      title: "",
      description: "",
      images: "",
    },
  };
}
export async function generateStaticParams() {
  const posts: ArticlesResponse = await getArticles();
  return posts.data.map((post) => ({
    id: String(post.id),
    slug: String(post.slug),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Article = await getArticleBySlug(slug);
  return (
    <main>
      <h1>{post.title}</h1>
    </main>
  );
}
