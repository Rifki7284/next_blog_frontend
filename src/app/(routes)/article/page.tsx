import ArticleHeader from "@/components/molecules/article-header";
import AuthorInfo from "@/components/molecules/author-info";
import { ArticleCard } from "@/components/organisms/article-card";
import ArticleContent from "@/components/organisms/article-content";
import ArticleList from "@/components/organisms/article-list";
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
export async function generateMetadata(): Promise<Metadata> {
  const url = `${APP_URL}article`;

  const title = "Artikel Terbaru & Insight Teknologi | My Blog";
  const description =
    "Kumpulan artikel terbaru seputar web development, teknologi, programming, dan berbagai insight menarik lainnya.";

  const keywords = [
    "blog teknologi",
    "artikel programming",
    "web development",
    "tutorial coding",
    "javascript",
    "next js",
    "laravel",
    "tips developer",
  ];

  const image = `${APP_URL}/images/og-default.jpg`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "My Blog",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Artikel Terbaru My Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
export const revalidate = 60;
export async function generateStaticParams() {
  const posts: ArticlesResponse = await getArticles();
  return posts?.data.map((post) => ({
    id: String(post.id),
    slug: String(post.slug),
  }));
}

export default async function Page() {
  const posts: ArticlesResponse = await getArticles();
  const article = posts.data;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            All Articles
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse through our collection of insightful articles
          </p>
        </section>
        <ArticleList data={article} />
      </main>
      <Footer />
    </div>
  );
}
