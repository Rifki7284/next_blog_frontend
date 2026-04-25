import { Article } from "@/features/articles/types/articles";
import { ArticleCard } from "./article-card";
import { ArticleListProps } from "@/features/articles/types/articles-response";
import SearchInput from "../molecules/search-input";
import SearchNotFound from "./search-not-found";

const ArticleList = ({ data }: ArticleListProps) => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="my-5 flex justify-start">
        <SearchInput />
      </div>
      {data.length === 0 ? (
        <SearchNotFound />
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((article: Article) => (
              <ArticleCard
                key={article.slug}
                author={article.author}
                category={article.category}
                slug={article.slug}
                publishedAt={article.publishedAt}
                cover={article.cover}
                blocks={article.blocks}
                description={article.description}
                id={article.id}
                title={article.title}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
export default ArticleList;
