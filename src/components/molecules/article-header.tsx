import { Article } from "@/features/articles/types/articles";
import { ArticlesResponse } from "@/features/articles/types/articles-response";
import { calculateReadTime } from "@/features/articles/utils/calculateReadtime";
interface ArticleHeaderProps {
  article: Article;
  publishedDate: string;
}
const ArticleHeader = ({ article, publishedDate }: ArticleHeaderProps) => {
  const richText = article?.blocks?.find(
    (block) => block.__component === "shared.rich-text",
  );

  const readTime = calculateReadTime(richText?.body);
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-600">
          {article?.category.name}
        </span>
        <span className="text-xs text-black">{readTime} min read</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
        {article?.title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground text-sm">
        <span>
          By <strong className="text-foreground">{article?.author.name}</strong>
        </span>
        <span className="hidden sm:inline">•</span>
        <time dateTime={article?.publishedAt.toString()}>{publishedDate}</time>
      </div>
    </div>
  );
};
export default ArticleHeader;
