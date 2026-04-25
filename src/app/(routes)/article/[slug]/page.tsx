import ArticleNotFound from "@/components/molecules/article-not-found";
import ArticleContent from "@/components/organisms/article-content";
import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";
import {
  getArticleBySlug,
  getArticles,
} from "@/features/articles/services/blogServices";
import { ArticlesResponse } from "@/features/articles/types/articles-response";
import { formatDate } from "@/features/articles/utils/formatDate";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;
  const post: ArticlesResponse = await getArticleBySlug(slug);
  const article = post.data[0];

  const seo = article?.blocks?.find(
    (block) => block.__component === "shared.seo",
  );
  if (!seo) {
    return {
      title: "Article Not Found",
      description: "Article Not Found",
    };
  }
  const url = `${APP_URL}article/${slug}`;

  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    alternates: {
      canonical: seo?.canonicalURL || url,
    },
    keywords: seo?.keywords?.split(",").map((k) => k.trim()) || [],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: url,
      title: seo?.ogTitle,
      description: seo?.ogDescription,
      images: seo?.ogImage?.url ? [`${BASE_URL}${seo.ogImage.url}`] : [],
      siteName: "My blog",
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle,
      description: seo?.twitterDescription,
      images: seo?.twitterImage?.url,
    },
  };
}
export const revalidate = 300;
export async function generateStaticParams() {
  const posts: ArticlesResponse = await getArticles();
  return posts?.data.map((post) => ({
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
  const post: ArticlesResponse = await getArticleBySlug(slug);
  const article = post.data[0];
  const publishedDate = formatDate(article?.publishedAt);
  if (!article) return <ArticleNotFound />;

  return <ArticleContent article={article} publishedDate={publishedDate} />;
}
