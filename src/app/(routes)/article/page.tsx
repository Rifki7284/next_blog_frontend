import ArticleList from "@/components/organisms/article-list";
import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getArticles } from "@/features/articles/services/blogServices";
import { ArticlesResponse } from "@/features/articles/types/articles-response";
import { Metadata } from "next";
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
export const revalidate = 300;

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const params = await searchParams;
  const page = Number(params?.page || 1);

  const posts: ArticlesResponse = await getArticles(page);
  const article = posts.data;

  const pagination = posts.meta.pagination;

  return (
    <main className="flex-1">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl font-bold">All Articles</h1>
      </section>

      <ArticleList data={article} />

      <div className="flex justify-center py-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={page > 1 ? `?page=${page - 1}` : undefined}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={
                  page < pagination.pageCount ? `?page=${page + 1}` : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
