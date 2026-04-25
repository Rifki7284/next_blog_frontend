import SearchInput from "@/components/molecules/search-input";
import ArticleList from "@/components/organisms/article-list";
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

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string; q?: "" };
}) {
  const params = await searchParams;
  const query = params?.q || "";
  const page = Number(params?.page || 1);

  const posts: ArticlesResponse = await getArticles(page, query);
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
